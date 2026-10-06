export type PlateParams = {
    Cn: number;
    Ct: number;
    Ccouple: number;
    Crot: number;
    tumbleBias: number;
    g: number;
};
/**
 * Integrate the 2-D tumbling-plate ODE via RK4 and write (x, y, theta)
 * samples directly into `output` starting at `outputOffset`.
 *
 * Zero heap allocations in the hot loop — all intermediate state is kept
 * in scalar local variables.
 */
export declare function integrateTrajectory(ix: number, iy: number, ivx: number, ivy: number, itheta: number, iomega: number, p: PlateParams, totalTime: number, sampleCount: number, output: number[], outputOffset: number): void;
//# sourceMappingURL=physics.d.ts.map