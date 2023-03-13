import type { InitParams, StripeError, DiscoverReadersParams, DiscoverReadersResultType, CancelDiscoveringResultType, ConnectBluetoothReaderParams, DisconnectReaderResultType, Reader, ConnectInternetReaderParams, ConnectUsbReaderParams, CreatePaymentIntentParams, CollectSetupIntentPaymentMethodParams, PaymentIntentResultType, Cart, SetupIntentResultType, CreateSetupIntentParams, ClearReaderDisplayResultType, GetLocationsParams, GetLocationsResultType, RefundParams, CollectRefundPaymentMethodType, ProcessRefundResultType, ReadReusableCardParamsType, PaymentMethodResultType, SetConnectionTokenParams, ConnectHandoffParams, ConnectLocalMobileParams, ConnectReaderResultType, CollectPaymentMethodParams } from './types';
declare type InitializeResultNativeType = Promise<{
    error?: StripeError;
    reader?: Reader.Type;
}>;
interface InternalInitParams extends InitParams {
    reactNativeVersion: string;
}
declare type StripeTerminalSdkType = {
    initialize(params: InternalInitParams): InitializeResultNativeType;
    setConnectionToken(params: SetConnectionTokenParams): Promise<void>;
    discoverReaders(params: DiscoverReadersParams): DiscoverReadersResultType;
    cancelDiscovering(): CancelDiscoveringResultType;
    connectBluetoothReader(params: ConnectBluetoothReaderParams): Promise<ConnectReaderResultType>;
    connectInternetReader(params: ConnectInternetReaderParams): Promise<ConnectReaderResultType>;
    connectHandoffReader(params: ConnectHandoffParams): Promise<ConnectReaderResultType>;
    connectLocalMobileReader(params: ConnectLocalMobileParams): Promise<ConnectReaderResultType>;
    connectUsbReader(params: ConnectUsbReaderParams): Promise<ConnectReaderResultType>;
    disconnectReader(): Promise<DisconnectReaderResultType>;
    createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntentResultType>;
    collectPaymentMethod(params: CollectPaymentMethodParams): Promise<PaymentIntentResultType>;
    retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResultType>;
    processPayment(paymentIntentId: string): Promise<PaymentIntentResultType>;
    createSetupIntent(params: CreateSetupIntentParams): Promise<SetupIntentResultType>;
    cancelPaymentIntent(paymentIntentId: string): Promise<PaymentIntentResultType>;
    collectSetupIntentPaymentMethod(params: CollectSetupIntentPaymentMethodParams): Promise<SetupIntentResultType>;
    installAvailableUpdate(): Promise<void>;
    cancelInstallingUpdate(): Promise<void>;
    setReaderDisplay(cart: Cart): Promise<{
        error?: StripeError;
    }>;
    clearReaderDisplay(): Promise<ClearReaderDisplayResultType>;
    retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResultType>;
    cancelSetupIntent(paymentIntentId: string): Promise<SetupIntentResultType>;
    getLocations(params: GetLocationsParams): Promise<GetLocationsResultType>;
    confirmSetupIntent(paymentIntentId: string): Promise<SetupIntentResultType>;
    simulateReaderUpdate(update: Reader.SimulateUpdateType): Promise<void>;
    collectRefundPaymentMethod(params: RefundParams): Promise<CollectRefundPaymentMethodType>;
    cancelCollectRefundPaymentMethod(): Promise<{
        error?: StripeError;
    }>;
    processRefund(): Promise<ProcessRefundResultType>;
    clearCachedCredentials(): Promise<{
        error?: StripeError;
    }>;
    readReusableCard(params: ReadReusableCardParamsType): Promise<PaymentMethodResultType>;
    cancelCollectPaymentMethod(): Promise<{
        error?: StripeError;
    }>;
    cancelCollectSetupIntent(): Promise<{
        error?: StripeError;
    }>;
    cancelReadReusableCard(): Promise<{
        error?: StripeError;
    }>;
    setSimulatedCard(cardNumber: string): Promise<{
        error?: StripeError;
    }>;
};
declare const _default: StripeTerminalSdkType;
export default _default;
