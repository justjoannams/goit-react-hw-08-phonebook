import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/register" color="inherit">Register</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navigation;
