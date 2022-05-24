import React from "react"
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"
import siteConfig from "configs/site-config"

const DownloadButton = (props: BoxProps) => (
  <Box
    display={{ base: "none", lg: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Live Preview"
    href={siteConfig.livePreview.url}
    target="_blank"
    borderWidth="1px"
    borderColor="gray.400"
    px="24px"
    minH="48px"
    borderRadius="12px"
    fontSize="sm"
    color={useColorModeValue("gray.700", "white")}
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: useColorModeValue("gray.100", "whiteAlpha.300"),
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
    {...props}
  >
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Live Preview
    </Box>
  </Box>
)

export default DownloadButton
