/// <reference types="react" />
import type { EventEmitter } from 'react-native';
import type { Reader, InitializeResultType } from '../types';
declare type ContextType = {
    loading: boolean;
    isInitialized: boolean;
    connectedReader?: Reader.Type | null;
    discoveredReaders: Reader.Type[];
    emitter?: EventEmitter;
    setLoading(value: boolean): void;
    setIsInitialized(value: boolean): void;
    setConnectedReader(value: Reader.Type | null): void;
    setDiscoveredReaders(value: Reader.Type[]): void;
    initialize?(): Promise<InitializeResultType>;
    log(code: string, message?: any): void;
};
export declare const StripeTerminalContext: import("react").Context<ContextType>;
export {};
