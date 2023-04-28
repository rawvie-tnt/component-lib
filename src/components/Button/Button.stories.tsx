import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Add, ArrowForward } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const StandardButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "contained",
  },
};

export const OutlinedButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "outlined",
  },
};

export const TextButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "text",
  },
};

export const DisabledButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "contained",
    disabled: true,
  },
};

export const StartIconButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "contained",
    startIcon: <Add />,
  },
};

export const EndIconButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "contained",
    endIcon: <ArrowForward />,
  },
};

export const TooltipButton: ButtonStory = {
  args: {
    children: "Basanta",
    variant: "contained",
    tooltip: "Click me!",
    tooltipPlacement: "top",
  },
};
