import { PaletteMode, ThemeOptions } from "@mui/material";
export declare const getDesignTokens: (mode: PaletteMode) => ThemeOptions;
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
