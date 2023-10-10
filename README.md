# Stop The Phishing

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Stop The Phishing is a TypeScript npm package that allows you to check if a given string contains phishing URLs and count the number of phishing links within the string. It loads a list of known phishing domains from an external source and checks the input against these domains to detect phishing attempts.

## Installation

You can install Stop Phishing using npm:

```bash
npm install stop-the-phishing
```

# Usage

Here's how you can use the Stop The Phishing package in your TypeScript/JavaScript project:

```ts
import { PhishingChecker } from 'stop-the-phishing';

const checker = new PhishingChecker();
const inputText = 'This is a test string with a phishing link example.com';

if (checker.isPhishing(inputText)) {
  console.log('Contains phishing link');
} else {
  console.log('No phishing link detected');
}

const numberOfPhishingLinks = checker.getNumberOfPhishingLinks(inputText);
console.log(`Number of phishing links: ${numberOfPhishingLinks}`);
```

## API

### `PhishingChecker` Class

`constructor()`

- Initializes a new instance of the `PhishingChecker` class and loads the list of phishing domains.

`isPhishing(input: string): boolean`

- Checks if the given input string contains any phishing URLs.
- Returns true if phishing URLs are found, otherwise false.

`getNumberOfPhishingLinks(input: string): number`

- Counts the number of phishing links in the given input string.
- Returns the count as an integer.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/NotAestheticallyDucko/stop-the-phishing/blob/main/LICENSE) file for details.
