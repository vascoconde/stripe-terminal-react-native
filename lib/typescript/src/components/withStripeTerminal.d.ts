import React from 'react';
import { useStripeTerminal } from '../index';
export declare type WithStripeTerminalProps = ReturnType<typeof useStripeTerminal>;
/**
 *  withStripeTerminal HoC Component
 *
 * @example
 * ```ts
 *  function YourScreenComponent(props: WithStripeTerminalProps) { }
 *
 *  export default withStripeTerminal(YourScreenComponent);
 * ```
 * @param __namedParameters WithStripeTerminalProps
 * @returns JSX.Element
 * @category ReactComponents
 */
export declare function withStripeTerminal<Props>(WrappedComponent: React.ComponentType<Props>): {
    (props: Props): JSX.Element;
    displayName: string;
};
