# BankBuddy 💳 ![Version](https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge)


A modern banking web application to manage accounts, view transaction history, transfer funds, and connect to financial services securely and efficiently.

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Usage](#usage)


---

## **Overview**

**BankBuddy** is a secure and user-friendly web application for managing personal finances. Built with modern web technologies, it allows users to sign up, log in, connect bank accounts, transfer funds, and track their transactions in a sleek and responsive UI.

---

## **Features**

- **Authentication**: Secure sign-in/sign-up system.
- **Bank Integration**: Add and manage multiple bank accounts.
- **Transaction History**: View detailed transaction history with filtering and categorization.
- **Fund Transfer**: Transfer money between accounts.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Error Handling**: User-friendly error messages for common issues like invalid credentials or duplicate accounts.

---

## **Technologies Used**

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Next.js
- **Database**:
  - Appwrite
- **API Integration**:
  - Dwolla API for bank transfers
  - Plaid API for bank account linking
- **Other**:
  - Zod for form validation
  - ESLint and Prettier for code formatting and linting

---

## **Installation**

### **Prerequisites**

- **Node.js**: Ensure you have Node.js installed on your system.
- **Git**: Clone the repository using Git.
- **Environment Variables**: See the [Environment Variables](#environment-variables) section.

### **Steps**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alexPalladis/bankingApp.git
   cd bankbuddy
   ```

2.  **Install dependencies**:
    ```bash
    npm install
     ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  **Access the application**:
    Open your browser and navigate to
    ```bash
    http://localhost:3000
    ```
---

## **Environment Variables**

Create a **.env** file in the root directory and provide the following environment variables:


NEXT_PUBLIC_SITE_URL=

#APPWRITE

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1

NEXT_PUBLIC_APPWRITE_PROJECT=

APPWRITE_DATABASE_ID=

APPWRITE_USER_COLLECTION_ID=

APPWRITE_BANK_COLLECTION_ID=

APPWRITE_TRANSACTION_COLLECTION_ID=

NEXT_APPWRITE_KEY=


#PLAID

PLAID_CLIENT_ID=

PLAID_SECRET=

PLAID_ENV=sandbox

PLAID_PRODUCTS=auth,transactions,identity

PLAID_COUNTRY_CODES=US,CA


#DWOLLA

DWOLLA_KEY=

DWOLLA_SECRET=

DWOLLA_BASE_URL=https://api-sandbox.dwolla.com

DWOLLA_ENV=sandbox

**Fill these placeholders with actual values from your service providers.**

---

## **Usage**

1.**Sign Up/Login**: Create an account or log in with your credentials.

2.**Connect a Bank**: Use Plaid to securely connect your bank account.

3.**View Transactions**: Explore your transaction history, categorized by type.

4.**Transfer Funds**: Easily transfer money between connected accounts.



