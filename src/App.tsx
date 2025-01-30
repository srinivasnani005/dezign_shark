import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./Routes/routes";
import { theme } from "./Theme/theme";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewCursor from "./Components/Cursor/NewCursor";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <NewCursor /> {/* Cursor added globally */}
        <ToastContainer position="top-right" autoClose={5000} />
      </ThemeProvider>
    </Box>
  );
}

export default App;
