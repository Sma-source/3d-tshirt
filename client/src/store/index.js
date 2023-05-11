import { proxy } from "valtio";

// as react Context whatever you define in here you would be able to utlize within the entire app
const state = proxy({
  intro: true, // are we in the homepage ? or not
  color: "#0F0F10", // default color
  isLogoTexture: false, // are we currently displaying the logo on our shirt ?
  isFullTexture: false,
  isLogoTextureCenter: true,
  logoDecal: "./threejs.png", // init logo before apply custom logo, empty default value
  fullDecall: "./texture.jpg", // init texture before apply custom texture, empty default value
  logoDecalCenter: "./js.png",
});

export default state;
