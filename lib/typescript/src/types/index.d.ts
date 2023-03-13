import type { Refund } from './Refund';
import type { PaymentIntent } from './PaymentIntent';
import type { Reader } from './Reader';
import type { SetupIntent } from './SetupIntent';
export * from './Reader';
export * from './SetupIntent';
export * from './PaymentIntent';
export * from './Refund';
export declare type InitParams = {
    logLevel?: LogLevel;
};
export declare type SetConnectionTokenParams = {
    token?: string;
    error?: string;
};
export declare type LogLevel = LogLevelIOS | LogLevelAndroid;
export declare type LogLevelIOS = 'none' | 'verbose';
export declare type LogLevelAndroid = 'none' | 'verbose' | 'error' | 'warning';
export declare type DiscoverReadersParams = {
    simulated?: boolean;
    discoveryMethod: Reader.DiscoveryMethod;
};
export declare type GetLocationsParams = {
    limit?: number;
    endingBefore?: string;
    startingAfter?: string;
};
export declare type ConnectBluetoothReaderParams = {
    reader: Reader.Type;
    locationId?: string;
};
export declare type ConnectUsbReaderParams = {
    reader: Reader.Type;
    locationId?: string;
};
export declare type ConnectLocalMobileParams = {
    reader: Reader.Type;
    locationId?: string;
};
export declare type ConnectHandoffParams = {
    reader: Reader.Type;
    locationId?: string;
};
export declare type LineItem = {
    displayName: string;
    quantity: number;
    amount: number;
};
export declare type Cart = {
    currency: string;
    tax: number;
    total: number;
    lineItems: LineItem[];
};
export declare type ConnectInternetReaderParams = {
    reader: Reader.Type;
    failIfInUse?: boolean;
};
export declare enum CommonError {
    Failed = "Failed",
    Canceled = "Canceled",
    Unknown = "Unknown"
}
export declare type LocationStatus = 'notSet' | 'set' | 'unknown';
export declare type StripeError<T = CommonError> = {
    code: T;
    message: string;
};
export declare type InitializeResultType = {
    reader?: Reader.Type;
    error?: undefined;
} | {
    error: StripeError;
    reader?: undefined;
};
export declare type DiscoverReadersResultType = Promise<{
    error?: StripeError;
}>;
export declare type CancelDiscoveringResultType = Promise<{
    error?: StripeError;
}>;
export declare type ConnectReaderResultType = {
    reader: Reader.Type;
    error?: undefined;
} | {
    reader?: undefined;
    error: StripeError;
};
export declare type DisconnectReaderResultType = {
    error: StripeError;
};
export declare type UpdateSoftwareResultType = {
    update?: Reader.SoftwareUpdate;
    error?: StripeError;
};
export interface Location {
    displayName?: string;
    id: string;
    livemode: boolean;
    address?: Address;
}
export interface Address {
    city?: string;
    country?: string;
    postalCode?: string;
    line1?: string;
    line2?: string;
    state?: string;
}
export declare type PaymentStatus = 'notReady' | 'ready' | 'processing' | 'waitingForInput';
export declare type PaymentMethodType = 'cardPresent' | 'interacPresent' | 'card';
export interface Charge {
    id: string;
    amount: number;
    description: string;
    currency: string;
    status: string;
}
export declare type CreatePaymentIntentParams = CreatePaymentIntentIOSParams & {
    amount: number;
    currency: string;
    setupFutureUsage?: 'off_session' | 'on_session';
    onBehalfOf?: string;
    transferDataDestination?: string;
    applicationFeeAmount?: number;
    stripeDescription?: string;
    statementDescriptor?: string;
    receiptEmail?: string;
    customer?: string;
    transferGroup?: string;
    metadata?: Record<string, string>;
    paymentMethodOptions?: PaymentMethodOptions;
};
export declare type CreatePaymentIntentIOSParams = {
    paymentMethodTypes?: string[];
};
export declare type PaymentMethodOptions = {
    requestExtendedAuthorization?: boolean;
    requestIncrementalAuthorizationSupport?: boolean;
};
export declare type CollectPaymentMethodParams = {
    paymentIntentId: string;
    skipTipping?: boolean;
    tipEligibleAmount?: number;
};
export declare type CollectSetupIntentPaymentMethodParams = {
    customerConsentCollected?: boolean;
    setupIntentId: string;
};
export declare type CreateSetupIntentParams = {
    customerId?: string;
};
export declare type PaymentIntentResultType = {
    paymentIntent: PaymentIntent.Type;
    error?: undefined;
} | {
    paymentIntent?: undefined;
    error: StripeError;
};
export declare type SetupIntentResultType = {
    setupIntent: SetupIntent.Type;
    error?: undefined;
} | {
    setupIntent?: undefined;
    error: StripeError;
};
export declare type GetLocationsResultType = {
    locations: Location[];
    hasMore: boolean;
    error?: undefined;
} | {
    locations?: undefined;
    hasMore?: undefined;
    error: StripeError;
};
export declare type ClearReaderDisplayResultType = {
    error: StripeError;
};
export declare type CollectRefundPaymentMethodType = {
    error?: StripeError;
};
export declare type RefundParams = {
    chargeId: string;
    amount: number;
    currency: string;
};
export declare type CardPresent = {
    last4: string;
    expMonth: string;
    expYear: string;
    cardholderName?: string;
    funding: string;
    brand: string;
    fingerprint: string;
    generatedCard?: string;
    receipt?: string;
    emvAuthData?: string;
    country?: string;
    preferredLocales?: string;
};
export declare type PaymentMethodDetails = {
    type: string;
    cardPresent?: CardPresent;
    interacPresent?: string;
};
export declare type ProcessRefundResultType = {
    refund?: Refund.Props;
    error?: StripeError;
};
export declare type ReadReusableCardParamsType = {
    customer?: string;
};
declare type CardDetails = {
    brand: string;
    country: string;
    expMonth: number;
    expYear: number;
    fingerprint: string;
    funding: string;
    last4: string;
};
/**
 * @ignore
 */
export declare type EventResult<T> = {
    result: T;
};
export declare type UserCallbacks = {
    onUpdateDiscoveredReaders?(readers: Reader.Type[]): void;
    onFinishDiscoveringReaders?(error?: StripeError): void;
    onDidReportUnexpectedReaderDisconnect?(error?: StripeError): void;
    onDidReportAvailableUpdate?(update: Reader.SoftwareUpdate): void;
    onDidStartInstallingUpdate?(update: Reader.SoftwareUpdate): void;
    onDidReportReaderSoftwareUpdateProgress?(progress: string): void;
    onDidFinishInstallingUpdate?(result: UpdateSoftwareResultType): void;
    onDidRequestReaderInput?(input: Reader.InputOptions[]): void;
    onDidRequestReaderDisplayMessage?(message: Reader.DisplayMessage): void;
    onDidChangeConnectionStatus?(status: Reader.ConnectionStatus): void;
    onDidChangePaymentStatus?(status: PaymentStatus): void;
};
export declare namespace PaymentMethod {
    type Type = IOS.Type & Android.Props & {
        id: string;
        customer: string;
        cardDetails: CardDetails;
    };
    namespace IOS {
        interface Type {
            created: string;
            type: string;
        }
    }
    namespace Android {
        interface Props {
            livemode: boolean;
        }
    }
}
export declare type PaymentMethodResultType = {
    paymentMethod?: PaymentMethod.Type;
    error: undefined;
} | {
    paymentMethod: undefined;
    error: StripeError;
};
