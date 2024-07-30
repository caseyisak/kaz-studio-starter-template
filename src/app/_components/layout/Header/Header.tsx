"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //test header KB
  return (
    <>
      <div
        className="relative top-0 left-0 w-full hidden md:block"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          position: "relative",
          top: "0px",
          left: "0px",
          width: "100%",
          display: "block",
          color: "rgba(255,255,255,1)",
          backgroundImage:
            "url(https://images.ctfassets.net/nard9gjq7dg6/3IUKxP4tBHCaitwnTEko0O/a1dec1b555a59756b582a015d137d481/bg-blue.jpg)",
        }}
      >
        <nav
          className="top-0 z-20 w-full h-16 text-white transition-transform transform"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            height: "4rem",
            top: "0px",
            color: "rgba(255,255,255,1)",
            width: "100%",
            zIndex: 20,
            transform:
              "translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)",
            transitionProperty: "transform",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "0.15s",
          }}
        >
          <div
            className="w-full max-w-screen-xl flex justify-between items-center h-full mx-auto mt-0 px-8 py-4 text-white"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0px",
              maxWidth: "1280px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              color: "rgba(255,255,255,1)",
              width: "100%",
            }}
          >
            <a
              className="h-full flex items-center flex-row"
              href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US?preview=1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                textDecoration: "inherit",
                color: "inherit",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                className="flex items-center h-full"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  className="h-full"
                  src="https://images.ctfassets.net/nard9gjq7dg6/BkyPBXzfkTy9ZLZ1jMpt7/0b7482bf7c355f9dd511e1fdb118c79c/help-center-logo-02.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderStyle: "solid",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </a>
            <div
              className="flex items-center"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="inline-flex items-center p-2 w-48"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.5rem",
                  width: "12rem",
                }}
              >
                <svg
                  className="w-6 h-6 text-white mr-3"
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    height: "1.5rem",
                    marginRight: "0.75rem",
                    color: "rgba(255,255,255,1)",
                    width: "1.5rem",
                  }}
                >
                  <path
                    d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 239.1-107.5 239.1-240S388.5 16 256 16zm208 240c0 22.34-3.633 43.82-10.18 64h-74.56c3.008-20.4 4.744-41.8 4.744-64s-1.736-43.6-4.744-64h74.56c6.58 20.2 10.18 41.7 10.18 64zM256 464c-32.23 0-66.98-43.18-84.49-112h168.1C322.1 420.8 288.2 464 256 464zm-91.1-144c-3.1-19.9-4.9-41.3-4.9-64s1.754-44.14 4.875-64h182.3c3.121 19.86 4.875 41.28 4.875 64s-1.754 44.14-4.875 64H164.9zM48 256c0-22.34 3.633-43.82 10.18-64h74.56c-3.008 20.4-4.744 41.8-4.744 64s1.736 43.6 4.744 64H58.18C51.63 299.8 48 278.3 48 256zM256 48c32.23 0 66.98 43.18 84.49 112H171.5C189 91.18 223.8 48 256 48zm184.3 112h-67c-9.131-39.15-23.7-72.71-41.88-97.64C378.4 80.73 417.1 115.6 440.3 160zM180.6 62.36c-18.2 24.93-32.7 58.44-41.9 97.64H71.66c23.21-44.4 61.94-79.27 108.94-97.64zM71.66 352h67.04c9.131 39.15 23.7 72.71 41.88 97.64C133.6 431.3 94.87 396.4 71.66 352zm259.74 97.6c18.2-24.9 32.7-58.4 41.9-97.6h67.06c-23.26 44.4-61.96 79.3-108.96 97.6z"
                    fill="currentColor"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
                <div
                  className="relative flex-grow"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    flexGrow: 1,
                    position: "relative",
                  }}
                >
                  <button
                    id="headlessui-listbox-button-7"
                    className="flex items-center focus:outline-none focus-visible:ring-2 ring-gray-800 text-white"
                    type="button"
                    aria-haspopup="true"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      fontSize: "100%",
                      textTransform: "none",
                      backgroundColor: "transparent",
                      backgroundImage: "none",
                      cursor: "pointer",
                      padding: "0px",
                      lineHeight: "inherit",
                      appearance: "button",
                      display: "flex",
                      alignItems: "center",
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    English (US)
                    <span
                      className="ml-2 inline-block language-select_arrowDown__za5z1"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "inline-block",
                        marginLeft: "0.5rem",
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid rgb(255, 255, 255)",
                        width: "0px",
                        height: "0px",
                      }}
                    />
                  </button>
                </div>
              </div>
              <a
                className="inline-flex border-solid border-2 border-white text-white font-medium text-center rounded-lg px-3 py-1 ml-2 transform transition-background ease-in-out duration-200 hover:bg-white hover:text-cf-blue-medium hover:shadow-sm focus:bg-white focus:text-cf-blue-medium focus:shadow-sm"
                href="https://dalia.colorfuldemo.com/"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textDecoration: "inherit",
                  borderColor: "rgba(255,255,255,1)",
                  borderRadius: "0.5rem",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  display: "inline-flex",
                  fontWeight: 500,
                  marginLeft: "0.5rem",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                  textAlign: "center",
                  color: "rgba(255,255,255,1)",
                  transform:
                    "translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.2s",
                }}
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>
      </div>
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

  // return (
  //   <header className="bg-white">
  //     <nav className="container flex items-center py-5" aria-label="Global">
  //       <div className="flex lg:flex-1">
  //         <Link href="/" className="-m-1.5 p-1.5">
  //           <span className="sr-only">Studio Starter Template</span>
  //           <svg
  //             width="50"
  //             viewBox="0 0 279 272"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               d="M182.01 128.481V8.57436C182.01 4.314 178.549 0.860291 174.28 0.860291L104.029 0.860291C99.7596 0.860291 96.2986 4.314 96.2986 8.57436L96.2986 128.481C96.2986 132.741 99.7596 136.195 104.029 136.195H174.28C178.549 136.195 182.01 132.741 182.01 128.481Z"
  //               fill="url(#paint0_linear_1_21)"
  //             />
  //             <path
  //               d="M166.871 169.633L270.666 109.706C274.354 107.577 275.618 102.861 273.489 99.1735L238.453 38.4894C236.324 34.8014 231.608 33.5379 227.92 35.6671L124.124 95.5935C120.436 97.7227 119.173 102.438 121.302 106.126L156.338 166.81C158.467 170.498 163.183 171.762 166.871 169.633Z"
  //               fill="url(#paint1_linear_1_21)"
  //             />
  //             <path
  //               d="M125.78 176.814L229.576 236.74C233.264 238.869 237.979 237.606 240.109 233.918L275.145 173.234C277.274 169.546 276.01 164.83 272.322 162.701L168.527 102.774C164.839 100.645 160.123 101.909 157.994 105.597L122.958 166.281C120.829 169.969 122.092 174.684 125.78 176.814Z"
  //               fill="url(#paint2_linear_1_21)"
  //             />
  //             <path
  //               d="M96.2986 143.909L96.2986 263.815C96.2986 268.075 99.7596 271.529 104.029 271.529H174.28C178.549 271.529 182.01 268.075 182.01 263.815V143.909C182.01 139.648 178.549 136.195 174.28 136.195H104.029C99.7596 136.195 96.2986 139.648 96.2986 143.909Z"
  //               fill="url(#paint3_linear_1_21)"
  //             />
  //             <path
  //               d="M111.024 104.18L7.22801 164.106C3.54007 166.235 2.2765 170.951 4.40573 174.639L39.4417 235.323C41.5709 239.011 46.2867 240.275 49.9746 238.146L153.77 178.219C157.458 176.09 158.722 171.374 156.592 167.686L121.556 107.002C119.427 103.314 114.712 102.051 111.024 104.18Z"
  //               fill="url(#paint4_linear_1_21)"
  //             />
  //             <path
  //               d="M9.61816 108.24L113.414 168.166C117.102 170.296 121.817 169.032 123.947 165.344L158.983 104.66C161.112 100.972 159.848 96.2564 156.16 94.1271L52.3647 34.2007C48.6768 32.0715 43.9611 33.3351 41.8318 37.023L6.79588 97.7071C4.66665 101.395 5.93022 106.111 9.61816 108.24Z"
  //               fill="url(#paint5_linear_1_21)"
  //             />
  //             <defs>
  //               <linearGradient
  //                 id="paint0_linear_1_21"
  //                 x1="139.155"
  //                 y1="0.995625"
  //                 x2="139.155"
  //                 y2="135.247"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#FC7575" />
  //                 <stop offset="1" stopColor="#FF8888" />
  //               </linearGradient>
  //               <linearGradient
  //                 id="paint1_linear_1_21"
  //                 x1="138.82"
  //                 y1="136.468"
  //                 x2="252.456"
  //                 y2="70.8605"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#FFB78F" />
  //                 <stop offset="1" stopColor="#FCA87E" />
  //               </linearGradient>
  //               <linearGradient
  //                 id="paint2_linear_1_21"
  //                 x1="257.978"
  //                 y1="203.779"
  //                 x2="143.522"
  //                 y2="137.697"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#FFC969" />
  //                 <stop offset="1" stopColor="#FFD47D" />
  //               </linearGradient>
  //               <linearGradient
  //                 id="paint3_linear_1_21"
  //                 x1="139.019"
  //                 y1="271.935"
  //                 x2="139.019"
  //                 y2="136.601"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#58C484" />
  //                 <stop offset="1" stopColor="#68DA9A" />
  //               </linearGradient>
  //               <linearGradient
  //                 id="paint4_linear_1_21"
  //                 x1="21.5046"
  //                 y1="205.067"
  //                 x2="136.312"
  //                 y2="138.783"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#73A8C6" />
  //                 <stop offset="1" stopColor="#8DBAD8" />
  //               </linearGradient>
  //               <linearGradient
  //                 id="paint5_linear_1_21"
  //                 x1="142.519"
  //                 y1="135.611"
  //                 x2="27.3598"
  //                 y2="69.1236"
  //                 gradientUnits="userSpaceOnUse"
  //               >
  //                 <stop stopColor="#AB8ACE" />
  //                 <stop offset="1" stopColor="#BF9EDB" />
  //               </linearGradient>
  //             </defs>
  //           </svg>
  //         </Link>
  //       </div>
  //       <div className="flex lg:hidden ml-auto">
  //         <button
  //           type="button"
  //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  //           onClick={() => setMobileMenuOpen(true)}
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  //         </button>
  //       </div>
  //       <div className="hidden lg:flex lg:gap-x-12">
  //         {navigation.map((item) => (
  //           <a
  //             key={item.name}
  //             href={item.href}
  //             className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-500 transition-all"
  //           >
  //             {item.name}
  //           </a>
  //         ))}
  //       </div>
  //       <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  //         <UserCircleIcon width={25} className="stroke-primary-400" />
  //       </div>
  //     </nav>
  //     <Dialog
  //       as="div"
  //       className="lg:hidden"
  //       open={mobileMenuOpen}
  //       onClose={setMobileMenuOpen}
  //     >
  //       <div className="fixed inset-0 z-10" />
  //       <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
  //         <div className="flex items-center justify-between">
  //           <Link href="/">
  //             <span className="sr-only">Studio Starter Template</span>
  //             <svg
  //               width="50"
  //               viewBox="0 0 279 272"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M182.01 128.481V8.57436C182.01 4.314 178.549 0.860291 174.28 0.860291L104.029 0.860291C99.7596 0.860291 96.2986 4.314 96.2986 8.57436L96.2986 128.481C96.2986 132.741 99.7596 136.195 104.029 136.195H174.28C178.549 136.195 182.01 132.741 182.01 128.481Z"
  //                 fill="url(#paint0_linear_1_21)"
  //               />
  //               <path
  //                 d="M166.871 169.633L270.666 109.706C274.354 107.577 275.618 102.861 273.489 99.1735L238.453 38.4894C236.324 34.8014 231.608 33.5379 227.92 35.6671L124.124 95.5935C120.436 97.7227 119.173 102.438 121.302 106.126L156.338 166.81C158.467 170.498 163.183 171.762 166.871 169.633Z"
  //                 fill="url(#paint1_linear_1_21)"
  //               />
  //               <path
  //                 d="M125.78 176.814L229.576 236.74C233.264 238.869 237.979 237.606 240.109 233.918L275.145 173.234C277.274 169.546 276.01 164.83 272.322 162.701L168.527 102.774C164.839 100.645 160.123 101.909 157.994 105.597L122.958 166.281C120.829 169.969 122.092 174.684 125.78 176.814Z"
  //                 fill="url(#paint2_linear_1_21)"
  //               />
  //               <path
  //                 d="M96.2986 143.909L96.2986 263.815C96.2986 268.075 99.7596 271.529 104.029 271.529H174.28C178.549 271.529 182.01 268.075 182.01 263.815V143.909C182.01 139.648 178.549 136.195 174.28 136.195H104.029C99.7596 136.195 96.2986 139.648 96.2986 143.909Z"
  //                 fill="url(#paint3_linear_1_21)"
  //               />
  //               <path
  //                 d="M111.024 104.18L7.22801 164.106C3.54007 166.235 2.2765 170.951 4.40573 174.639L39.4417 235.323C41.5709 239.011 46.2867 240.275 49.9746 238.146L153.77 178.219C157.458 176.09 158.722 171.374 156.592 167.686L121.556 107.002C119.427 103.314 114.712 102.051 111.024 104.18Z"
  //                 fill="url(#paint4_linear_1_21)"
  //               />
  //               <path
  //                 d="M9.61816 108.24L113.414 168.166C117.102 170.296 121.817 169.032 123.947 165.344L158.983 104.66C161.112 100.972 159.848 96.2564 156.16 94.1271L52.3647 34.2007C48.6768 32.0715 43.9611 33.3351 41.8318 37.023L6.79588 97.7071C4.66665 101.395 5.93022 106.111 9.61816 108.24Z"
  //                 fill="url(#paint5_linear_1_21)"
  //               />
  //               <defs>
  //                 <linearGradient
  //                   id="paint0_linear_1_21"
  //                   x1="139.155"
  //                   y1="0.995625"
  //                   x2="139.155"
  //                   y2="135.247"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#FC7575" />
  //                   <stop offset="1" stopColor="#FF8888" />
  //                 </linearGradient>
  //                 <linearGradient
  //                   id="paint1_linear_1_21"
  //                   x1="138.82"
  //                   y1="136.468"
  //                   x2="252.456"
  //                   y2="70.8605"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#FFB78F" />
  //                   <stop offset="1" stopColor="#FCA87E" />
  //                 </linearGradient>
  //                 <linearGradient
  //                   id="paint2_linear_1_21"
  //                   x1="257.978"
  //                   y1="203.779"
  //                   x2="143.522"
  //                   y2="137.697"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#FFC969" />
  //                   <stop offset="1" stopColor="#FFD47D" />
  //                 </linearGradient>
  //                 <linearGradient
  //                   id="paint3_linear_1_21"
  //                   x1="139.019"
  //                   y1="271.935"
  //                   x2="139.019"
  //                   y2="136.601"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#58C484" />
  //                   <stop offset="1" stopColor="#68DA9A" />
  //                 </linearGradient>
  //                 <linearGradient
  //                   id="paint4_linear_1_21"
  //                   x1="21.5046"
  //                   y1="205.067"
  //                   x2="136.312"
  //                   y2="138.783"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#73A8C6" />
  //                   <stop offset="1" stopColor="#8DBAD8" />
  //                 </linearGradient>
  //                 <linearGradient
  //                   id="paint5_linear_1_21"
  //                   x1="142.519"
  //                   y1="135.611"
  //                   x2="27.3598"
  //                   y2="69.1236"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stopColor="#AB8ACE" />
  //                   <stop offset="1" stopColor="#BF9EDB" />
  //                 </linearGradient>
  //               </defs>
  //             </svg>
  //           </Link>
  //           <button
  //             type="button"
  //             className="-m-2.5 rounded-md p-2.5 text-gray-700"
  //             onClick={() => setMobileMenuOpen(false)}
  //           >
  //             <span className="sr-only">Close menu</span>
  //             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  //           </button>
  //         </div>
  //         <div className="mt-6 flow-root">
  //           <div className="-my-6 divide-y divide-gray-500/10">
  //             <div className="space-y-2 py-6">
  //               {navigation.map((item) => (
  //                 <a
  //                   key={item.name}
  //                   href={item.href}
  //                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  //                 >
  //                   {item.name}
  //                 </a>
  //               ))}
  //             </div>
  //             <div className="py-6">
  //               <UserCircleIcon width={25} className="stroke-primary-400" />
  //             </div>
  //           </div>
  //         </div>
  //       </Dialog.Panel>
  //     </Dialog>
  //   </header>
  // );
}
