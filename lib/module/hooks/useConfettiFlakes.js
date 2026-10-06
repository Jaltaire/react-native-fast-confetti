"use strict";

import { useMemo } from 'react';
import { pickChildren } from "../children.js";
import { Flake } from "../FlakeComponent.js";
import { DEFAULT_COLORS, DEFAULT_FLAKE_SIZE } from "../constants.js";
export function parseFlakeChildren(flakeChildren, defaultFlakeStyle, parentTexture) {
  if (flakeChildren && flakeChildren.length > 0) {
    return flakeChildren.map(f => {
      const fProps = f.props;
      const resolvedStyle = fProps.flakeStyle ?? defaultFlakeStyle;
      const w = 'size' in fProps && fProps.size != null ? fProps.size : fProps.width;
      const h = 'size' in fProps && fProps.size != null ? fProps.size : fProps.height;
      let texture;
      if ('image' in fProps && fProps.image != null) {
        texture = {
          type: 'image',
          content: fProps.image
        };
      } else if ('svg' in fProps && fProps.svg != null) {
        texture = {
          type: 'svg',
          content: fProps.svg
        };
      } else if (parentTexture) {
        texture = parentTexture;
      }
      return {
        width: w,
        height: h,
        radius: fProps.radius ?? 0,
        flakeStyle: resolvedStyle,
        texture,
        colors: fProps.colors
      };
    });
  }
  return DEFAULT_FLAKE_SIZE.map(s => ({
    width: s.width,
    height: s.height,
    radius: s.radius ?? 0,
    flakeStyle: defaultFlakeStyle,
    texture: parentTexture
  }));
}
export function buildAtlasColors(sizes, parentColors) {
  const colorOverrides = new Array(sizes.length);
  const sizeIsTextured = new Array(sizes.length);
  const needsParentColors = sizes.some(s => !s.texture && !s.colors);
  const allColors = needsParentColors ? [...parentColors] : [];
  const parentColorCount = needsParentColors ? parentColors.length : 0;
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    if (size?.texture) {
      sizeIsTextured[i] = true;
      colorOverrides[i] = {
        start: allColors.length,
        count: 1
      };
      allColors.push('#000');
    } else if (size?.colors && size.colors.length > 0) {
      sizeIsTextured[i] = false;
      colorOverrides[i] = {
        start: allColors.length,
        count: size.colors.length
      };
      allColors.push(...size.colors);
    } else {
      sizeIsTextured[i] = false;
      colorOverrides[i] = null;
    }
  }
  if (allColors.length === 0) {
    allColors.push('#000');
  }
  return {
    allColors,
    colorOverrides,
    sizeIsTextured,
    parentColorCount
  };
}
export const useConfettiFlakes = ({
  children,
  rootColors,
  rootFlakeStyle,
  parentTexture
}) => {
  const {
    targetChildren: flakeChildren
  } = pickChildren(children, Flake);
  return useMemo(() => {
    const flakeStyle = rootFlakeStyle ?? 'glossy';
    const userColors = rootColors ?? DEFAULT_COLORS;
    const sizes = parseFlakeChildren(flakeChildren, flakeStyle, parentTexture);
    const {
      allColors,
      colorOverrides,
      sizeIsTextured,
      parentColorCount
    } = buildAtlasColors(sizes, userColors);
    return {
      allColors,
      sizeVariations: sizes,
      colorOverrides,
      sizeIsTextured,
      parentColorCount
    };
  }, [flakeChildren, rootColors, rootFlakeStyle, parentTexture]);
};
//# sourceMappingURL=useConfettiFlakes.js.map