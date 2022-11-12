import { Box, Input, Text, IInputProps } from "native-base"

interface MyInputProps extends IInputProps {
  label: string
  mb?: string
  error?: any
}

export default function MyInput({
  label,
  mb,
  error = null,
  isInvalid,
  ...rest
}: MyInputProps) {
  const invalid = !!error || isInvalid

  return (
    <Box mb={mb}>
      <Text color="text" fontSize="18px" fontFamily="light">
        {label}
      </Text>
      <Input
        color="text"
        fontFamily="medium"
        fontSize="16px"
        isInvalid={invalid}
        placeholderTextColor="placeholderInput"
        bg="bgInput"
        _focus={{
          bg: "bgInputFocus",
          borderWidth: 2,
          borderColor: "primary",
          color: "textDark",
        }}
        _invalid={{ borderColor: "error", borderWidth: 2 }}
        {...rest}
      />
      <Text color="error">{error}</Text>
    </Box>
  )
}
