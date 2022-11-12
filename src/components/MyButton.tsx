import { Button, IButtonProps, Text } from "native-base"

interface MyButtonProps extends IButtonProps {
  title: string
}

export default function MyButton({ title, ...rest }: MyButtonProps) {
  return (
    <Button
      bg="primary"
      _pressed={{
        _pressed: {
          background: "pressed",
        },
      }}
      {...rest}
    >
      <Text color="text" fontSize="20px" fontFamily="medium">
        {title}
      </Text>
    </Button>
  )
}
