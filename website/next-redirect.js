async function redirect() {
  return [
    // GENERAL
    {
      source: "/docs",
      destination: "/docs/introduction",
      permanent: true,
    },
    {
      source: "/changelog",
      destination: "/docs/changelog",
      permanent: true,
    },
    {
      source: "/installation",
      destination: "/docs/installation",
      permanent: true,
    },
    {
      source: "/introduction",
      destination: "/docs/introduction",
      permanent: true,
    },
    {
      source: "/routing",
      destination: "/docs/routing",
      permanent: true,
    },
    {
      source: "/principles",
      destination: "/docs/principles",
      permanent: true,
    },
    {
      source: "/theme",
      destination: "/docs/theming/theme",
      permanent: true,
    },
    // COMPONENTS
    {
      source: "/avatar",
      destination: "/docs/media-and-icons/avatar",
      permanent: true,
    },
    {
      source: "/badge",
      destination: "/docs/data-display/badge",
      permanent: true,
    },
    {
      source: "/box",
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/fixed-plugin",
      destination: "/docs/layout/fixed-plugin",
      permanent: true,
    },
    {
      source: "/breadcrumb",
      destination: "/docs/navigation/breadcrumb",
      permanent: true,
    },
    {
      source: "/sidebar",
      destination: "/docs/navigation/sidebar",
      permanent: true,
    },
    {
      source: "/button",
      destination: "/docs/form/button",
      permanent: true,
    },
    {
      source: "/pin-input",
      destination: "/docs/form/pin-input",
      permanent: true,
    },
    {
      source: "/range-slider",
      destination: "/docs/form/range-slider",
      permanent: true,
    },
    {
      source: "/cards",
      destination: "/docs/layout/cards",
      permanent: true,
    },
    {
      source: "/charts",
      destination: "/docs/data-display/cards",
      permanent: true,
    },
    {
      source: "/closebutton",
      destination: "/docs/components/close-button",
      permanent: true,
    },
    {
      source: "/portal",
      destination: "/docs/components/portal",
      permanent: true,
    },
    {
      source: "/fields",
      destination: "/docs/components/fields",
      permanent: true,
    },
    {
      source: "/circular-slider",
      destination: "/docs/components/circular-slider",
      permanent: true,
    },
    {
      source: "/dropzone",
      destination: "/docs/components/dropzone",
      permanent: true,
    },
    {
      source: "/map",
      destination: "/docs/components/map",
      permanent: true,
    },
    {
      source: "/range-slider",
      destination: "/docs/components/range-slider",
      permanent: true,
    },
    {
      source: "/actions",
      destination: "/docs/components/actions",
      permanent: true,
    },
    {
      source: "/data-display",
      destination: "/docs/components/data-display",
      permanent: true,
    },
    {
      source: "/controlbox",
      // MISSING
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/drawer",
      destination: "/docs/overlay/drawer",
      permanent: true,
    },
    {
      source: "/flex",
      destination: "/docs/layout/flex",
      permanent: true,
    },
    {
      source: "/formcontrol",
      destination: "/docs/form/form-control",
      permanent: true,
    },
    {
      source: "/grid",
      destination: "/docs/layout/grid",
      permanent: true,
    },
    {
      source: "/heading",
      destination: "/docs/typography/heading",
      permanent: true,
    },
    {
      source: "/icon",
      destination: "/docs/media-and-icons/icon",
      permanent: true,
    },
    {
      source: "/separator",
      destination: "/docs/layout/separator",
      permanent: true,
    },
    {
      source: "/iconbutton",
      destination: "/docs/form/icon-button",
      permanent: true,
    },
    {
      source: "/image",
      destination: "/docs/media-and-icons/image",
      permanent: true,
    },
    {
      source: "/input",
      destination: "/docs/form/input",
      permanent: true,
    },
    {
      source: "/link",
      destination: "/docs/navigation/link",
      permanent: true,
    },
    {
      source: "/list",
      destination: "/docs/data-display/list",
      permanent: true,
    },
    {
      source: "/menu",
      destination: "/docs/overlay/menu",
      permanent: true,
    },
    {
      source: "/modal",
      destination: "/docs/overlay/modal",
      permanent: true,
    },
    {
      source: "/navbar",
      destination: "/docs/navigation/navbar",
      permanent: true,
    },
    {
      source: "/progress",
      destination: "/docs/feedback/progress",
      permanent: true,
    },
    {
      source: "/alerts",
      destination: "/docs/feedback/alerts",
      permanent: true,
    },
    {
      source: "/pseudobox",
      // deprecated, moved to box
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/simplegrid",
      destination: "/docs/layout/simple-grid",
      permanent: true,
    },
    {
      source: "/stat",
      destination: "/docs/data-display/stat",
      permanent: true,
    },
    {
      source: "/stack",
      destination: "/docs/layout/stack",
      permanent: true,
    },
    {
      source: "/switch",
      destination: "/docs/form/switch",
      permanent: true,
    },
    {
      source: "/timeline",
      destination: "/docs/data-display/timeline",
      permanent: true,
    },
    {
      source: "/tabs",
      destination: "/docs/disclosure/tabs",
      permanent: true,
    },
    {
      source: "/text",
      destination: "/docs/typography/text",
      permanent: true,
    },
    {
      source: "/react-globe",
      destination: "/docs/components/react-globe",
      permanent: true,
    },
    {
      source: "/data-tables",
      destination: "/docs/components/data-tables",
      permanent: true,
    },
    {
      source: "/calendar",
      destination: "/docs/components/calendar",
      permanent: true,
    },
    {
      source: "/kanban",
      destination: "/docs/components/kanban",
      permanent: true,
    },
    {
      source: "/wizard",
      destination: "/docs/components/wizard",
      permanent: true,
    },
    {
      source: "/quill",
      destination: "/docs/components/quill",
      permanent: true,
    },
  ]
}

module.exports = redirect
