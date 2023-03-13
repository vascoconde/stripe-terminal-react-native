import React from 'react';
import { LogLevel } from '../types';
/**
 *  StripeTerminalProvider Component Props
 */
export interface Props {
    children: React.ReactElement | React.ReactElement[];
    tokenProvider: () => Promise<string>;
    logLevel?: LogLevel;
}
/**
 *  StripeTerminalProvider Component
 *
 * @example
 * ```ts
 *  <StripeTerminalProvider tokenProvider={tokenProvider}>
 *    <App />
 *  </StripeTerminalProvider>
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
export declare function StripeTerminalProvider({ children, tokenProvider, logLevel, }: Props): JSX.Element;
