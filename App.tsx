import { NativeBaseProvider, extendTheme, StatusBar, Box } from "native-base"
import Register from "./src/screens/Register"
import { useFonts } from "expo-font"
import { useCallback } from "react"
// @ts-ignore
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const theme = extendTheme({
    colors: {
      bg: "#1c1917",
      text: "#ecfdf5",
      textDark: "#333",
      primary: "#34d399",
      pressed: "#289c72",
      error: "#fa6565",

      bgInput: "#333",
      bgInputFocus: "#ebe9e9",
      placeholderInput: "#918d8d",
    },
    fonts: {
      medium: "Poppins-Medium",
      bold: "Poppins-Black",
      light: "Poppins-Light",
    },
  })

  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/Poppins-Light.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor="#1c1917" />
        <Register />
      </Box>
    </NativeBaseProvider>
  )
}
