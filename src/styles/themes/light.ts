import { colors } from "./colors";

export const lightTheme = {
  primary: {
    main: colors.PRIMARY_HAN_PURPLE,
    // light: colors.PALETTE_0NE_DARK,
    // dark: colors.PALETTE_TWO_LIGHT
  },
  secondary: {
    main: colors.SECONDARY_HAN_PURPLE,
    light: "#ffffff",
    dark: colors.HAN_PURPLE_OPACITY_100_PER_LIGHT,
  },
  tertiary: {
    main: colors.TERTIARY_HAN_PURPLE,
  },
  background: {
    default: colors.AMARANTH,
    // paper: "#ffffff",
    // mainContent: "#fff",
    // imageBackground: "#f2f2ff",
  },
  text: {
    primary: colors.PALETTE_TWO_LIGHT,
    secondary: "#000",
    tertiary: "#fff",
  },
  info: {
    main: colors.SALMON_PINK,
  },
  warning: {
    main: colors.BRIGHT_ORANGE,
  },
  error: {
    main: colors.AMARANTH,
  },
  success: {
    main: colors.AMAZONITE,
  },
  additional: {
    primary: colors.ADDITIONAL_PERSIAN_INDIGO,
    secondary: colors.ADDITIONAL_MINSK,
  },
  shades: {
    primary: {
      main: colors.HAN_PURPLE_OPACITY_100_PER_LIGHT,
      twentyOpacity: colors.HAN_PURPLE_OPACITY_20_PER_LIGHT,
      fiveOpacity: colors.HAN_PURPLE_OPACITY_05_PER_LIGHT,
    },
    secondary: {
      main: colors.WATERLOO_OPACITY_100_PER_LIGHT,
      twentyOpacity: colors.WATERLOO_OPACITY_20_PER_LIGHT,
      fiveOpacity: colors.WATERLOO_OPACITY_05_PER_LIGHT,
    },
  },
  // purple: {
  //   main: colors.ADDITIONAL_DEEP_LILAC,
  //   light: colors.HAN_PURPLE_OPACITY_100_PER_LIGHT,
  //   dark: colors.ADDITIONAL_MINSK,
  //   darker: colors.ADDITIONAL_PERSIAN_INDIGO
  // },
  // blue: {
  //   light: colors.PALETTE_FOUR_LIGHT,
  //   dark: colors.WATERLOO_OPACITY_100_PER_LIGHT,
  //   lightDarker: "#B6B9C1",
  //   bright: "#ECEEF2",
  // },
  // grey: {
  //   light: "#DEDEDE",
  //   dark: "#3A3A3C",
  //   darker: "#8E8E93"
  // },
  // button: {
  //   main: colors.ADDITIONAL_PERSIAN_INDIGO,
  //   dark: colors.ADDITIONAL_MINSK,
  //   light: colors.HAN_PURPLE_OPACITY_100_PER_LIGHT
  // },
  // buttonText: {
  //   main: "#FFFFFF",
  // },
  buttonOutline: {
    main: colors.PALETTE_FOUR_LIGHT,
  },
  neutral: {
    main: "white",
    contrastText: "#fff",
  },
};
