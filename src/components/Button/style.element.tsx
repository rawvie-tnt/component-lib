import { styled, Theme } from "@mui/material/styles";
import { ButtonProps, default as MUIButton } from "@mui/material/Button";
import { StyledComponent } from "@emotion/styled";
import { MUIStyledCommonProps } from "@mui/system";
import { colors } from "../../styles/themes/colors";

type ButtonType = StyledComponent<ButtonProps & MUIStyledCommonProps<Theme>>;

export const StyledButton: ButtonType = styled(MUIButton)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: 10,
  padding: "1.25rem",
  maxHeight: "2.5rem",
  "&.MuiButton-outlined": {
    borderColor: theme.palette.secondary.main,
  },
  "&.Mui-disabled": {
    color: "white",
    backgroundColor: "rgba(107, 56, 251, 0.8)",
  },
  "&.MuiButton-text": {
    color:
      theme.palette.mode === "light"
        ? colors.BLUE_MAGENTA_DARK
        : colors.BLUE_MAGENTA_LIGHT,
  },
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? colors.BLUE_MAGENTA_LIGHT
        : colors.SECONDARY_HAN_PURPLE,
    color: "white",
    boxShadow: `0px 0px 2px ${
      theme.palette.mode === "light" ? "#DADADA" : colors.SECONDARY_HAN_PURPLE
    }`,
  },
  "&.MuiButton-contained": {
    backgroundColor: colors.PRIMARY_HAN_PURPLE,
    color: "white",
    boxShadow: `0px 0px 2px ${
      theme.palette.mode === "light" ? "#DADADA" : colors.SECONDARY_HAN_PURPLE
    }`,
    "&:hover": {
      backgroundColor: colors.SECONDARY_HAN_PURPLE,
    },
  },
}));
