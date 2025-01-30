import React from "react";
import { Box } from "@mui/material";
import useCustomCursor from "./UseCustomCursor";


const Cursor = () => {
  const { cursorRef, cursorSmallRef, cursorLargeRef } = useCustomCursor();

  return (
    <Box
      ref={cursorRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 98,
      }}
    >
      <Box
        ref={cursorSmallRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "10px",
          backgroundColor: "#fff",
          borderRadius: "50%",
        }}
      />
      <Box
        ref={cursorLargeRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
          border: "2px solid red",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default Cursor;
