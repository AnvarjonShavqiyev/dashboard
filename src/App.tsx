import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CssBaseline, List, ListItem, ListItemText, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Shop from "./pages/Shop";
import Logs from "./pages/Logs";
import "./app.css";
import Usage from "./pages/Usage";

const theme = createTheme({
  palette: { primary: { main: "#1976d2" } },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, textTransform: "none", fontSize: "1rem" } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 12, transition: "0.3s", "&:hover": { boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" } } } },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box className="dashboard-container">
          <Box className="sidebar">
            <List className="menu">
              <ListItem component={Link} to="/">
                <ListItemText primary="Shop" />
              </ListItem>
              <ListItem component={Link} to="/logs">
                <ListItemText primary="Logs" />
              </ListItem>
              <ListItem component={Link} to="/usage">
                <ListItemText primary="Usage" />
              </ListItem>
            </List>
          </Box>
          <Box className="contentWrapper">
            <Box className="content">
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/usage" element={<Usage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
