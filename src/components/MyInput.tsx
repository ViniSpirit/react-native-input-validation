import { Box, Input, Text, IInputProps } from "native-base"

interface MyInputProps extends IInputProps {
  label: string
  mb?: string
  error?: string
}

export default function MyInput({ label, mb, error, ...rest }: MyInputProps) {
  return (
    <Box mb={mb}>
      <Text color="text" fontSize="18px" fontFamily="light">
        {label}
      </Text>
      <Input
        color="textDark"
        fontFamily="medium"
        fontSize="16px"
        placeholderTextColor="placeholderInput"
        bg="bgInput"
        _focus={{ bg: "bgInputFocus" }}
        {...rest}
      />
      <Text color="error">{error}</Text>
    </Box>
  )
}
