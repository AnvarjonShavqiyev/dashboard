import { useState, useEffect } from "react";
import { Container, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import { getCoins } from "../utils/storage";

const Logs = () => {
  const [logs, setLogs] = useState(getCoins());

  useEffect(() => {
    setLogs(getCoins().reverse());
  }, []);

  return (
    <Container sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" gutterBottom>Logs</Typography>
      <Box sx={{ flexGrow: 1, overflowY: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "8px" }}>
        <List>
          {logs.map((log, index) => (
            <ListItem key={index} sx={{display: "flex", flexDirection:"column", alignItems:"flex-start"}}>
              <ListItemText primary={`💰 ${log.amount} xo'rozqand`} secondary={log.description} />
              <ListItemText primary={`${log.date}`}/>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Logs;
