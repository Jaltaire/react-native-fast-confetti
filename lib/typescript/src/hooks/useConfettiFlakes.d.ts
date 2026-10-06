import type { SkImage, SkSVG } from 'react-native-skia';
import type { FlakeProps, FlakeStyle } from '../types';
export type TextureInfo = {
    type: 'image';
    content: SkImage;
} | {
    type: 'svg';
    content: SkSVG;
};
export type ColorRange = {
    start: number;
    count: number;
};
export type SizeVariation = {
    width: number;
    height: number;
    radius: number;
    flakeStyle: FlakeStyle;
    texture?: TextureInfo;
    colors?: string[];
};
export declare function parseFlakeChildren(flakeChildren: React.ReactElement<FlakeProps>[] | undefined, defaultFlakeStyle: FlakeStyle, parentTexture?: TextureInfo): SizeVariation[];
export declare function buildAtlasColors(sizes: SizeVariation[], parentColors: string[]): {
    allColors: string[];
    colorOverrides: (ColorRange | null)[];
    sizeIsTextured: boolean[];
    parentColorCount: number;
};
type UseConfettiFlakesParams = {
    children?: React.ReactNode;
    rootColors?: string[];
    rootFlakeStyle?: FlakeStyle;
    parentTexture?: TextureInfo;
};
type UseConfettiFlakesResult = {
    allColors: string[];
    sizeVariations: SizeVariation[];
    colorOverrides: (ColorRange | null)[];
    sizeIsTextured: boolean[];
    parentColorCount: number;
};
export declare const useConfettiFlakes: ({ children, rootColors, rootFlakeStyle, parentTexture, }: UseConfettiFlakesParams) => UseConfettiFlakesResult;
export {};
//# sourceMappingURL=useConfettiFlakes.d.ts.map