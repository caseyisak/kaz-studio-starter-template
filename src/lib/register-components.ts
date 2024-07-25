import {
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
// import  from "@/app/_studio/ButtonAnimation";
import {
  ButtonAnimationDefinition,
  ButtonAnimationComponent,
} from "@/app/_studio/ButtonAnimation";

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
]);

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
