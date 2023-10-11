import fetch from "node-fetch";

export interface PhishingDomains {
  domains: string[];
}

let cachedDomains: PhishingDomains | null = null;
let lastCacheTime: number = 0;
const cacheTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds

export async function fetchPhishingDomains(): Promise<PhishingDomains> {
  const response = await fetch(
    "https://raw.githubusercontent.com/NotAestheticallyDucko/stop-the-phishing-domains/main/domains.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch phishing domains.");
  }

  const data = await response.json();
  return data as PhishingDomains;
}

export async function initializePhishingDomains(): Promise<void> {
  try {
    const currentTime = new Date().getTime();
    if (!cachedDomains || currentTime - lastCacheTime >= cacheTimeout) {
      cachedDomains = await fetchPhishingDomains();
      lastCacheTime = currentTime;
    }
  } catch (error) {
    throw new Error(`Failed to initialize phishing domains: ${error}`);
  }
}

export async function isPhishingDomain(input: string): Promise<boolean> {
  try {
    await initializePhishingDomains();
    if (cachedDomains) {
      const { domains } = cachedDomains;
      return domains.some((domain) => input.includes(domain));
    } else {
      throw new Error("Phishing domains have not been initialized.");
    }
  } catch (error) {
    throw new Error(`Failed to check if it's a phishing domain: ${error}`);
  }
}

export async function countPhishingDomains(): Promise<number> {
  try {
    await initializePhishingDomains();
    if (cachedDomains) {
      const { domains } = cachedDomains;
      return domains.length;
    } else {
      throw new Error("Phishing domains have not been initialized.");
    }
  } catch (error) {
    throw new Error(`Failed to get the count of phishing domains: ${error}`);
  }
}
