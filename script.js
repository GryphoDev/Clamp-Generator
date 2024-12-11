const FORM = document.getElementById("clamp");
const SCREEN_MAX = document.getElementById("screenWeight");
const FONT_MIN = document.getElementById("fontMin");
const FONT_MAX = document.getElementById("fontMax");
const RESULTS = document.querySelector(".results");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  let screenMin = 320;
  let screenMax = parseFloat(SCREEN_MAX.value);
  let pxMin = parseFloat(FONT_MIN.value);
  let pxMax = parseFloat(FONT_MAX.value);

  let screenMoy = ((screenMax - screenMin) / 2 + screenMin) / 100;
  let pxMoy = (pxMax - pxMin) / 2 + pxMin;
  let vwValue = pxMoy / screenMoy;

  RESULTS.innerText = `font-size: clamp(${pxMin}px, ${vwValue.toFixed(
    2
  )}vw, ${pxMax}px)`;
});
