import { Toolbar, Typography, Button, AppBar } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";

export default function Header({ showCompletedTasks, setShowCompletedTasks }) {
  const completedToggle = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };
  return (
    <Box sx={{ backgroundColor: "primary" }}>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">Lista de Tareas</Typography>
          {showCompletedTasks ? (
            <Button
              onClick={completedToggle}
              sx={{ color: "white" }}
              size="large"
              startIcon={<VisibilityIcon />}
            >
              Showing Completed Tasks
            </Button>
          ) : (
            <Button
              onClick={completedToggle}
              sx={{ color: "white" }}
              size="large"
              startIcon={<VisibilityOffIcon />}
            >
              Hiding Completed Tasks
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
