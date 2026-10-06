"use strict";

import { forwardRef } from 'react';
import { InternalConfetti } from "./Confetti.js";
import { Flake } from "./FlakeComponent.js";
import { jsx as _jsx } from "react/jsx-runtime";
const ContinuousConfettiInner = /*#__PURE__*/forwardRef(({
  verticalSpacing = 200,
  ...props
}, ref) => /*#__PURE__*/_jsx(InternalConfetti, {
  ...props,
  ref: ref,
  verticalSpacing: verticalSpacing,
  infinite: true,
  continuous: true
}));
ContinuousConfettiInner.displayName = 'ContinuousConfetti';
const ContinuousConfetti = ContinuousConfettiInner;
ContinuousConfetti.Flake = Flake;
export { ContinuousConfetti };
//# sourceMappingURL=ContinuousConfetti.js.map