import { Tooltip } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { StyledButton } from "./style.element";

type Props = {
  iconOnly?: boolean;
  component?: React.ElementType | undefined;
  tooltip?: string;
  tooltipPlacement?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
} & ButtonProps;

const Button: React.FC<Props> = (props) => {
  const {
    iconOnly,
    startIcon,
    endIcon,
    tooltip,
    tooltipPlacement,
    children,
  } = props;
  if (tooltip) {
    return (
      <Tooltip
        title={tooltip}
        enterDelay={700}
        leaveDelay={50}
        arrow
        placement={tooltipPlacement}
      >
        <StyledButton
          {...props}
          startIcon={!iconOnly ? startIcon : ""}
          endIcon={!iconOnly ? endIcon : ""}
        >
          {children}
        </StyledButton>
      </Tooltip>
    );
  } else {
    return (
      <StyledButton
        {...props}
        startIcon={!iconOnly ? startIcon : ""}
        endIcon={!iconOnly ? endIcon : ""}
      >
        {children}
      </StyledButton>
    );
  }
};

export default Button;
