import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import light from "../styles/light";
import dark from "../styles/dark";

type Props = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: Props) {
  return <DefaultThemeProvider theme={light}>{children}</DefaultThemeProvider>;
}
