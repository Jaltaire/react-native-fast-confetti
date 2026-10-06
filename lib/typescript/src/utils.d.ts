import type { ColorRange } from './hooks/useConfettiFlakes';
import type { FallingBox, NamedPosition, Position, Range, Rotation } from './types';
export declare const getRandomBoolean: () => boolean;
export declare const getRandomValue: (min: number, max: number) => number;
export declare const resolveRange: (range: {
    min: number;
    max: number;
} | undefined, defaultRange: {
    min: number;
    max: number;
}) => {
    min: number;
    max: number;
};
type BoxBase = {
    vx: number;
    vy: number;
    launchDelay: number;
    depthScale: number;
    clockwise: boolean;
    maxRotation: {
        x: number;
        z: number;
    };
    colorIndex: number;
    sizeIndex: number;
    initialRotation: number;
    isTextured: boolean;
};
type OriginConfigBase = {
    spread: number;
    count: number;
    speedVariation: Required<Range>;
    colorStart: number;
    colorCount: number;
    sizeStart: number;
    sizeCount: number;
    rotation?: Rotation;
    depth?: Range;
};
export type PIConfig = OriginConfigBase & {
    initialSpeed: number;
};
export declare const generatePIBoxesArray: ({ piConfigs, originDelays, containerHeight, launchDelayMax, sizeColorOverrides, parentColorCount, sizeIsTextured, }: {
    piConfigs: PIConfig[];
    originDelays: number[];
    containerHeight: number;
    launchDelayMax: number;
    sizeColorOverrides: (ColorRange | null)[];
    parentColorCount: number;
    sizeIsTextured: boolean[];
}) => (BoxBase & {
    originIndex: number;
    originDelay: number;
    speedMultiplier: number;
})[];
export declare const estimatePIDuration: ({ piConfigs, blastPositions, originDelays, gravity, vDrag, sprayDurationMs, containerHeight, }: {
    piConfigs: PIConfig[];
    blastPositions: Position[];
    originDelays: number[];
    gravity: number;
    vDrag: number;
    sprayDurationMs?: number;
    containerHeight: number;
}) => {
    flightDuration: number;
    totalDuration: number;
};
export declare const resolveNamedPosition: (position: NamedPosition | Position, containerWidth: number, containerHeight: number) => Position;
export type CannonConfig = OriginConfigBase & {
    speed: number;
    target: Position;
};
export declare const estimateCannonDuration: ({ cannonConfigs, cannonsPositions, gravity, drag, sprayDurationMs, containerHeight, }: {
    cannonConfigs: CannonConfig[];
    cannonsPositions: Position[];
    gravity: number;
    drag: number;
    sprayDurationMs?: number;
    containerHeight: number;
}) => number;
export declare const generateCannonBoxesArray: ({ cannonConfigs, cannonsPositions, containerHeight, launchDelayMax, sizeColorOverrides, parentColorCount, sizeIsTextured, }: {
    cannonConfigs: CannonConfig[];
    cannonsPositions: Position[];
    containerHeight: number;
    launchDelayMax: number;
    sizeColorOverrides: (ColorRange | null)[];
    parentColorCount: number;
    sizeIsTextured: boolean[];
}) => (BoxBase & {
    cannonIndex: number;
})[];
/**
 * Computes the grid layout for confetti spawn positions.
 * Caps the total grid height to stay proportional to the container,
 * redistributing pieces into more columns when needed.
 */
export declare const computeSpawnGrid: ({ count, maxFlakeWidth, maxFlakeHeight, containerWidth, containerHeight, verticalSpacing, }: {
    count: number;
    maxFlakeWidth: number;
    maxFlakeHeight: number;
    containerWidth: number;
    containerHeight: number;
    verticalSpacing: number;
}) => {
    columnsNum: number;
    rowsNum: number;
    rowHeight: number;
    columnWidth: number;
    verticalOffset: number;
};
export declare const estimateFallingDuration: ({ gravity, containerHeight, verticalOffset, maxWobble, }: {
    gravity: number;
    containerHeight: number;
    verticalOffset: number;
    maxWobble?: number;
}) => number;
export declare const generateFallingBoxesArray: ({ count, layoutCount, sizeVariations, sizeColorOverrides, parentColorCount, sizeIsTextured, containerWidth, containerHeight, verticalSpacing, maxFlakeWidth, maxFlakeHeight, verticalOffset, columnsNum, columnWidth, rowsNum, rotation, depth, wobble, totalTime, gravity, infinite, continuous, }: {
    count: number;
    layoutCount?: number;
    sizeVariations: number;
    sizeColorOverrides: (ColorRange | null)[];
    parentColorCount: number;
    sizeIsTextured: boolean[];
    containerWidth: number;
    containerHeight: number;
    verticalSpacing: number;
    maxFlakeWidth: number;
    maxFlakeHeight: number;
    verticalOffset: number;
    columnsNum: number;
    columnWidth: number;
    rowsNum: number;
    rotation?: Rotation;
    depth?: Range;
    wobble?: Range;
    totalTime: number;
    gravity: number;
    infinite?: boolean;
    continuous?: boolean;
}) => {
    boxes: FallingBox[];
    trajectories: number[];
};
export {};
//# sourceMappingURL=utils.d.ts.map