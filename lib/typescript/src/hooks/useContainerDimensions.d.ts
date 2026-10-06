import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
export declare const useContainerDimensions: (containerStyle?: StyleProp<ViewStyle>) => {
    containerWidth: number;
    containerHeight: number;
    onContainerLayout: (e: LayoutChangeEvent) => void;
    ready: boolean;
};
//# sourceMappingURL=useContainerDimensions.d.ts.map