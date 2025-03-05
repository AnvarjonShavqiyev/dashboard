import { useState, useEffect } from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddProductDialog from "../components/AddProductDialog";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0) 
  const products = [
    {
        id: 1,
        name: "Kitob",
        price: 1000,
        image: '../src/assets/kitob.avif'
    },
    {
        id: 2,
        name: "Kitob 3x",
        price: 2500,
        image: '../src/assets/kitob3x.jpg'
    },
    {
        id: 3,
        name: "Tonggacha suhbat",
        price: 5000,
        image: '../src/assets/phone.jpg'
    }
  ]

  useEffect(() => {
    const totalAmount = localStorage.getItem('balance') || 0;
    setAmount(+totalAmount);
  }, [open])

  const onUsage = (id: number) => {
    console.log(id)
    const product = products.find((product) => product.id === id)
    const usages = JSON.parse(localStorage.getItem('usage') || '[]')
    usages.push(product)
    localStorage.setItem('usage', JSON.stringify(usages))
    if (product?.price !== undefined) {
        localStorage.setItem("balance", String(amount - product.price));
        setAmount(amount - product.price);
    }
  }

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" gutterBottom>Shop</Typography>
        <Typography variant="h4" gutterBottom>Balance: {amount} ta xo'rozqand</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}  sx={{
    backgroundColor: "#F48FB1", 
    "&:hover": { backgroundColor: "#F06292" }, 
  }}>
            Add Xo'rozqand
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              onUse={() => onUsage(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    <AddProductDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default Shop;
