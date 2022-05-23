import { Button, ButtonProps, useClipboard, useColorModeValue} from "@chakra-ui/react"
import React from "react"

interface CopyButtonProps extends ButtonProps {
  code: string
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Button
      size="sm"
      position="absolute"
      textTransform="uppercase"
      color="white"
      bg={useColorModeValue("brand.500", "brand.400")}
      fontSize="xs"
      height="24px"
      top={0}
      zIndex="1"
      right="1.25em"
      {...props}
      onClick={onCopy}
      _hover={{
        bg: useColorModeValue("brand.600", "brand.300"),
      }}
      _active={{
        bg: useColorModeValue("brand.700", "brand.300"),
      }}
      _focus={{
        bg: useColorModeValue("brand.700", "brand.300"),
      }}
    >
      {hasCopied ? "copied" : "copy"}
    </Button>
  )
}

export default CopyButton
