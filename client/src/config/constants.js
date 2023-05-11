import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  logoShirtCenter,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirtCenter",
    icon: logoShirtCenter,
    text: "Logo centrale",
  },
  {
    name: "logoShirt",
    icon: logoShirt,
    text: "Logo écusson",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    text: "Motifs",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
  logocenter: {
    stateProperty: "logoDecalCenter",
    filterTab: "logoShirtCenter",
  },
};
