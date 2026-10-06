import { type SharedValue } from 'react-native-reanimated';
import type { SizeVariation, ColorRange } from './useConfettiFlakes';
type MinimalBox = {
    colorIndex: number;
    sizeIndex: number;
};
export declare const useConfettiLogic: <T extends MinimalBox>({ sizeVariations, colors, boxes, sizeColorOverrides, count, }: {
    colors: string[];
    boxes: SharedValue<T[]>;
    sizeVariations: SizeVariation[];
    sizeColorOverrides: (ColorRange | null)[];
    count?: number;
}) => {
    texture: SharedValue<import("react-native-skia").SkImage | null>;
    sprites: import("react-native-reanimated").DerivedValue<any[]>;
};
export {};
//# sourceMappingURL=useConfettiLogic.d.ts.map