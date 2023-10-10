declare class PhishingChecker {
    private phishingDomains;
    constructor();
    private loadPhishingDomains;
    isPhishing(input: string): boolean;
    getNumberOfPhishingLinks(input: string): number;
}
export default PhishingChecker;
