import type { PIConfettiMethods, PIConfettiProps } from './types';
import { Origin, Flake } from './PIConfettiComponents';
declare const PIConfettiInner: import("react").ForwardRefExoticComponent<PIConfettiProps & import("react").RefAttributes<PIConfettiMethods>>;
declare const PIConfetti: typeof PIConfettiInner & {
    Origin: typeof Origin;
    Flake: typeof Flake;
};
export { PIConfetti };
//# sourceMappingURL=PIConfetti.d.ts.map