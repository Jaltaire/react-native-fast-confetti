"use strict";

import { Canvas, Atlas } from 'react-native-skia';
import { StyleSheet, View } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
export function ConfettiCanvas({
  containerStyle,
  ready,
  texture,
  sprites,
  transforms,
  opacity,
  onContainerLayout
}) {
  return /*#__PURE__*/_jsx(View, {
    pointerEvents: "none",
    style: [styles.container, containerStyle],
    onLayout: onContainerLayout,
    children: /*#__PURE__*/_jsx(Canvas, {
      style: styles.canvasContainer,
      children: ready ? /*#__PURE__*/_jsx(Atlas, {
        image: texture,
        sprites: sprites,
        transforms: transforms,
        opacity: opacity
      }) : null
    })
  });
}
export const confettiStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1
  },
  canvasContainer: {
    width: '100%',
    height: '100%'
  }
});
const styles = confettiStyles;
//# sourceMappingURL=ConfettiCanvas.js.map