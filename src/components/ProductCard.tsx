import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  onUse: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, onUse }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>
        <Typography variant="body1" color="text.secondary">{price} so'm</Typography>
      </CardContent>
      <CardActions>
      <Button
      onClick={onUse}
  variant="contained"
  sx={{
    backgroundColor: "#F48FB1", 
    "&:hover": { backgroundColor: "#F06292" }, 
  }}
>
  Foydalanish
</Button>

      </CardActions>
    </Card>
  );
};

export default ProductCard;
