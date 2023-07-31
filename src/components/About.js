import React from "react";
import { Container, Typography, List, ListItem, Box } from "@mui/material";

const About = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        border: "1px solid #c99c24",
        width: "1430px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1px",
        margin: "10px auto",
        minHeight:"85vh"
      }}
    >
      <Box sx={{ color: "white" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to SwiftKart.com!
        </Typography>
        <Typography variant="body1">
          At SwiftKart, we take pride in offering a unique shopping experience
          where you can explore an incredible variety of products that don't
          actually exist. From mythical creatures to futuristic gadgets, we've
          got it all.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Why Choose SwiftKart Store?
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Unparalleled Variety: Discover an extensive catalog of fantastical
              products, inspiring your creativity.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Quality in the Unreal: Our detailed descriptions and high-quality
              images bring these imaginary products to life.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Stress-Free Shopping: No shipping times or returns to worry about
              – simply enjoy the experience in your mind's eye.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Environmental-Friendly: With no real products, we have zero
              environmental impact.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          How It Works:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Explore Our Catalog: Dive into our imaginative collection, from
              magical potions to time-traveling devices.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Create Your Wishlist: Save your favorite imaginary products and
              revisit them anytime.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Let Your Imagination Soar: Visualize how these products would fit
              into your life, and let your creativity take flight.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="body1">
          Thank you for visiting  SwiftKart, where reality meets fantasy in the
          most delightful way possible. Enjoy the journey into the realm of the
          imaginary!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
