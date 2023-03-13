import type { DiscoverReadersParams, Reader, ConnectInternetReaderParams, CreatePaymentIntentParams, ConnectBluetoothReaderParams, ConnectUsbReaderParams, GetLocationsParams, Cart, CreateSetupIntentParams, CollectSetupIntentPaymentMethodParams, RefundParams, ReadReusableCardParamsType, ConnectHandoffParams, ConnectLocalMobileParams, CollectPaymentMethodParams, StripeError, UserCallbacks } from '../types';
export declare const FETCH_TOKEN_PROVIDER: any, CHANGE_CONNECTION_STATUS: any, CHANGE_PAYMENT_STATUS: any, FINISH_DISCOVERING_READERS: any, FINISH_INSTALLING_UPDATE: any, REQUEST_READER_DISPLAY_MESSAGE: any, REQUEST_READER_INPUT: any, REPORT_AVAILABLE_UPDATE: any, REPORT_UNEXPECTED_READER_DISCONNECT: any, REPORT_UPDATE_PROGRESS: any, START_INSTALLING_UPDATE: any, UPDATE_DISCOVERED_READERS: any;
/**
 *  useStripeTerminal hook Props
 */
export declare type Props = UserCallbacks;
/**
 * useStripeTerminal hook.
 * This hook gives you an acesss to all available SDK methods
 * as well as the state of the current connection
 *
 * @example
 * ```ts
 * const { discoverReaders } = useStripeTerminal({
 *   onUpdateDiscoveredReaders: (readers) => {
 *     setDisoveredReaders(readers)
 *   }
 *   onDidReportReaderSoftwareUpdateProgress: (progress) => {
 *     setCurrentProgress(progress)
 *   }
 * })
 * ```
 */
export declare function useStripeTerminal(props?: Props): {
    initialize: () => Promise<{
        reader?: Reader.Type | undefined;
        error?: undefined;
    } | {
        error: StripeError<import("../types").CommonError>;
        reader?: undefined;
    } | {
        error: {
            code: string;
            message: string;
        };
        reader: undefined;
    }>;
    discoverReaders: (params: DiscoverReadersParams) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelDiscovering: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    connectBluetoothReader: (params: ConnectBluetoothReaderParams) => Promise<import("../types").ConnectReaderResultType>;
    disconnectReader: () => Promise<import("../types").DisconnectReaderResultType | undefined>;
    connectInternetReader: (params: ConnectInternetReaderParams) => Promise<import("../types").ConnectReaderResultType>;
    connectUsbReader: (params: ConnectUsbReaderParams) => Promise<import("../types").ConnectReaderResultType>;
    createPaymentIntent: (params: CreatePaymentIntentParams) => Promise<import("../types").PaymentIntentResultType>;
    collectPaymentMethod: (params: CollectPaymentMethodParams) => Promise<import("../types").PaymentIntentResultType>;
    retrievePaymentIntent: (clientSecret: string) => Promise<import("../types").PaymentIntentResultType>;
    getLocations: (params: GetLocationsParams) => Promise<import("../types").GetLocationsResultType>;
    processPayment: (paymentIntentId: string) => Promise<import("../types").PaymentIntentResultType>;
    createSetupIntent: (params: CreateSetupIntentParams) => Promise<import("../types").SetupIntentResultType>;
    cancelPaymentIntent: (paymentIntentId: string) => Promise<import("../types").PaymentIntentResultType>;
    installAvailableUpdate: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelInstallingUpdate: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    setReaderDisplay: (cart: Cart) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    clearReaderDisplay: () => Promise<import("../types").ClearReaderDisplayResultType>;
    retrieveSetupIntent: (clientSecret: string) => Promise<import("../types").SetupIntentResultType>;
    collectSetupIntentPaymentMethod: (params: CollectSetupIntentPaymentMethodParams) => Promise<import("../types").SetupIntentResultType>;
    cancelSetupIntent: (setupIntentId: string) => Promise<import("../types").SetupIntentResultType>;
    confirmSetupIntent: (setupIntentId: string) => Promise<import("../types").SetupIntentResultType>;
    simulateReaderUpdate: (update: Reader.SimulateUpdateType) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    collectRefundPaymentMethod: (params: RefundParams) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    processRefund: () => Promise<import("../types").ProcessRefundResultType>;
    clearCachedCredentials: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    readReusableCard: (params: ReadReusableCardParamsType) => Promise<import("../types").PaymentMethodResultType>;
    cancelCollectPaymentMethod: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelCollectRefundPaymentMethod: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelCollectSetupIntent: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelReadReusableCard: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    connectHandoffReader: (params: ConnectHandoffParams) => Promise<import("../types").ConnectReaderResultType>;
    connectLocalMobileReader: (params: ConnectLocalMobileParams) => Promise<import("../types").ConnectReaderResultType>;
    setSimulatedCard: (cardNumber: string) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    emitter: import("react-native").EventEmitter | undefined;
    discoveredReaders: Reader.Type[];
    connectedReader: Reader.Type | null | undefined;
    isInitialized: boolean;
    loading: boolean;
};
