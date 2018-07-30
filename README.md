# Passwordizer

Passwordizer is a translator of simple text to hard passwords. That makes hard to crack passwords that are easily remembered.

Example:

`mypassword` will be translated as `mYpAS$w0RD` or `MyP@sSw0rd` or `myP@ssw0Rd` etc.

## Installation

`npm install --save passwordizer`

## Usage

Use it inside your script as follows:

```javascript
import passwordizer from "passwordizer";

let password = passwordizer.translate("test") // Will produce 'tesT' or 'tESt' or 'tE$t' etc.
```

## Demo

You can see a demo of passwordizer [here](https://passwordize.com)