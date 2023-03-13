import type { Location, LocationStatus } from './';
export declare namespace Reader {
    type DiscoveryMethod = IOS.DiscoveryMethod | Android.DiscoveryMethod;
    type Type = IOS.Type & Android.Type & {
        id: string;
        label?: string;
        batteryLevel?: number;
        serialNumber: string;
        locationId?: string;
        deviceSoftwareVersion?: string;
        simulated?: boolean;
        availableUpdate?: SoftwareUpdate;
        ipAddress?: string;
        locationStatus: LocationStatus;
        location?: Location;
        deviceType: DeviceType;
        status: NetworkStatus;
    };
    namespace IOS {
        type Type = {
            batteryStatus: BatteryStatus;
            isCharging?: number;
        };
        type DiscoveryMethod = 'bluetoothProximity' | 'bluetoothScan' | 'internet';
    }
    namespace Android {
        type Type = {
            baseUrl?: string;
            bootloaderVersion?: string;
            configVersion?: string;
            emvKeyProfileId?: string;
            firmwareVersion?: string;
            hardwareVersion?: string;
            macKeyProfileId?: string;
            pinKeyProfileId?: string;
            trackKeyProfileId?: string;
            settingsVersion?: string;
            pinKeysetId?: string;
        };
        type DiscoveryMethod = 'bluetoothScan' | 'internet' | 'localMobile' | 'handoff' | 'usb';
    }
    type BatteryStatus = 'critical' | 'low' | 'nominal' | 'unknown';
    type NetworkStatus = 'offline' | 'online';
    type SoftwareUpdate = {
        deviceSoftwareVersion: string;
        estimatedUpdateTime: EstimatedUpdateTime;
        requiredAt?: string;
    };
    type EstimatedUpdateTime = 'estimate1To2Minutes' | 'estimate2To5Minutes' | 'estimate5To15Minutes' | 'estimateLessThan1Minute';
    type SimulateUpdateType = 'random' | 'available' | 'none' | 'required' | 'lowBattery';
    type DeviceType = 'chipper1X' | 'chipper2X' | 'stripeM2' | 'verifoneP400' | 'wiseCube' | 'wisePad3' | 'wisePosE' | 'wisePad3s' | 'wisePadEDevkit' | 'stripeS700Devkit' | 'cotsDevice';
    type InputOptions = 'insertCard' | 'swipeCard' | 'tapCard';
    type DisplayMessage = 'insertCard' | 'insertOrSwipeCard' | 'multipleContactlessCardsDetected' | 'removeCard' | 'retryCard' | 'swipeCard' | 'tryAnotherCard' | 'tryAnotherReadMethod' | 'checkMobileDevice';
    type ConnectionStatus = 'connected' | 'connecting' | 'notConnected';
}
