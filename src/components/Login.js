import axios from "axios";
import { useState } from "react";
import { Button,TextField,DialogContent ,DialogTitle,Dialog,Box, DialogActions} from "@mui/material";

const Login = ({token, setToken}) => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);

        setToken(response.data.token);
        localStorage.setItem("userToken", token);
      });
      
  };

  
  return (
    <>
      <Box>
        <Button
          variant="outlined"
          color="inherit"
          size="medium"
          onClick={handleOpen}
        >
          Login
        </Button>
      </Box>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            margin="dense"
            id="pwd"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ textAlign: "center" }}>
          <Button variant="contained" onClick={handleLogin}  color="warning">
            Login
          </Button>
          <Button variant="contained" onClick={handleDialogClose} color="warning">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
