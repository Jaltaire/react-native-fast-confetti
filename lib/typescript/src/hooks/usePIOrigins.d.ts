import type { FlakeStyle, Position, Range, Rotation } from '../types';
import type { PIConfig } from '../utils';
import type { SizeVariation, ColorRange, TextureInfo } from './useConfettiFlakes';
type UsePIOriginsParams = {
    children: React.ReactNode;
    rootColors?: string[];
    rootRotation?: Rotation;
    rootDepth?: Range;
    rootSpeedVariation?: Range;
    rootFlakeStyle?: FlakeStyle;
    containerWidth: number;
    containerHeight: number;
    parentTexture?: TextureInfo;
    reduceMotionFactor: number;
};
type UsePIOriginsResult = {
    blastPositions: Position[];
    originDelays: number[];
    piConfigs: PIConfig[];
    durationPiConfigs: PIConfig[];
    allColors: string[];
    sizeVariations: SizeVariation[];
    colorOverrides: (ColorRange | null)[];
    sizeIsTextured: boolean[];
    parentColorCount: number;
    totalCount: number;
    visibleCount: number;
};
export declare const usePIOrigins: ({ children, rootColors, rootRotation, rootDepth, rootSpeedVariation, rootFlakeStyle, containerWidth, containerHeight, parentTexture, reduceMotionFactor, }: UsePIOriginsParams) => UsePIOriginsResult;
export {};
//# sourceMappingURL=usePIOrigins.d.ts.map