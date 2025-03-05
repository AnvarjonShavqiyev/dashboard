import { useState, useEffect } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const Usage = () => {
  const [usages, setUsages] = useState(() => {
    return JSON.parse(localStorage.getItem("usage") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("usage", JSON.stringify(usages));
  }, [usages]);

  const handleRemove = (index: number) => {
    const updatedUsages = usages.filter((_:any, i:any) => i !== index);
    setUsages(updatedUsages);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Usage History</Typography>
      <Grid container spacing={2}>
        {usages.length > 0 ? (
          usages.map((usage: any, index: any) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="140" image={usage.image} alt={usage.name} />
                <CardContent>
                  <Typography variant="h6">{usage.name}</Typography>
                  <Typography color="textSecondary">💰 {usage.price} so'm</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemove(index)}
                    sx={{ marginTop: "8px" }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography color="textSecondary" sx={{margin:"20px"}}>No usage history available</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Usage;
