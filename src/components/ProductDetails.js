import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Rating,
  Dialog,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({
    rating: {
      rate: 0.0,
    },
  });

  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [showError, setShowError] = useState(false);

  const url = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    const fetchProductDetails = async () => {
      const prdDetails = await axios.get(url);
      setProductDetails(prdDetails.data);
    };
    fetchProductDetails();
  }, [url]);

  const handleAddToCart = () => {
    setShowError(false);
    const token = localStorage.getItem("userToken");

    if (count <= 0) {
      setShowError(true);
      return;
    }

    if (token) {
      axios
        .post("https://fakestoreapi.com/carts", {
          userId: 5,
          date: "2020-02-03",
          products: [{ productId: id, quantity: count }],
        })
        .then((result) => {
          console.log(result.data);
        });
    } else {
      alert("please login to continue");
      return;
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #c99c24",
        width: "1430px",
        display: "flex",
        justifyContent: "top",
        alignItems: "flex-start",
        paddingTop: "15px",
        margin: "10px auto",
        minHeight: "85vh",
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={productDetails.image}
            alt="no-pic"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {productDetails.title}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography component="span">
                {productDetails.rating?.rate}
              </Typography>
              <Rating
                name="product-rating"
                value={productDetails.rating?.rate}
                defaultValue={0.1}
                readOnly
                precision={0.5}
              />
            </Stack>
            <Typography variant="body1">
              {productDetails.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price: ${productDetails.price}
            </Typography>
            {showError && (
                <Stack direction="column">
                <Typography component="span" sx={{ color: "red" }}>
                  
                  Plese select quantity.
                </Typography></Stack>
              )}
            <CardActions>
             
              <Stack direction="row">
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "100px", height: "25px", width: "10px" }}
                  onClick={() =>
                    count === 0 ? setCount(0) : setCount(count - 1)
                  }
                >
                  -
                </Button>
                <Typography
                  component="span"
                  sx={{
                    textAlign: "center",
                    borderRadius: "10px",
                    minWidth: "25px",
                    marginLeft: "7px",
                    marginRight: "7px",
                  }}
                >
                  {count}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{ borderRadius: "100px", height: "25px", width: "20px" }}
                  onClick={() => {
                    setCount(count + 1);
                    setShowError(false);
                  }}
                >
                  +
                </Button>
              </Stack>

              <Button
                variant="contained"
                size="medium"
                disableRipple
                onClick={handleAddToCart}
                sx={{ margin: "15px" }}
                color="warning"
              >
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
      <Dialog>
        <DialogContentText>Please login to continue.</DialogContentText>
        <DialogActions></DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductDetails;
