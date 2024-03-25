export default function getOrientation() {
  const screenWidth = window.screen.availWidth;

  let orientation = "landscape";

  if (screenWidth < 450) {
    orientation = "portrait";
  }
  return orientation;
}
