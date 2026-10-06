import { type EasingFunction, type EasingFunctionFactory } from 'react-native-reanimated';
type UseAnimationLifecycleParams = {
    duration: number;
    infinite: boolean;
    fadeOutOnEnd: boolean;
    easing?: EasingFunction | EasingFunctionFactory;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    /** Opacity fade interpolation input range. @default [0.8, 1] */
    fadeRange?: [number, number];
    /** Worklet called at the end of each animation cycle (before looping). */
    onCycleEnd?: () => void;
    disabled?: boolean;
};
export declare const useAnimationLifecycle: ({ duration, infinite, fadeOutOnEnd, easing: easingProp, onAnimationStart, onAnimationEnd, fadeRange, onCycleEnd, disabled, }: UseAnimationLifecycleParams) => {
    progress: import("react-native-reanimated").SharedValue<number>;
    running: import("react-native-reanimated").SharedValue<boolean>;
    opacity: import("react-native-reanimated").DerivedValue<number>;
    pause: () => void;
    reset: () => void;
    resume: () => void;
    runAnimation: (delay?: number) => void;
};
export {};
//# sourceMappingURL=useAnimationLifecycle.d.ts.map