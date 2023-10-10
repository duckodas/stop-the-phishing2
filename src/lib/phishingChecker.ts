import fetch from "node-fetch";

interface PhishingData {
  domains: string[];
}

class PhishingChecker {
  private phishingDomains: string[] = [];

  constructor() {
    this.loadPhishingDomains();
  }

  private async loadPhishingDomains() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/NotAestheticallyDucko/stop-the-phishing-links/main/domains.json"
      );

      if (!response.ok) {
        throw new Error("Failed to load phishing domains.");
      }

      const data = (await response.json()) as PhishingData; // Use a type assertion here
      this.phishingDomains = data.domains;
    } catch (error) {
      throw new Error("Failed to load phishing domains.");
    }
  }

  isPhishing(input: string): boolean {
    for (const domain of this.phishingDomains) {
      if (input.includes(domain)) {
        return true;
      }
    }
    return false;
  }

  getNumberOfPhishingLinks(input: string): number {
    const links = input.split(" ");
    let count = 0;
    for (const link of links) {
      if (this.isPhishing(link)) {
        count++;
      }
    }
    return count;
  }
}

export default PhishingChecker;
