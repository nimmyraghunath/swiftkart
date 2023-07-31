import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
//import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import axios from "axios";


const Header = () => {
  const [categories, setCategories] = useState([]);
  const [categoryButton, setCategoryButton] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const url = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await axios.get(url);
      setCategories(allCategories.data);
    };
    fetchAllCategories();
  }, []);

  const handleMenuClick = (category) => {
    setCategoryButton(null);
    navigate(`/category/${JSON.parse(JSON.stringify(category))}`);
  };

  const handleClose = () => {
    setCategoryButton(null);
  };
  const handleClick = (e) => {
    setCategoryButton(e.currentTarget);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.clear();
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fffff",
  };

  const appBarStyle = {
    backgroundColor: "#ff9800",
  };

  return (
    <>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            disableRipple
            aria-label="logo"
          >
            <MenuIcon />
          </IconButton> */}
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            disableRipple
            aria-label="logo"
          >
            <ShopIcon />
          </IconButton>
          <Link to="/" className="menuAll" style={{...linkStyle, flexGrow:1}}>
          <Typography variant="h6" component="div">
         SwiftKart
          </Typography>
          </Link>

          <Stack direction="row" spacing="1">
            <Button color="inherit" disableRipple>
              <Link to="/" className="menuAll" style={linkStyle}>
                All
              </Link>
            </Button>

            <Button
              color="inherit"
              // id="categoryBtn"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              variant="text"
            >
              Categories
            </Button>
            <Button color="inherit">
              <Link to="about"  style={linkStyle}>
                About
              </Link>
            </Button>
            <Button startIcon={<ShoppingCartIcon />} color="inherit">
            <Link to="cart"  style={linkStyle}>
              Cart
              </Link>
            </Button>
            {token ? (
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Login token={token} setToken={setToken} />
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Menu
        id="menuCategory"
        anchorEl={categoryButton}
        keepMounted
        open={Boolean(categoryButton)}
        onClose={handleClose}
      >
        {categories.map((category, index) => {
          return (
            <MenuItem
              value={category}
              key={index}
              onClick={() => handleMenuClick(category)}
              sx={{ textTransform: "uppercase", fontSize: "14px" }}
            >
              {category}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Header;
