
import { Container, Typography } from "@mui/material";

const footerStyle = {
  marginTop: "auto",
  backgroundColor: "#ff9800",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} SwiftKart. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
