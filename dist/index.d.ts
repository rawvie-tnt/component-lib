/// <reference types="react" />
import { ButtonProps } from '@mui/material/Button';

type Props = {
    iconOnly?: boolean;
    component?: React.ElementType | undefined;
    tooltip?: string;
    tooltipPlacement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
} & ButtonProps;
declare const Button: React.FC<Props>;

export { Button };
