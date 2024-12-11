const win = document.querySelector(".window");

// Color palette
const BG_DARK = "#181C14";
const BG_MED = "#3C3D37";
const BG_LIGHT = "#697565";
const DETAIL = "#ECDFCC";

win.style.backgroundColor = BG_MED;
win.style.border = "2px dashed "+BG_LIGHT;

win.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
