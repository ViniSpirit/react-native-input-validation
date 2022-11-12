import { Box } from "native-base"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box flex={1} bg="bg" px="20px">
      {children}
    </Box>
  )
}
