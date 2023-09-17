import { scale } from "./scale";

import { Size } from "./sizes";

export const ModerateSize = {
  zero: Size.zero,

  /** 1 */
  min: `${scale(Size.min)}px`,

  /** 4 */
  smallest: `${scale(Size.smallest)}px`,

  /** 8 */
  small: `${scale(Size.small)}px`,

  /** 10 */
  xsmall: `${scale(Size.xsmall)}px`,

  /** 12 */
  regular: `${scale(Size.regular)}px`,

  /** 14 */
  xRegular: `${scale(Size.xRegular)}px`,

  /** 16 */
  medium: `${scale(Size.medium)}px`,

  /** 18 */
  xxMedium: `${scale(Size.xxMedium)}px`,

  /** 20 */
  xMedium: `${scale(Size.xMedium)}px`,

  /** 24 */
  large: `${scale(Size.large)}px`,

  /** 32 */
  xLarge: `${scale(Size.xLarge)}px`,

  /** 40 */
  xmLarge: `${scale(Size.xmLarge)}px`,

  /** 48 */
  xxLarge: `${scale(Size.xxLarge)}px`,

  /** 56 */
  xxxLarge: `${scale(Size.xxxLarge)}px`,

  /** 64 */
  largest: `${scale(Size.largest)}px`,
};
