// // components/AlgoliaSearch.tsx
// kaz - this is a pass at making a working Algolia search component. as of 7/30/24, it's not working.

// import React from "react";
// import algoliasearch from "algoliasearch/lite";
// import {
//   InstantSearch,
//   SearchBox,
//   Hits,
//   connectStateResults,
// } from "react-instantsearch-dom";

// const searchClient = algoliasearch(
//   process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
//   process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
// );

// const AlgoliaSearchComponent: React.FC<{ placeholder?: string }> = ({
//   placeholder = "Search...",
// }) => (
//   <InstantSearch
//     searchClient={searchClient}
//     indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX!}
//   >
//     <SearchBox translations={{ placeholder }} />
//     <CustomHits />
//   </InstantSearch>
// );

// const CustomHits = connectStateResults(({ searchState, searchResults }) => {
//   if (searchResults && searchResults.nbHits !== 0) {
//     return <Hits hitComponent={Hit} />;
//   } else {
//     return <div>No results found for {searchState.query}</div>;
//   }
// });

// const Hit: React.FC<{ hit: any }> = ({ hit }) => (
//   <div>
//     <a href={hit.url}>
//       <h2>{hit.title}</h2>
//     </a>
//     <p>{hit.content}</p>
//   </div>
// );

// export default AlgoliaSearchComponent;

//KB demo - this is non functional just a structure and visual
import React from "react";

export function AlgoliaSearchComponent() {
  return (
    <>
      <div
        className="top-banner_content__F_teV w-full max-w-screen-xl px-8 flex flex-col justify-center top-banner_large__YPhHy"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1280px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          width: "100%",
          alignItems: "center",
          color: "rgb(255, 255, 255)",
        }}
      >
        <h1
          className="page_h1__8SIl1 text-center"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            margin: "0px",
            fontWeight: "inherit",
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
          }}
        >
          How can we help?
        </h1>
        <div
          className="w-full max-w-3xl"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            maxWidth: "48rem",
            width: "100%",
          }}
        >
          <div
            className="bg-white h-14 rounded-full shadow-md pl-8 pr-4 w-full flex justify-center items-center m-auto"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              backgroundColor: "rgba(255,255,255,1)",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "3.5rem",
              margin: "auto",
              paddingRight: "1rem",
              paddingLeft: "2rem",
              boxShadow:
                "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
              width: "100%",
            }}
          >
            <div
              className="w-full relative"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="w-full bg-white text-cf-black"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "rgba(16,24,39,1)",
                  width: "100%",
                }}
              >
                <div
                  className="aa-Autocomplete"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-labelledby="autocomplete-2-label"
                  role="combobox"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <form
                    className="aa-Form flex"
                    role="search"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                    }}
                  >
                    <div
                      className="aa-InputWrapperPrefix hidden"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "none",
                      }}
                    >
                      <label
                        id="autocomplete-2-label"
                        className="aa-Label"
                        htmlFor="autocomplete-2-input"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        <button
                          className="aa-SubmitButton"
                          type="submit"
                          title="Submit"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            fontSize: "100%",
                            textTransform: "none",
                            appearance: "button",
                            backgroundColor: "transparent",
                            backgroundImage: "none",
                            cursor: "pointer",
                            padding: "0px",
                            lineHeight: "inherit",
                            color: "inherit",
                          }}
                        >
                          <svg
                            className="aa-SubmitIcon"
                            height="20"
                            width="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "block",
                              verticalAlign: "middle",
                            }}
                          >
                            <path
                              d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                              }}
                            />
                          </svg>
                        </button>
                      </label>
                      <div
                        className="aa-LoadingIndicator"
                        hidden
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        <svg
                          className="aa-LoadingIcon"
                          height="20"
                          width="20"
                          viewBox="0 0 100 100"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                          }}
                        >
                          <circle
                            cx="50"
                            cy="50"
                            fill="none"
                            r="35"
                            stroke="currentColor"
                            strokeDasharray="164.93361431346415 56.97787143782138"
                            strokeWidth="6"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          >
                            {/* <animatetransform
                              type="rotate"
                              attributeName="transform"
                              dur="1s"
                              keyTimes="0;0.40;0.65;1"
                              repeatCount="indefinite"
                              values="0 50 50;90 50 50;180 50 50;360 50 50"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                              }}
                            /> */}
                          </circle>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="aa-InputWrapper w-full search-autocomplete_searchAutocomplete__wThVm"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        width: "100%",
                      }}
                    >
                      <input
                        id="autocomplete-2-input"
                        className="aa-Input w-full pr-4 text-cf-black text-lg focus:outline-none"
                        type="search"
                        autoComplete="off"
                        // maxLength="512"
                        placeholder="Type your question"
                        aria-autocomplete="both"
                        aria-labelledby="autocomplete-2-label"
                        autoCapitalize="off"
                        autoCorrect="off"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          padding: "0px",
                          appearance: "textfield",
                          outlineOffset: "-2px",
                          fontSize: "1.125rem",
                          lineHeight: "1.75rem",
                          paddingRight: "1rem",
                          color: "rgba(16,24,39,1)",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>
                    <div
                      className="aa-InputWrapperSuffix hidden opacity-0"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "none",
                        opacity: 0,
                      }}
                    >
                      <button
                        className="aa-ClearButton"
                        type="reset"
                        hidden
                        title="Clear"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "100%",
                          textTransform: "none",
                          appearance: "button",
                          backgroundColor: "transparent",
                          backgroundImage: "none",
                          cursor: "pointer",
                          padding: "0px",
                          lineHeight: "inherit",
                          color: "inherit",
                        }}
                      >
                        <svg
                          className="aa-ClearIcon"
                          height="18"
                          width="18"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                          }}
                        >
                          <path
                            d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="absolute z-50 top-16 flex flex-col w-full px-4 -ml-4 rounded-md shadow-md border-gray-200 bg-white text-cf-black hidden pointer-events-none"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  backgroundColor: "rgba(255,255,255,1)",
                  borderColor: "rgba(229,231,235,1)",
                  borderRadius: "0.375rem",
                  display: "none",
                  flexDirection: "column",
                  marginLeft: "-1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  pointerEvents: "none",
                  position: "absolute",
                  top: "4rem",
                  boxShadow:
                    "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
                  color: "rgba(16,24,39,1)",
                  width: "100%",
                  zIndex: 50,
                  borderWidth: "1px",
                }}
              />
            </div>
            <button
              className="appearance-none focus:outline-none focus-visible:ring-2 bg-transparent cursor-pointer relative z-10"
              type="button"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontFamily: "inherit",
                fontSize: "100%",
                textTransform: "none",
                backgroundImage: "none",
                padding: "0px",
                lineHeight: "inherit",
                color: "inherit",
                appearance: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                position: "relative",
                zIndex: 10,
              }}
            >
              <svg
                className="search_icon__XD07F w-6"
                viewBox="0 0 49.02 49.02"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "block",
                  verticalAlign: "middle",
                  width: "1.5rem",
                }}
              >
                <path
                  d="M43.36,5.66A19.36,19.36,0,0,0,14.49,31.35L.66,45.18a2.25,2.25,0,0,0,3.18,3.19L17.67,34.54A19.36,19.36,0,0,0,43.36,5.66ZM40.53,30.22a15.36,15.36,0,1,1,0-21.73A15.37,15.37,0,0,1,40.53,30.22Z"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fill: "currentcolor",
                    color: "rgba(0,110,255,1)",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="leading-7 rich-text_richtext__P9mki mt-8 text-md text-white top-banner_byLine__DodP0 text-center"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            lineHeight: "1.75rem",
            marginTop: "2rem",
            textAlign: "center",
            color: "rgba(255,255,255,1)",
          }}
        >
          <p
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              margin: "0px",
            }}
          >
            Popular help categories include:{" "}
            <a
              href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US/category/payments?preview=1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                color: "inherit",
                textDecoration: "underline",
              }}
            >
              payments
            </a>
            , security, and{" "}
            <a
              href="https://colorful-demo-knowledge-base-80dufr1re.colorfuldemo.com/en-US/category/products?preview=1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                color: "inherit",
                textDecoration: "underline",
              }}
            >
              using Coin cards
            </a>
            .
          </p>
        </div>
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
}
