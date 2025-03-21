import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import "react-native-reanimated";
import useGoogleFonts from "./hooks/useGoogleFonts";
import ThemeProvider from "./components/ThemeProvider";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useGoogleFonts();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   <Stack.Screen
    //     name="search"
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    //   <Stack.Screen name="+not-found" />
    // </Stack>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StatusBar style="auto" />
        <Slot />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
