import { proxy } from "valtio";

// as react Context whatever you define in here you would be able to utlize within the entire app
const state = proxy({
  intro: true, // are we in the homepage ? or not
  color: "#EFBD48", // default color
  isLogoTexture: true, // are we currently displaying the logo on our shirt ?
  isFullTexture: false,
  logoDecal: "./threejs.png", // init logo before apply custom logo, empty default value
  fullDecall: "./threejs.png", // init texture before apply custom texture, empty default value
});

export default state;
