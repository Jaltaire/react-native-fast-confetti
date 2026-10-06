"use strict";

/**
 * Credit to geist-ui/react for this file, it's copied from there.
 */

import React, { Children, isValidElement, cloneElement } from 'react';
export function flattenChildren(children, depth = 0, keys = []) {
  return Children.toArray(children).reduce((acc, node, nodeIndex) => {
    if (/*#__PURE__*/isValidElement(node) && node.type === React.Fragment) {
      acc.push(...flattenChildren(node.props.children, depth + 1, keys.concat(node.key ?? nodeIndex)));
    } else {
      if (/*#__PURE__*/isValidElement(node)) {
        acc.push(/*#__PURE__*/cloneElement(node, {
          key: keys.concat(String(node.key)).join('.')
        }));
      } else if (typeof node === 'string' || typeof node === 'number') {
        acc.push(node);
      }
    }
    return acc;
  }, []);
}
export const pickChildren = (_children, targetChild) => {
  const children = flattenChildren(_children);
  const target = [];
  const withoutTargetChildren = Children.map(children, item => {
    if (! /*#__PURE__*/isValidElement(item)) return item;
    if (isInstanceOfComponent(item, targetChild)) {
      target.push(item);
      return null;
    }
    return item;
  });
  const targetChildren = target.length > 0 ? target : undefined;
  return {
    targetChildren,
    withoutTargetChildren
  };
};
export const isInstanceOfComponent = (element, targetElement) => {
  if (!element) return false;
  if (element.type === targetElement) return true;
  if (typeof element.type === 'function' && typeof targetElement === 'function' && 'displayName' in element.type && 'displayName' in targetElement) {
    return element.type.displayName === targetElement.displayName;
  }
  return false;
};
//# sourceMappingURL=children.js.map