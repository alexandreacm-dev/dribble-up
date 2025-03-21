import "styled-components/native";
import defaultTheme from "@/app/styles/light";

type ThemeType = typeof defaultTheme;

declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeType { }
}