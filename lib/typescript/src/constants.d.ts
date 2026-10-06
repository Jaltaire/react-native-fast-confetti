import type { Rotation, Range, FlakeSize } from './types';
export declare const DEFAULT_BOXES_COUNT = 200;
export declare const DEFAULT_FLAKE_SIZE: FlakeSize[];
export declare const DEFAULT_COLORS: string[];
export declare const DEFAULT_VERTICAL_SPACING = 70;
export declare const RANDOM_INITIAL_Y_JIGGLE = 60;
/**
 * Default rotation configuration for regular Confetti component.
 * Provides separate X and Z rotation ranges for more flexible animation control.
 */
export declare const DEFAULT_CONFETTI_ROTATION: Required<Rotation>;
export declare const DEFAULT_CONFETTI_GRAVITY = 1;
export declare const DEFAULT_CONFETTI_DEPTH: Required<Range>;
export declare const DEFAULT_CONFETTI_WOBBLE: Required<Range>;
export declare const DEFAULT_CONFETTI_DRIFT = 0.7;
/** Gentle ease-in: slow start that transitions into steady falling. */
export declare const DEFAULT_CONFETTI_FALL_EASING: import("react-native-reanimated").EasingFunctionFactory;
export declare const TRAJECTORY_SAMPLE_COUNT = 120;
export declare const DEFAULT_TANGENTIAL_DRAG_RATIO = 0.25;
export declare const DEFAULT_ROTATIONAL_DAMPING = 2;
/**
 * Maximum ratio of the offscreen spawn grid height to the container height.
 * Prevents the grid from growing disproportionately large for small containers.
 */
export declare const MAX_GRID_HEIGHT_RATIO = 1.5;
/**
 * Base safety multiplier for the wobble margin in duration estimation.
 * Accounts for the ODE's coupling term dissipating translational energy
 * into rotation, which lowers effective terminal velocity.
 */
export declare const WOBBLE_MARGIN_BASE = 1.2;
/**
 * Per-unit wobble scaling factor for the duration margin.
 */
export declare const WOBBLE_MARGIN_PER_UNIT = 0.5;
/**
 * Fallback wobble value used when maxWobble is not provided.
 */
export declare const WOBBLE_MARGIN_FALLBACK = 1.5;
export declare const DEFAULT_CANNON_ORIGIN_COUNT = 100;
export declare const DEFAULT_CANNON_CONFETTI_GRAVITY = 3;
export declare const DEFAULT_CANNON_CONFETTI_DRAG = 3;
export declare const DEFAULT_CANNON_CONFETTI_INITIAL_SPEED = 2;
export declare const DEFAULT_CANNON_CONFETTI_SPREAD_ANGLE: number;
export declare const DEFAULT_CANNON_CONFETTI_SPEED_VARIATION: Required<Range>;
export declare const DEFAULT_CANNON_CONFETTI_LAUNCH_DELAY_MAX = 0.2;
export declare const DEFAULT_CANNON_CONFETTI_DEPTH: Required<Range>;
export declare const DEFAULT_CANNON_CONFETTI_ROTATION: Required<Rotation>;
export declare const DEFAULT_PI_ORIGIN_COUNT = 100;
export declare const DEFAULT_PI_CONFETTI_GRAVITY = 3;
export declare const DEFAULT_PI_CONFETTI_DRAG = 3;
export declare const DEFAULT_PI_CONFETTI_INITIAL_SPEED = 1;
export declare const DEFAULT_PI_CONFETTI_SPREAD: number;
export declare const DEFAULT_PI_CONFETTI_SPEED_VARIATION: Required<Range>;
export declare const DEFAULT_PI_CONFETTI_LAUNCH_DELAY_MAX = 0.15;
export declare const DEFAULT_PI_CONFETTI_DEPTH: Required<Range>;
export declare const DEFAULT_PI_CONFETTI_ROTATION: Required<Rotation>;
//# sourceMappingURL=constants.d.ts.map