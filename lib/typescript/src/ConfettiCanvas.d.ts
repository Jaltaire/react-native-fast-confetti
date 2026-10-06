import type { ComponentProps } from 'react';
import { Atlas } from 'react-native-skia';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
type AtlasComponentProps = ComponentProps<typeof Atlas>;
type ConfettiCanvasProps = {
    containerStyle?: StyleProp<ViewStyle>;
    ready: boolean;
    texture: AtlasComponentProps['image'];
    sprites: AtlasComponentProps['sprites'];
    transforms: AtlasComponentProps['transforms'];
    opacity: AtlasComponentProps['opacity'];
    onContainerLayout?: (e: LayoutChangeEvent) => void;
};
export declare function ConfettiCanvas({ containerStyle, ready, texture, sprites, transforms, opacity, onContainerLayout, }: ConfettiCanvasProps): import("react/jsx-runtime").JSX.Element;
export declare const confettiStyles: {
    container: {
        height: "100%";
        width: "100%";
        position: "absolute";
        zIndex: number;
    };
    canvasContainer: {
        width: "100%";
        height: "100%";
    };
};
export {};
//# sourceMappingURL=ConfettiCanvas.d.ts.map