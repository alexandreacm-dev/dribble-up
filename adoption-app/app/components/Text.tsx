import { Text as RNText, type TextProps, StyleSheet } from "react-native";
import theme from "@/app/styles/light";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "primaryTitle"
    | "date"
    | "error";
};

export function Text({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <RNText
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "primaryTitle" ? styles.primaryTitle : undefined,
        type === "date" ? styles.date : undefined,
        type === "error" ? styles.error : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontFamily: theme.fonts.Inter_700_Bold,
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: theme.fonts.Inter_200,
    fontSize: 16,
    color: "#353434",
    marginTop: 10,
  },
  link: {
    lineHeight: 20,
    fontSize: 16,
    color: theme.colors.buttonColor,
    fontWeight: "600",
    fontFamily: theme.fonts.Inter_600_SemiBold,
  },
  primaryTitle: {
    fontFamily: theme.fonts.Inter_700_Bold,
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontFamily: theme.fonts.Inter_400_Regular,
    fontSize: 14,
    color: "#353434",
    marginTop: 10,
  },
  error: {
    fontFamily: theme.fonts.Inter_400_Regular,
    fontSize: 14,
    color: "#FF0000",
    marginTop: 10,
    textAlign: "center",
  },
});
