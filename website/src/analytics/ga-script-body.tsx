import React from "react"

const GAScript = () => (
  <>
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-226179263-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-226179263-1');
        </script>
        
          `,
      }}
    />
  </>
)

export default GAScript
