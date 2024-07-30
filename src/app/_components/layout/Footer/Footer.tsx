const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  //KB footer
  return (
    <>
      <footer
        className="w-full bg-dark-gray-600 font-normal antialiased text-white mt-auto"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          backgroundColor: "rgba(33,33,33,1)",
          fontWeight: 400,
          marginTop: "auto",
          color: "rgba(255,255,255,1)",
          WebkitFontSmoothing: "antialiased",
          width: "100%",
        }}
      >
        <div
          className="container max-w-screen-xl mx-auto pt-10 pb-20 px-4 sm:px-8"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1280px",
            paddingTop: "2.5rem",
            paddingBottom: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div
            className="lg:flex lg:flex-wrap lg:justify-between"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              className="mb-3 mr-8 mt-1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginTop: "0.25rem",
                marginBottom: "0.75rem",
                marginRight: "2rem",
              }}
            >
              <svg
                width="280"
                fill="none"
                viewBox="0 0 368 26"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "block",
                  verticalAlign: "middle",
                }}
              >
                <path
                  d="M31.21 20.31c-1.573-1.647-2.357-4.133-2.35-7.46.007-3.327.79-5.813 2.35-7.46 1.567-1.647 3.9-2.473 7-2.48a9.12 9.12 0 016 1.86 6.61 6.61 0 012.26 5.42h-2.72a4.69 4.69 0 00-1.47-3.74 6 6 0 00-4.07-1.27 6.38 6.38 0 00-5 1.79c-1.06 1.2-1.6 3.143-1.62 5.83 0 2.71.53 4.66 1.6 5.87s2.73 1.8 5 1.8a6.28 6.28 0 004.16-1.26 4.57 4.57 0 001.49-3.69h2.61A6.55 6.55 0 0144.23 21a9.3 9.3 0 01-6 1.82c-3.12-.03-5.45-.82-7.02-2.51zm20.93-.02c-1.67-1.68-2.51-4.15-2.51-7.44s.84-5.76 2.51-7.43a9.55 9.55 0 017.07-2.51 9.63 9.63 0 017.1 2.51c1.667 1.673 2.5 4.15 2.5 7.43 0 3.28-.833 5.753-2.5 7.42a9.59 9.59 0 01-7.1 2.52c-3.05 0-5.4-.79-7.07-2.5zm12.16-1.57c1.18-1.21 1.77-3.12 1.77-5.76v-.11c0-2.67-.62-4.61-1.79-5.84a6.73 6.73 0 00-5.07-1.83 6.66 6.66 0 00-5 1.83c-1.18 1.23-1.78 3.17-1.8 5.84V13c0 2.64.59 4.55 1.77 5.76a6.779 6.779 0 005.07 1.8 6.8 6.8 0 005.05-1.84zm8.57-15.47h2.66v16.88h9.86v2.33H72.87V3.25zm17.74 17.04c-1.67-1.68-2.51-4.15-2.51-7.44s.84-5.76 2.51-7.43a9.57 9.57 0 017.07-2.51c3.06 0 5.427.837 7.1 2.51 1.673 1.673 2.507 4.15 2.5 7.43 0 3.273-.833 5.747-2.5 7.42s-4.033 2.513-7.1 2.52c-3.04 0-5.397-.833-7.07-2.5zm12.17-1.57c1.17-1.21 1.76-3.12 1.76-5.76v-.11c0-2.67-.62-4.61-1.79-5.84A7.9 7.9 0 0092.64 7c-1.18 1.23-1.77 3.17-1.79 5.84V13c0 2.64.59 4.55 1.76 5.76a8.08 8.08 0 0010.17 0v-.04zm8.56-15.47h10a6.1 6.1 0 014.42 1.48 5.26 5.26 0 011.54 4 6.111 6.111 0 01-.93 3.39 5.202 5.202 0 01-2.59 2l4.42 8.32h-3l-4.17-7.93H114v7.93h-2.66V3.25zm9.86 9a3.331 3.331 0 002.49-.93 3.413 3.413 0 00.93-2.54 3.07 3.07 0 00-.87-2.34 3.57 3.57 0 00-2.55-.83H114v6.64h7.2zm10.92-9h13.61v2.32h-10.95v6.11h9.94V14h-9.94v8.46h-2.66V3.25zM151.83 21c-1.333-1.207-2-3.073-2-5.6V3.25h2.66v12.26a4.867 4.867 0 001.36 3.74 5.39 5.39 0 003.85 1.27 5.51 5.51 0 003.89-1.28 4.885 4.885 0 001.37-3.73V3.25h2.66v12.12c0 2.52-.667 4.387-2 5.6a8.61 8.61 0 01-5.88 1.82 8.5 8.5 0 01-5.91-1.79zm18.73-17.75h2.66v16.88h9.86v2.33h-12.52V3.25zm18.6 17.11c-1.593-1.633-2.387-4.137-2.38-7.51.007-3.373.807-5.86 2.4-7.46a9.19 9.19 0 016.89-2.48 10.92 10.92 0 014.37.83 6.76 6.76 0 013 2.49 7.239 7.239 0 011.11 4.1h-3.67a4.132 4.132 0 00-1.3-3.25 5.07 5.07 0 00-3.46-1.14 5.33 5.33 0 00-4.29 1.65 7.572 7.572 0 00-1.39 5v.56a7.629 7.629 0 001.38 5 6.338 6.338 0 007.88.5 3.99 3.99 0 001.32-3.2h3.53a6.625 6.625 0 01-2.34 5.49 9.54 9.54 0 01-6.15 1.87c-3.01-.02-5.32-.81-6.9-2.45zm20.91-.06c-1.68-1.66-2.52-4.143-2.52-7.45 0-3.3.84-5.79 2.52-7.45 1.68-1.66 4.06-2.49 7.14-2.49s5.47.83 7.16 2.49c1.69 1.66 2.53 4.15 2.53 7.45s-.84 5.79-2.53 7.45c-1.69 1.66-4.08 2.49-7.16 2.49s-5.46-.79-7.14-2.49zm11.64-2.2a7.118 7.118 0 001.52-4.94v-.59a7.078 7.078 0 00-1.54-4.95 6.77 6.77 0 00-8.93 0 7.079 7.079 0 00-1.54 5v.59a7.08 7.08 0 001.53 4.94 5.73 5.73 0 004.46 1.67 5.815 5.815 0 004.5-1.72zm8.94-14.85h3.59v16.1h10.19v3.11h-13.78V3.25zm17.14 0h3.58v16.1h10.19v3.11h-13.77V3.25zm17.13 0h15V6.3h-11.41v4.82h10.16v3.05h-10.16v5.23h11.56v3.06h-15.15V3.25zm20.86 17.11c-1.58-1.63-2.38-4.13-2.38-7.51s.81-5.81 2.41-7.46c1.6-1.65 3.9-2.48 6.89-2.48a10.92 10.92 0 014.37.83 6.76 6.76 0 013 2.49 7.226 7.226 0 011.1 4.1h-3.66a4.112 4.112 0 00-1.31-3.25 5 5 0 00-3.45-1.14 5.317 5.317 0 00-4.29 1.65 7.57 7.57 0 00-1.4 5v.56a7.571 7.571 0 001.39 5 6.338 6.338 0 007.88.5 3.99 3.99 0 001.32-3.2h3.52a6.63 6.63 0 01-2.33 5.49 9.54 9.54 0 01-6.15 1.87c-3.013-.013-5.317-.83-6.91-2.45zm23.94-14.03h-6.18V3.25h15.93v3.08h-6.19v16.13h-3.56V6.33zm13.02-3.08h3.56v19.21h-3.56V3.25zm6.44 0h3.87L337.16 15c.17.45.42 1.19.76 2.21.24.767.38 1.187.42 1.26h.14c.48-1.6.86-2.77 1.12-3.5l4.09-11.7h3.69l-7 19.21h-4.17l-7.03-19.23zm21 0h15V6.3h-11.41v4.82h10.16v3.05h-10.16v5.23h11.56v3.06h-15.15V3.25z"
                  fill="#fff"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M15.15 11.76V3.31a.85.85 0 00-.85-.85H9.59a.85.85 0 00-.85.85v8.45c0 .47.38.85.85.85h4.71c.47 0 .85-.38.85-.85z"
                  fill="url(#paint0_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M14.326 14.91l7.318-4.225a.85.85 0 00.311-1.161L19.6 5.445a.85.85 0 00-1.16-.311l-7.32 4.225a.85.85 0 00-.31 1.16l2.354 4.08a.85.85 0 001.161.311z"
                  fill="url(#paint1_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M11.249 15.729l7.318 4.225a.85.85 0 001.16-.311l2.356-4.08a.85.85 0 00-.311-1.16l-7.318-4.225a.85.85 0 00-1.162.31l-2.354 4.08a.85.85 0 00.31 1.16z"
                  fill="url(#paint2_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M8.74 13.45v8.45c0 .47.38.85.85.85h4.71c.47 0 .85-.38.85-.85v-8.45a.85.85 0 00-.85-.85H9.59a.85.85 0 00-.85.85z"
                  fill="url(#paint3_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M9.682 10.273l-7.318 4.225a.85.85 0 00-.31 1.16l2.354 4.08a.85.85 0 001.161.31l7.318-4.224a.85.85 0 00.311-1.161l-2.354-4.08a.85.85 0 00-1.162-.31z"
                  fill="url(#paint4_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <path
                  d="M2.53 10.58l7.318 4.225a.85.85 0 001.161-.31l2.355-4.08a.85.85 0 00-.31-1.16l-7.32-4.227a.85.85 0 00-1.16.311L2.218 9.42a.85.85 0 00.311 1.16z"
                  fill="url(#paint5_linear)"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <defs
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <lineargradient
                    id="paint0_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="11.95"
                    x2="11.95"
                    y1="2.46"
                    y2="12.53"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#FC7575"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#F88"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                  <lineargradient
                    id="paint1_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="11.99"
                    x2="20.52"
                    y1="12.564"
                    y2="7.639"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#FFB78F"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#FCA87E"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                  <lineargradient
                    id="paint2_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="20.934"
                    x2="12.351"
                    y1="17.614"
                    y2="12.659"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#FFC969"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#FFD47D"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                  <lineargradient
                    id="paint3_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="11.94"
                    x2="11.94"
                    y1="22.78"
                    y2="12.64"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#58C484"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#68DA9A"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                  <lineargradient
                    id="paint4_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="3.202"
                    x2="11.811"
                    y1="17.709"
                    y2="12.739"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#73A8C6"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#8DBAD8"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                  <lineargradient
                    id="paint5_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="12.267"
                    x2="3.633"
                    y1="12.495"
                    y2="7.51"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <stop
                      stopColor="#AB8ACE"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <stop
                      offset="1"
                      stopColor="#BF9EDB"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </lineargradient>
                </defs>
              </svg>
            </div>
            <section
              className="lg:flex lg:items-start"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p
                className="text-lg mr-12"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  marginRight: "3rem",
                }}
              >
                © Copyright 2020
              </p>
              <nav
                role="navigation"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                }}
              >
                <ul
                  className="list-none mt-5 p-0 lg:items-start lg:flex lg:flex-wrap lg:mt-0"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    listStyle: "none",
                    listStyleType: "none",
                    padding: "0px",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    marginTop: "0px",
                  }}
                >
                  <li
                    className="text-lg mt-2 w-full lg:mt-0 lg:w-auto mr-10"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      marginRight: "2.5rem",
                      marginTop: "0px",
                      width: "auto",
                    }}
                  >
                    <a
                      className="border-b border-transparent text-white inline-block transition-colors hover:border-black focus:border-black"
                      href="https://coin.colorfuldemo.com/en/legal/accessibility"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        borderColor: "transparent",
                        borderBottomWidth: "1px",
                        display: "inline-block",
                        color: "rgba(255,255,255,1)",
                        transitionProperty:
                          "background-color, border-color, color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      Accessibility
                    </a>
                  </li>
                  <li
                    className="text-lg mt-2 w-full lg:mt-0 lg:w-auto mr-10"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      marginRight: "2.5rem",
                      marginTop: "0px",
                      width: "auto",
                    }}
                  >
                    <a
                      className="border-b border-transparent text-white inline-block transition-colors hover:border-black focus:border-black"
                      href="https://coin.colorfuldemo.com/en/legal/privacy-policy"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        borderColor: "transparent",
                        borderBottomWidth: "1px",
                        display: "inline-block",
                        color: "rgba(255,255,255,1)",
                        transitionProperty:
                          "background-color, border-color, color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    className="text-lg mt-2 w-full lg:mt-0 lg:w-auto mr-10"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      marginRight: "2.5rem",
                      marginTop: "0px",
                      width: "auto",
                    }}
                  >
                    <a
                      className="border-b border-transparent text-white inline-block transition-colors hover:border-black focus:border-black"
                      href="https://coin.colorfuldemo.com/en/legal/terms-of-use"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        borderColor: "transparent",
                        borderBottomWidth: "1px",
                        display: "inline-block",
                        color: "rgba(255,255,255,1)",
                        transitionProperty:
                          "background-color, border-color, color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li
                    className="text-lg mt-2 w-full lg:mt-0 lg:w-auto mr-10"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      marginRight: "2.5rem",
                      marginTop: "0px",
                      width: "auto",
                    }}
                  >
                    <a
                      className="border-b border-transparent text-white inline-block transition-colors hover:border-black focus:border-black"
                      href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US/sitemap"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        borderColor: "transparent",
                        borderBottomWidth: "1px",
                        display: "inline-block",
                        color: "rgba(255,255,255,1)",
                        transitionProperty:
                          "background-color, border-color, color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      Sitemap
                    </a>
                  </li>
                  <li
                    className="text-lg mt-2 w-full lg:mt-0 lg:w-auto"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      marginTop: "0px",
                      width: "auto",
                    }}
                  >
                    <a
                      className="border-b border-transparent text-white inline-block transition-colors hover:border-black focus:border-black"
                      href="https://dalia.colorfuldemo.com/"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        borderColor: "transparent",
                        borderBottomWidth: "1px",
                        display: "inline-block",
                        color: "rgba(255,255,255,1)",
                        transitionProperty:
                          "background-color, border-color, color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      Intranet
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
          <div
            className="lg:flex lg:mt-8 sm:flex-col sm:flex-wrap sm:justify-between flex-col"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              marginTop: "2rem",
            }}
          >
            <p
              className="text-lg text-dark-gray-300 leading-6 mt-10 w-full lg:mt-0 mb-4 lg:mb-0 lg:order-2"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "1.125rem",
                lineHeight: "1.5rem",
                color: "rgba(149,149,149,1)",
                width: "100%",
                order: 2,
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Colorful Coin is not authorised by the Financial Conduct Authority
              under the Electronic Money Regulations 2011, Firm Reference
              000001, for the issuing of electronic money. Please be aware that
              this is a demo website intended for internal use only and not a
              real service/product.
            </p>
            <div
              className="lg:flex-shrink-0 lg:order-1 lg:mr-5 lg:max-w-sm lg:w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                flexShrink: 0,
                order: 1,
                marginRight: "1.25rem",
                maxWidth: "24rem",
                width: "100%",
              }}
            >
              <p
                className="text-lg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              >
                Find us on
              </p>
              <div
                className="flex flex-wrap mt-6"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1.5rem",
                }}
              >
                <a
                  className="inline-block text-white outline-none"
                  href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US?preview=1#"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-block",
                    outline: "transparent solid 2px",
                    outlineOffset: "2px",
                    color: "rgba(255,255,255,1)",
                  }}
                >
                  <svg
                    className="fill-current"
                    width="32"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      fill: "currentcolor",
                    }}
                  >
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-white outline-none ml-8"
                  href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US?preview=1#"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-block",
                    marginLeft: "2rem",
                    outline: "transparent solid 2px",
                    outlineOffset: "2px",
                    color: "rgba(255,255,255,1)",
                  }}
                >
                  <svg
                    className="fill-current"
                    width="32"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      fill: "currentcolor",
                    }}
                  >
                    <path
                      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-white outline-none ml-8"
                  href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US?preview=1#"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-block",
                    marginLeft: "2rem",
                    outline: "transparent solid 2px",
                    outlineOffset: "2px",
                    color: "rgba(255,255,255,1)",
                  }}
                >
                  <svg
                    className="fill-current"
                    width="32"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      fill: "currentcolor",
                    }}
                  >
                    <path
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-white outline-none ml-8"
                  href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US?preview=1#"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-block",
                    marginLeft: "2rem",
                    outline: "transparent solid 2px",
                    outlineOffset: "2px",
                    color: "rgba(255,255,255,1)",
                  }}
                >
                  <svg
                    className="fill-current"
                    width="32"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      fill: "currentcolor",
                    }}
                  >
                    <path
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  tab-size: 4;
  text-size-adjust: 100%;
  font-family: Archivo, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

body {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  line-height: inherit;
}
`,
        }}
      />
    </>
  );
  // }

  // return (

  //   <footer className="bg-gray-900">
  //     <div className="container py-5">
  //       <nav
  //         className="mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 text-center sm:text-left"
  //         aria-label="Footer"
  //       >
  //         {navigation.main.map((item) => (
  //           <div key={item.name} className="pb-6">
  //             <a
  //               href={item.href}
  //               className="text-sm leading-6 text-gray-300 hover:text-primary-300"
  //             >
  //               {item.name}
  //             </a>
  //           </div>
  //         ))}
  //       </nav>
  //       <div className="mt-10 flex justify-center space-x-10">
  //         {navigation.social.map((item) => (
  //           <a
  //             key={item.name}
  //             href={item.href}
  //             className="text-gray-300 hover:text-primary-300"
  //           >
  //             <span className="sr-only">{item.name}</span>
  //             <item.icon className="h-6 w-6" aria-hidden="true" />
  //           </a>
  //         ))}
  //       </div>
  //       <p className="mt-10 text-center text-xs leading-5 text-gray-300">
  //         &copy; Studio Starter Template {new Date().getFullYear()}
  //       </p>
  //     </div>
  //   </footer>
  // );
}
