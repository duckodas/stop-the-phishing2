import axios from "axios";

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
      const response = await axios.get<PhishingData>(
        "https://raw.githubusercontent.com/NotAestheticallyDucko/phishing-links/main/domains.json"
      );

      this.phishingDomains = response.data.domains;
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
