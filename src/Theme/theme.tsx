import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", 
      light: "rgba(252, 0, 0, 0.1)",
      dark: "rgba(252, 0, 0, 0.8)",
    },
    secondary: {
      main: "#fc0000", 
      light: "rgba(23, 162, 184, 0.1)",
      dark: "rgba(23, 162, 184, 1)",
    },
    warning: {
      main: "#FF4F3D",
      light: "rgba(255, 79, 61, 0.1)",
      dark: "rgba(255, 79, 61, 1)",
    },
    info: {
      main: "#F2F2F2",
      light: "rgba(242, 242, 242, 0.1)",
      dark: "rgba(242, 242, 242, 1)",
    },
    background: {
      default: "#000000",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: 'Gilroy, Poppins, sans-serif', 
    button: {
      textTransform: "none",
      fontSize: "14px",
    },
    h1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "30px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "35px",
      },
      "@media (min-width:900px)": {
        fontSize: "40px",
      },
      "@media (min-width:1200px)": {
        fontSize: "45px",
      },
      "@media (min-width:1536px)": {
        fontSize: "50px",
      },
    },
    h2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "26px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "30px",
      },
      "@media (min-width:900px)": {
        fontSize: "35px",
      },
      "@media (min-width:1200px)": {
        fontSize: "40px",
      },
      "@media (min-width:1536px)": {
        fontSize: "45px",
      },
    },
    h3: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "22px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "25px",
      },
      "@media (min-width:900px)": {
        fontSize: "30px",
      },
      "@media (min-width:1200px)": {
        fontSize: "35px",
      },
      "@media (min-width:1536px)": {
        fontSize: "40px",
      },
    },
    h4: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "20px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "22px",
      },
      "@media (min-width:900px)": {
        fontSize: "25px",
      },
      "@media (min-width:1200px)": {
        fontSize: "30px",
      },
      "@media (min-width:1536px)": {
        fontSize: "35px",
      },
    },
    h5: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "18px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:900px)": {
        fontSize: "22px",
      },
      "@media (min-width:1200px)": {
        fontSize: "25px",
      },
      "@media (min-width:1536px)": {
        fontSize: "28px",
      },
    },
    h6: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "16px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "18px",
      },
      "@media (min-width:900px)": {
        fontSize: "20px",
      },
      "@media (min-width:1200px)": {
        fontSize: "22px",
      },
      "@media (min-width:1536px)": {
        fontSize: "24px",
      },
    },
    subtitle1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "18px",
      color: "#ffffff",
      opacity: "85%",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:900px)": {
        fontSize: "22px",
      },
      "@media (min-width:1200px)": {
        fontSize: "24px",
      },
      "@media (min-width:1536px)": {
        fontSize: "26px",
      },
    },
    subtitle2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "16px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "18px",
      },
      "@media (min-width:900px)": {
        fontSize: "20px",
      },
      "@media (min-width:1200px)": {
        fontSize: "22px",
      },
      "@media (min-width:1536px)": {
        fontSize: "24px",
      },
    },
    body1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "14px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "16px",
      },
      "@media (min-width:900px)": {
        fontSize: "18px",
      },
      "@media (min-width:1200px)": {
        fontSize: "20px",
      },
      "@media (min-width:1536px)": {
        fontSize: "22px",
      },
    },
    body2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "12px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "12px",
      },
      "@media (min-width:900px)": {
        fontSize: "16px",
      },
      "@media (min-width:1200px)": {
        fontSize: "17px",
      },
      "@media (min-width:1536px)": {
        fontSize: "18px",
      },
    },
    caption: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "10px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "12px",
      },
      "@media (min-width:900px)": {
        fontSize: "14px",
      },
      "@media (min-width:1200px)": {
        fontSize: "16px",
      },
      "@media (min-width:1536px)": {
        fontSize: "18px",
      },
    },
    overline: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "8px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "10px",
      },
      "@media (min-width:900px)": {
        fontSize: "12px",
      },
      "@media (min-width:1200px)": {
        fontSize: "14px",
      },
      "@media (min-width:1536px)": {
        fontSize: "16px",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#fc0000", 
            border: "1.5px solid #fc0000",
          },
          textTransform: "none", 
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "14px", 
          borderRadius: "4px", 
          height: "40px", 
          padding: "10px 20px", 
          width: "auto", 
          color: "#ffffff", 
          backgroundColor: "#fc0000",
          border: "none",
          transition: "all 0.3s ease", 
        },
        outlined: {
          "&:hover": {
            color: '#ffffff', 
            border: "1.5px solid #fc0000", 
            backgroundColor: '#fc0000', 
            '& img': {
              filter: 'brightness(0) invert(1)',
            },
            '& .MuiTypography-root': {
              color: '#ffffff', 
            },
          },
          textTransform: "none", 
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "14px", 
          borderRadius: "4px", 
          height: "40px", 
          padding: "10px 20px", 
          width: "auto", 
          border: "1.5px solid #fc0000", 
          backgroundColor: 'transparent',
          color: '#fc0000', 
          transition: "all 0.3s ease", 
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          '& fieldset': {
            borderRadius: '10px',
          },
          '& input::placeholder': {
            fontSize: '14px', // Adjusted placeholder size
            fontFamily: 'Gilroy, Poppins, sans-serif',
          },
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          opacity: "70%",
          fontSize: "16px", // Adjusted font size
        },
        shrink: ({ ownerState }) => ({
          ...(ownerState.shrink && {
            fontSize: "14px !important", // Adjusted font size when shrunk
          }),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "16px", // Adjusted font size
          lineHeight: "24px", // Adjusted line height
          color: "#111111",
        },
        notchedOutline: {
          borderColor: "#ccc",
        },
        root: {
          background: "white",
          "&.Mui-focused": {
            background: "#F8F8F9",
            boxShadow: "0px 6px 12px #3C599829",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          fontSize: "14px", // Adjusted font size
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 2px 10px #0000001A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px", // Adjusted border radius
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          fontSize: "16px", // Adjusted font size
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "16px", // Adjusted font size
          color: "#2B2D22",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
        },
        option: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "16px", // Adjusted font size
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", 
          fontFamily: 'Gilroy, Poppins, sans-serif',
        },
      },
    },
  },
});
