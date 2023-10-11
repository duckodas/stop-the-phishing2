export interface PhishingDomains {
    domains: string[];
}
export declare function fetchPhishingDomains(): Promise<PhishingDomains>;
export declare function initializePhishingDomains(): Promise<void>;
export declare function isPhishingDomain(input: string): Promise<boolean>;
export declare function countPhishingDomains(): Promise<number>;
