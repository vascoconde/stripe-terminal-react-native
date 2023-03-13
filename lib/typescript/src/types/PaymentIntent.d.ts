import type { Charge } from './';
export declare namespace PaymentIntent {
    interface Type {
        id: string;
        amount: number;
        charges: Charge[];
        created: string;
        currency: string;
        status: Status;
    }
    type Status = 'canceled' | 'processing' | 'requiresCapture' | 'requiresConfirmation' | 'requiresPaymentMethod' | 'succeeded' | 'unknown';
}
