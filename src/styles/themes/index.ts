import { PaletteMode, ThemeOptions } from "@mui/material";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ...lightTheme,
        }
      : {
          // palette values for dark mode
          ...darkTheme,
        }),
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1008,
      xl: 1440,
    },
  },
  // unit: "px",
  shape: {
    borderRadius: 4,
    // topBorderRadius: "8px 8px 0 0",
  },
  /*
  shadow: {
    1: "0 0 20px 0 rgba(128,133,155,0.2)",
  },*/
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Karla', sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 32,
      lineHeight: "37px",
      letterSpacing: 0,
    },
    h2: {
      fontSize: 26,
      lineHeight: "31px",
      letterSpacing: 0,
    },
    h3: {
      fontSize: 24,
      lineHeight: "38px",
      letterSpacing: 0,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "23px",
      letterSpacing: "",
    },
    body2: {
      fontSize: 14,
      // fontWeight: 700,
      lineHeight: "17px",
      letterSpacing: "",
    },
    body1: {
      fontSize: 12,
      // fontWeight: 700,
      lineHeight: "14px",
      letterSpacing: "",
    },
    /*
    body0: {
      fontSize: 10,
      fontWeight: 700,
      lineHeight: "12px",
      letterSpacing: "",
    },
    */
    // fontWeightLight: 300
    // fontWeightRegular: 400
    // fontWeightMedium: 500
    // fontWeightBold: 700
  },
  spacing: [0, 4, 8, 16, 32, 64, 128],
  /*
  styles: {
    button: {
      outlined: {
        outline: "1px solid red",
      },
      textTransform: "none",
    },
    card: {
      padding: 20,
      borderRadius: "8px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
  */
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
  },
  zIndex: {},
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
