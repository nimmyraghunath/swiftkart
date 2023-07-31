import {
  Box,
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Rating,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductsByCategory = () => {
  const { categoryname } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Hi");
    const fetchProducts = async () => {
      const url = `https://fakestoreapi.com/products/category/${JSON.parse(
        JSON.stringify(categoryname)
      )}`;
      const products = await axios.get(url);
      setProducts(products.data);
    };
    fetchProducts();
  }, [categoryname]);

  var cardStyle = {
    display: "block",
    textDecoration: "none",
    transitionDuration: "0.3s",
    height: "23vw",
    padding: "10px",
  };
  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{
          flexGrow: 1,
          width: "100%,",
          textTransform: "capitalize",
          textAlign: "left",
          padding: "5px",
          marginTop: "10px",
          color:"white",
          backgroundColor:"#ffc107",
          fontWeight:"bold"
        }}
      >
        {categoryname}
      </Typography>
      <Box
        sx={{
          border: "1px solid #c99c24",
          width: "1430px",
          display: "flex",
          justifyContent: "top",
          alignItems: "flex-start",
          paddingTop: "1px",
          margin: "10px auto",
          minHeight:"81vh"
        }}
      >
        <Grid
          container
          rowSpacing={4}
          columnSpacing={2}
          sx={{ padding: "7px" }}
        >
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
    </>
  );
};

export default ProductsByCategory;
/* <Grid container>
        {products?.map((product) => { return(
          <Card key={product.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )})}
      </Grid>*/
