import { Box } from "@chakra-ui/react" //, useBoolean
import dynamic from "next/dynamic"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react" //, { useEffect }
import CodeContainer from "./code-container"
import CopyButton from "./copy-button"
import Highlight from "./highlight"
// import { liveEditorStyle, liveErrorStyle } from "./styles"

const ReactLiveBlock = dynamic(() => import("./react-live-block"))

function CodeBlock(props) {
  // const [isMounted, { on }] = useBoolean()
  // useEffect(
  //   /**
  //    * Lazily-load <ReactLiveBlock /> to save bundle size.
  //    */
  //   on,
  //   [],
  // )
  const {
    className,
    live = true,
    manual,
    render,
    children,
    viewlines,
    ln,
    mountStylesheet = false,
    ...rest
  } = props

  const language = className?.replace(/language-/, "")
  const rawCode = children.trim()
  const reactLiveBlockProps = {
    rawCode,
    language,
    theme,
    noInline: manual,
    mountStylesheet,
    ...rest,
  }

  if (true && language === "jsx" && live === true) {
    return <ReactLiveBlock editable {...reactLiveBlockProps} />
  }

  if (true && render) {
    /**
     * @TODO Not sure if this is even used?
     */
    return (
      <div style={{ marginTop: 32 }}>
        <ReactLiveBlock editable={false} {...reactLiveBlockProps} />
      </div>
    )
  }

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={rawCode}
          language={language}
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top="4" code={rawCode} />
    </Box>
  )
}

export default CodeBlock
