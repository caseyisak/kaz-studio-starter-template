import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import StudioConfig from "../../../../studio.config";
export * from "./ButtonAnimationComponent";
import ButtonAnimationComponent from "./ButtonAnimationComponent";

const durationOptions = [
  { value: "animate-duration-75", displayName: "75ms" },
  { value: "animate-duration-100", displayName: "100ms" },
  { value: "animate-duration-150", displayName: "150ms" },
  { value: "animate-duration-200", displayName: "200ms" },
  { value: "animate-duration-300", displayName: "300ms" },
  { value: "animate-duration-500", displayName: "500ms" },
  { value: "animate-duration-700", displayName: "700ms" },
  { value: "animate-duration-1000", displayName: "1000ms" },
  { value: "animate-duration-[5s]", displayName: "5s" },
];

const delayOptions = [
  { value: "animate-delay-none", displayName: "0ms" },
  { value: "animate-delay-75", displayName: "75ms" },
  { value: "animate-delay-100", displayName: "100ms" },
  { value: "animate-delay-150", displayName: "150ms" },
  { value: "animate-delay-200", displayName: "200ms" },
  { value: "animate-delay-300", displayName: "300ms" },
  { value: "animate-delay-500", displayName: "500ms" },
  { value: "animate-delay-700", displayName: "700ms" },
  { value: "animate-delay-1000", displayName: "1000ms" },
  { value: "animate-delay-[5s]", displayName: "5s" },
];

const directionOptions = [
  { value: "animate-normal", displayName: "Normal" },
  { value: "animate-reverse", displayName: "Reverse" },
  { value: "animate-alternate", displayName: "Alternate" },
  { value: "animate-alternate-reverse", displayName: "Alternate Reverse" },
];

const iterationOptions = [
  { value: "animate-infinite", displayName: "Infinite" },
  { value: "animate-once", displayName: "Once" },
  { value: "animate-twice", displayName: "Twice" },
  { value: "animate-thrice", displayName: "Thrice" },
  { value: "animate-iteration-[10]", displayName: "10" },
];

const timingFunctionOptions = [
  { value: "animate-ease", displayName: "Ease" },
  { value: "animate-ease-linear", displayName: "Linear" },
  { value: "animate-ease-in", displayName: "Ease In" },
  { value: "animate-ease-out", displayName: "Ease Out" },
  { value: "animate-ease-in-out", displayName: "Ease In-Out" },
  {
    value: "animate-ease-[cubic-bezier(1,1,0,0)]",
    displayName: "Custom (cubic-bezier(1,1,0,0))",
  },
];

const fillModeOptions = [
  { value: "animate-fill-none", displayName: "None" },
  { value: "animate-fill-forwards", displayName: "Forwards" },
  { value: "animate-fill-backwards", displayName: "Backwards" },
  { value: "animate-fill-both", displayName: "Both" },
];

const playStateOptions = [
  { value: "animate-run", displayName: "Run" },
  { value: "animate-play", displayName: "Play" },
  { value: "animate-stop", displayName: "Stop" },
  { value: "animate-pause", displayName: "Pause" },
];

const compositionOptions = [
  { value: "animate-replace", displayName: "Replace" },
  { value: "animate-add", displayName: "Add" },
  { value: "animate-accumulate", displayName: "Accumulate" },
];

export const ButtonAnimationDefinition: ComponentDefinition = {
  id: "button-animation",
  name: "Button Animation",
  category: "Custom Components",
  builtInStyles: [
    "cfHorizontalAlignment",
    "cfVerticalAlignment",
    "cfMargin",
    "cfPadding",
    "cfBackgroundColor",
    "cfWidth",
    "cfMaxWidth",
    "cfHeight",
    "cfFlexDirection",
    "cfFlexWrap",
    "cfBorder",
    "cfGap",
    "cfImageAsset",
    "cfImageOptions",
    "cfBackgroundImageUrl",
    "cfBackgroundImageOptions",
    "cfFontSize",
    "cfFontWeight",
    "cfLineHeight",
    "cfLetterSpacing",
    "cfTextColor",
    "cfTextAlign",
    "cfTextTransform",
    "cfTextBold",
    "cfTextItalic",
    "cfTextUnderline",
  ],
  variables: {
    text: {
      displayName: "Text",
      type: "Text",
      defaultValue: "Click me!",
    },
    className: {
      displayName: "CSS Class",
      type: "Text",
      defaultValue: "",
      group: "style",
    },
    id: {
      displayName: "ID",
      type: "Text",
      defaultValue: "",
      group: "style",
    },
    animation: {
      displayName: "Animation",
      type: "Text",
      validations: {
        in: [
          { value: "animate-bounce", displayName: "Bounce" },
          { value: "animate-flash", displayName: "Flash" },
          { value: "animate-pulse", displayName: "Pulse" },
          { value: "animate-rubberBand", displayName: "Rubber Band" },
          { value: "animate-shakeX", displayName: "Shake X" },
          { value: "animate-shakeY", displayName: "Shake Y" },
          { value: "animate-headShake", displayName: "Head Shake" },
          { value: "animate-swing", displayName: "Swing" },
          { value: "animate-tada", displayName: "Tada" },
          { value: "animate-wobble", displayName: "Wobble" },
          { value: "animate-jello", displayName: "Jello" },
          { value: "animate-heartBeat", displayName: "Heart Beat" },
        ],
      },
      defaultValue: "",
      group: "style",
    },
    duration: {
      displayName: "Duration",
      type: "Text",
      validations: {
        in: durationOptions,
      },
      defaultValue: "animate-duration-300",
      group: "style",
    },
    delay: {
      displayName: "Delay",
      type: "Text",
      validations: {
        in: delayOptions,
      },
      defaultValue: "animate-delay-none",
      group: "style",
    },
    direction: {
      displayName: "Direction",
      type: "Text",
      validations: {
        in: directionOptions,
      },
      defaultValue: "animate-normal",
      group: "style",
    },
    iteration: {
      displayName: "Iteration Count",
      type: "Text",
      validations: {
        in: iterationOptions,
      },
      defaultValue: "animate-infinite",
      group: "style",
    },
    timingFunction: {
      displayName: "Timing Function",
      type: "Text",
      validations: {
        in: timingFunctionOptions,
      },
      defaultValue: "animate-ease",
      group: "style",
    },
    fillMode: {
      displayName: "Fill Mode",
      type: "Text",
      validations: {
        in: fillModeOptions,
      },
      defaultValue: "animate-fill-none",
      group: "style",
    },
    playState: {
      displayName: "Play State",
      type: "Text",
      validations: {
        in: playStateOptions,
      },
      defaultValue: "animate-run",
      group: "style",
    },
    composition: {
      displayName: "Composition",
      type: "Text",
      validations: {
        in: compositionOptions,
      },
      defaultValue: "animate-replace",
      group: "style",
    },
  },
};
