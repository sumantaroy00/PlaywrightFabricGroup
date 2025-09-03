import { expect } from "@playwright/test";

class ApiUtils {
  constructor(request, baseUrl, username, password) {
    this.request = request;
    this.baseUrl = baseUrl;
    this.username = username;
    this.password = password;
  }

  // 🔹 Helper to get auth header
  _authHeader() {
    return {
      // eslint-disable-next-line no-undef
      "Authorization": "Basic " + Buffer.from(`${this.username}:${this.password}`).toString("base64"),
    };
  }

  // 🔹 Bill Pay API
  async billPay(accountId, amount, payload) {
    const response = await this.request.post(
      `${this.baseUrl}/services_proxy/bank/billpay`,
      {
        params: { accountId, amount },
        headers: {
          "Content-Type": "application/json",
          ...this._authHeader(),
        },
        data: payload, // request body
      }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log("Bill Pay Response:", body);
    return body;
  }

  // 🔹 Validate billPay response
  validateBillPay(transaction, expected) {
    expect(Number(transaction.amount)).toBe(Number(expected.amount));
    expect(String(transaction.accountId)).toBe(String(expected.newAccountNumber));
  }

  // 🔹 Find transactions by amount
  async findTransactionsByAmount(accountId, amount) {
    const response = await this.request.get(
      `${this.baseUrl}/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}?timeout=30000`,
      { headers: this._authHeader() }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log("Transactions by Amount Response:", body);
    return body;
  }

  // 🔹 Validate a transaction from transactions API
  validateTransactionByAmount(transaction, expected) {
    expect(Number(transaction.amount)).toBe(Number(expected.amount));
    expect(String(transaction.accountId)).toBe(String(expected.accountId));
    expect(transaction.description).toBe(expected.description);
    expect(transaction.type).toBe(expected.type);
  }

  // 🔹 Convenience method: BillPay → Fetch Transactions
  async billPayAndFetchTransactions(accountId, amount, payload) {
    const billPayResponse = await this.billPay(accountId, amount, payload);
    const transactions = await this.findTransactionsByAmount(accountId, amount);
    return { billPayResponse, transactions };
  }
}

export default ApiUtils;