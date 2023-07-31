import { useState, useEffect } from "react";

import axios from "axios";
import {
  Box,
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

//Lis of All Products will be displayed in the Hompe page
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const url = `https://fakestoreapi.com/products`;
      const products = await axios.get(url);
      setProducts(products.data);
    };
    fetchProducts();
  }, []);

  var cardStyle = {
    display: "block",
    textDecoration: "none",
    transitionDuration: "0.3s",
    height: "23vw",
    padding: "10px",
  };
  return (
    <Box
      sx={{
        border: "1px solid #c99c24",
        width: "1430px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1px",
        margin: "10px auto",
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={2} sx={{ padding: "7px" }}>
        {products.map((product) => {
          return (
            <Grid item md={2} xs={12} key={product.id}>
              <>
                <Link
                  to={`/details/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card key={product.id} style={cardStyle}>
                    <CardActionArea onClick={() => {}}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography variant="body2" component="div">
                          {product.title}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Typography component="span">
                            {product.rating.rate}
                          </Typography>
                          <Rating
                            name="read-only"
                            value={product.rating.rate}
                            readOnly
                            precision={0.1}
                          />
                        </Stack>

                        <Typography variant="body2" color="text.primary">
                          <b>${product.price}</b>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AllProducts;
