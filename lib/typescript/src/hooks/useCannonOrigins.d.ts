import type { FlakeStyle, NamedPosition, Position, Range, Rotation } from '../types';
import type { CannonConfig } from '../utils';
import type { SizeVariation, ColorRange, TextureInfo } from './useConfettiFlakes';
type UseCannonOriginsParams = {
    children: React.ReactNode;
    rootColors?: string[];
    rootRotation?: Rotation;
    rootDepth?: Range;
    rootSpeedVariation?: Range;
    rootTarget?: NamedPosition | Position;
    rootFlakeStyle?: FlakeStyle;
    containerWidth: number;
    containerHeight: number;
    parentTexture?: TextureInfo;
    reduceMotionFactor: number;
};
type UseCannonOriginsResult = {
    cannonsPositions: Position[];
    cannonConfigs: CannonConfig[];
    durationCannonConfigs: CannonConfig[];
    allColors: string[];
    sizeVariations: SizeVariation[];
    colorOverrides: (ColorRange | null)[];
    sizeIsTextured: boolean[];
    parentColorCount: number;
    totalCount: number;
    visibleCount: number;
};
export declare const useCannonOrigins: ({ children, rootColors, rootRotation, rootDepth, rootSpeedVariation, rootTarget, rootFlakeStyle, containerWidth, containerHeight, parentTexture, reduceMotionFactor, }: UseCannonOriginsParams) => UseCannonOriginsResult;
export {};
//# sourceMappingURL=useCannonOrigins.d.ts.map