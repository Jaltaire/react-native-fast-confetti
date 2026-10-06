import { Flake } from './FlakeComponent';
import type { ConfettiMethods, ConfettiProps, InternalConfettiProps } from './types';
declare const Confetti: React.ForwardRefExoticComponent<ConfettiProps & React.RefAttributes<ConfettiMethods>> & {
    Flake: typeof Flake;
};
/**
 * Legacy export for ContinuousConfetti.
 * ContinuousConfetti will need to be migrated to the new API separately.
 */
declare const InternalConfetti: React.ForwardRefExoticComponent<InternalConfettiProps & React.RefAttributes<ConfettiMethods>>;
export { Confetti, InternalConfetti };
//# sourceMappingURL=Confetti.d.ts.map