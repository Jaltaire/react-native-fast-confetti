/**
 * Credit to geist-ui/react for this file, it's copied from there.
 */
import React, { type ReactNode, type ReactElement } from 'react';
type FlatChild = ReactElement | string | number;
export declare function flattenChildren(children: ReactNode, depth?: number, keys?: (string | number)[]): FlatChild[];
export declare const pickChildren: <Props>(_children: ReactNode | undefined, targetChild: React.ElementType) => {
    targetChildren: ReactElement<Props>[] | undefined;
    withoutTargetChildren: (ReactElement | string | number | null)[] | undefined;
};
export declare const isInstanceOfComponent: (element: ReactElement | undefined, targetElement: React.ElementType) => boolean;
export {};
//# sourceMappingURL=children.d.ts.map