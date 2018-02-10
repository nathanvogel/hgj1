/* global remap clamp clampedRemap */

window.remap = function(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

window.clamp = function(value, a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  if (value < min) value = min;
  if (value > max) value = max;
  return value;
};

window.clampedRemap = function(value, low1, high1, low2, high2) {
  return clamp(remap(value, low1, high1, low2, high2), low2, high2);
};
