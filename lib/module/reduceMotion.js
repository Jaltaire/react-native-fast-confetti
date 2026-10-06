"use strict";

export const DEFAULT_REDUCE_MOTION_FACTOR = 0.5;
export function clampReduceMotionFactor(factor) {
  if (!Number.isFinite(factor)) return DEFAULT_REDUCE_MOTION_FACTOR;
  return Math.min(Math.max(factor, 0), 1);
}
export function resolveReduceMotionFactor(config, systemReduceMotionEnabled) {
  if (config === 'never') return 0;
  if (config === undefined || config === 'system') {
    return systemReduceMotionEnabled ? DEFAULT_REDUCE_MOTION_FACTOR : 0;
  }
  const factor = clampReduceMotionFactor(config.factor ?? DEFAULT_REDUCE_MOTION_FACTOR);
  if (config.mode === 'always') return factor;
  return systemReduceMotionEnabled ? factor : 0;
}
export function reduceMotionScale(factor) {
  return 1 - clampReduceMotionFactor(factor);
}
export function reduceCountForMotion(count, factor) {
  const normalizedCount = Math.max(0, Math.round(count));
  const scale = reduceMotionScale(factor);
  if (normalizedCount === 0 || scale === 0) return 0;
  return Math.max(1, Math.round(normalizedCount * scale));
}
export function isReduceMotionPieceVisible(index, totalCount, visibleCount) {
  'worklet';

  if (visibleCount <= 0 || totalCount <= 0) return false;
  if (visibleCount >= totalCount) return true;
  return Math.floor(index * visibleCount / totalCount) !== Math.floor((index + 1) * visibleCount / totalCount);
}
export function scaleValueForMotion(value, factor) {
  return value * reduceMotionScale(factor);
}
export function scaleRangeForMotion(range, factor) {
  if (!range) return undefined;
  const scale = reduceMotionScale(factor);
  return {
    min: range.min * scale,
    max: range.max * scale
  };
}
export function scaleRotationForMotion(rotation, factor) {
  if (!rotation) return undefined;
  return {
    x: scaleRangeForMotion(rotation.x, factor),
    z: scaleRangeForMotion(rotation.z, factor)
  };
}
//# sourceMappingURL=reduceMotion.js.map