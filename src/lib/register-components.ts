import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../studio.config";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";
import {
  ContactFormComponent,
  ContactFormDefinition,
} from "@/app/_studio/ContactForm";
// import {
//   ProductFilterComponent,
//   ProductFilterDefinition,
// } from "@/app/_studio/ProductFilter";

import {
  ButtonAnimationDefinition,
  ButtonAnimationComponent,
} from "@/app/_studio/ButtonAnimation";

import {
  AlgoliaSearchComponent,
  AlgoliaSearchDefinition,
} from "@/app/_studio/AlgoliaSearch";
// import {
//   ArrowIconDefinition,
//   ArrowIconComponent,
// } from "@/app/_studio/ArrowIcon";

defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  {
    component: ContactFormComponent,
    definition: ContactFormDefinition,
  },
  // {
  //   component: ProductFilterComponent,
  //   definition: ProductFilterDefinition,
  // },
  {
    component: ButtonAnimationComponent,
    definition: ButtonAnimationDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: AlgoliaSearchComponent,
    definition: AlgoliaSearchDefinition,
  },
  // { component: ArrowIconComponent, definition: ArrowIconDefinition },
]);
// defineBreakpoints([
//   {
//     id: "desktop",
//     query: "*",
//     displayName: "All Sizes",
//     previewSize: "100%",
//   },
//   {
//     id: "tablet",
//     query: "<992px",
//     displayName: "Tablet",
//     previewSize: "820px",
//   },
//   {
//     id: "mobile",
//     query: "<576px",
//     displayName: "Mobile",
//     previewSize: "390px",
//   },
// ]);
/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary["400"],
    Light: StudioConfig.colors.primary["100"], // Example new color
    Accent: "#FF5733", // Directly specifying a hex value for another new color
    Dark: StudioConfig.colors.primary["800"], // Assuming you have a 'dark' palette
  },
});
