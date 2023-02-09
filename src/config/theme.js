import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const font1 = "'Nunito', sans-serif";
const font2 = "'Nunito', sans-serif";
// Create a theme instance.
let theme = createTheme({
  palette: {
    common: {
        black: "#4b4b4b",
        white: "#ffffff",
    },
    primary: {
      dark: "#43c000",
      main: "#58cc02",
      light: "#89e219",
      contrastText: "#ffffff"
    },
    secondary: {
      dark: "#f49000",
      main: "#ffc200",
      light: "#ffde00",
      contrastText: "#4b4b4b",
      color1: "#1cb0f6",
      color2: "#ff4b4b",
      color3: "#ce82ff",
      color4: "#2b70c9",
    },
    error: {
      main: "#ff4b4b",
    },
    warning: {
      main: "#ff4b4b",
    },
    info: {
      main: "#ce82ff",
    },
    success: {
      main: "#1cb0f6",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
    text: {
      primary: "#4b4b4b",
    },
  },


});

theme = createTheme(theme, {
    palette: {
        color1: {
            dark: "#1cb0f6",
            main: "#1cb0f6",
            light: "#1cb0f6",
            fade: "#1cb0f6",
        },
        color2: {
            dark: "#ff4b4b",
            main: "#ff4b4b",
            light: "#ff4b4b",
            fade: "#ff4b4b",
        },
        color3: {
            dark: "#ce82ff",
            main: "#ce82ff",
            light: "#ce82ff",
            fade: "#ce82ff",
        },
        color4: {
            dark: "#2b70c9",
            main: "#2b70c9",
            light: "#2b70c9",
            fade: "#2b70c9",
        },
        grey: {
            gray1: "#4b4b4b",
            gray2: "#777777",
            gray3: "#afafaf",
            gray4: "#e5e5e5",
            gray5: "#f7f7f7",
            gray5: "#ffffff",
        }
    },
    typography: {
        fontFamily: font2,
        
        h1: {
          fontFamily: font1,
          margin: "1rem 0",
          textAlign: "center",
          [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            fontWeight: 700,
          },
          
        },
        h2: {
          fontFamily: font1,
          margin: "1rem 0",
          textAlign: "center",
          [theme.breakpoints.down('md')]: {
            fontSize: '1.75rem',
            fontWeight: 700,
          },
        },
        h3: {
          fontFamily: font1,
          [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
            fontWeight: 700,
          },
          margin: "0.5rem 0",
        },
        h4: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        h5: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        h6: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        button: {
          fontFamily: font1,
          fontSize: "1.25rem",
        },
      },
    
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            html: {
                box-sizing: border-box;
            }

            *, *::after, *::before {
                box-sizing: inherit;
            }

          a: {
          text-decoration: "none"
          }
        `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper,
          // color: theme.palette.primary.main,
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: 700,
            my: 1,
        },
        text: {
          color: "#1cb0f6"
        },
        contained: {
            background: "#1cb0f6",
            [theme.breakpoints.down('sm')]: {
                fontSize: "1rem",
            }
        },
        outlined: {
            border: `2px solid #e5e5e5`,
            borderBottom: `3px solid #e5e5e5`,
            color: theme.palette.secondary.contrastText,
            textTransform: "lowercase",

            "&:hover": {
                border: `2px solid ${theme.palette.secondary.main}`,
                borderBottom: `3px solid ${theme.palette.secondary.main}`,
                color: theme.palette.secondary.main,
                background: "",
            }
        }

      },
    },
    MuiLink: {
      styleOverrrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
