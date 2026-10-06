import type { SkImage, SkSVG } from 'react-native-skia';
import type { TextureInfo } from './useConfettiFlakes';
type TextureRootProps = {
    image: SkImage;
    svg?: undefined;
} | {
    image?: undefined;
    svg: SkSVG;
} | {
    image?: undefined;
    svg?: undefined;
};
export declare const useTextureProps: (textureRootProps: TextureRootProps) => TextureInfo | undefined;
export {};
//# sourceMappingURL=useTextureProps.d.ts.map