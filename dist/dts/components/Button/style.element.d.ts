import { Theme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import { StyledComponent } from "@emotion/styled";
import { MUIStyledCommonProps } from "@mui/system";
type ButtonType = StyledComponent<ButtonProps & MUIStyledCommonProps<Theme>>;
export declare const StyledButton: ButtonType;
export {};
