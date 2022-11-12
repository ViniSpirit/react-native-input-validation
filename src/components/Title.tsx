import { Text, ITextProps } from "native-base"

interface TitleProps extends ITextProps {
  title: string
}

export default function Title({ title, ...rest }: TitleProps) {
  return (
    <Text color="text" fontSize="24px" fontFamily="medium" {...rest}>
      {title}
    </Text>
  )
}
