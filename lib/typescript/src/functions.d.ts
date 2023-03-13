import type { InitParams, InitializeResultType, DiscoverReadersParams, DiscoverReadersResultType, ConnectBluetoothReaderParams, CancelDiscoveringResultType, DisconnectReaderResultType, ConnectInternetReaderParams, ConnectUsbReaderParams, CreatePaymentIntentParams, CollectSetupIntentPaymentMethodParams, PaymentIntentResultType, GetLocationsParams, GetLocationsResultType, StripeError, Cart, CreateSetupIntentParams, ClearReaderDisplayResultType, SetupIntentResultType, Reader, RefundParams, PaymentMethodResultType, ReadReusableCardParamsType, ProcessRefundResultType, ConnectLocalMobileParams, ConnectReaderResultType, ConnectHandoffParams, CollectPaymentMethodParams } from './types';
export declare function initialize(params: InitParams): Promise<InitializeResultType>;
export declare function setConnectionToken(token?: string, error?: string): Promise<void>;
export declare function discoverReaders(params: DiscoverReadersParams): Promise<DiscoverReadersResultType>;
export declare function cancelDiscovering(): Promise<CancelDiscoveringResultType>;
export declare function connectBluetoothReader(params: ConnectBluetoothReaderParams): Promise<ConnectReaderResultType>;
export declare function connectHandoffReader(params: ConnectHandoffParams): Promise<ConnectReaderResultType>;
export declare function connectLocalMobileReader(params: ConnectLocalMobileParams): Promise<ConnectReaderResultType>;
export declare function connectInternetReader(params: ConnectInternetReaderParams): Promise<ConnectReaderResultType>;
export declare function connectUsbReader(params: ConnectUsbReaderParams): Promise<ConnectReaderResultType>;
export declare function disconnectReader(): Promise<DisconnectReaderResultType>;
export declare function createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntentResultType>;
export declare function createSetupIntent(params: CreateSetupIntentParams): Promise<SetupIntentResultType>;
export declare function collectPaymentMethod(params: CollectPaymentMethodParams): Promise<PaymentIntentResultType>;
export declare function retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResultType>;
export declare function getLocations(params: GetLocationsParams): Promise<GetLocationsResultType>;
export declare function processPayment(paymentIntentId: string): Promise<PaymentIntentResultType>;
export declare function cancelPaymentIntent(paymentIntentId: string): Promise<PaymentIntentResultType>;
export declare function installAvailableUpdate(): Promise<{
    error?: StripeError;
}>;
export declare function setReaderDisplay(cart: Cart): Promise<{
    error?: StripeError;
}>;
export declare function cancelInstallingUpdate(): Promise<{
    error?: StripeError;
}>;
export declare function retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResultType>;
export declare function collectSetupIntentPaymentMethod(params: CollectSetupIntentPaymentMethodParams): Promise<SetupIntentResultType>;
export declare function clearReaderDisplay(): Promise<ClearReaderDisplayResultType>;
export declare function cancelSetupIntent(setupIntentId: string): Promise<SetupIntentResultType>;
export declare function confirmSetupIntent(setupIntentId: string): Promise<SetupIntentResultType>;
export declare function simulateReaderUpdate(update: Reader.SimulateUpdateType): Promise<{
    error?: StripeError;
}>;
export declare function setSimulatedCard(cardNumber: string): Promise<{
    error?: StripeError;
}>;
export declare function collectRefundPaymentMethod(params: RefundParams): Promise<{
    error?: StripeError;
}>;
export declare function processRefund(): Promise<ProcessRefundResultType>;
export declare function clearCachedCredentials(): Promise<{
    error?: StripeError;
}>;
export declare function readReusableCard(params: ReadReusableCardParamsType): Promise<PaymentMethodResultType>;
export declare function cancelCollectPaymentMethod(): Promise<{
    error?: StripeError;
}>;
export declare function cancelCollectRefundPaymentMethod(): Promise<{
    error?: StripeError;
}>;
export declare function cancelCollectSetupIntent(): Promise<{
    error?: StripeError;
}>;
export declare function cancelReadReusableCard(): Promise<{
    error?: StripeError;
}>;
