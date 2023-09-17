import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;

export const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;
