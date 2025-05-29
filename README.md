# password-checker
A simple JavaScript password checker that rejects passwords that do not comply with NIST password standards based on [NIST Special Publication 800-63B: 5.1.1.2 Memorized Secret Verifiers](https://pages.nist.gov/800-63-3/sp800-63b.html#sec4).

## Running locally
#### Step 1: Clone Repo
```
git clone https://github.com/kenfonseca/password-checker.git
```
#### Step 2: Change Directory to Project Folder
```
cd password-checker
```
#### Step 3: Run File
Ensure Node.js is installed and at the latest version or follow instructions on the [Node.js download page](https://nodejs.org/en/download)
* The Node version used in this project is 'v22.14.0'

Running without a password:
```
node passwordChecker.js
```
Running with a password:
```
node passwordChecker.js mySecurePassword
```
