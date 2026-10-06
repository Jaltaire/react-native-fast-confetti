"use strict";

import { useMemo } from 'react';
export const useTextureProps = textureRootProps => {
  const rootImage = 'image' in textureRootProps ? textureRootProps.image : undefined;
  const rootSvg = 'svg' in textureRootProps ? textureRootProps.svg : undefined;
  return useMemo(() => {
    if (rootImage) return {
      type: 'image',
      content: rootImage
    };
    if (rootSvg) return {
      type: 'svg',
      content: rootSvg
    };
    return undefined;
  }, [rootImage, rootSvg]);
};
//# sourceMappingURL=useTextureProps.js.map