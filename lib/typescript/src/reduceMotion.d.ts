import type { Range, ReduceMotionConfig, Rotation } from './types';
export declare const DEFAULT_REDUCE_MOTION_FACTOR = 0.5;
export declare function clampReduceMotionFactor(factor: number): number;
export declare function resolveReduceMotionFactor(config: ReduceMotionConfig | undefined, systemReduceMotionEnabled: boolean): number;
export declare function reduceMotionScale(factor: number): number;
export declare function reduceCountForMotion(count: number, factor: number): number;
export declare function isReduceMotionPieceVisible(index: number, totalCount: number, visibleCount: number): boolean;
export declare function scaleValueForMotion(value: number, factor: number): number;
export declare function scaleRangeForMotion(range: Range | undefined, factor: number): Range | undefined;
export declare function scaleRotationForMotion(rotation: Rotation | undefined, factor: number): Rotation | undefined;
//# sourceMappingURL=reduceMotion.d.ts.map