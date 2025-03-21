import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import light from "../styles/light";

type Props = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: Props) {
  return <DefaultThemeProvider theme={light}>{children}</DefaultThemeProvider>;
}
