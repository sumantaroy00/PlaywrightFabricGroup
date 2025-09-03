import { expect } from "@playwright/test";

class ApiUtils {
  constructor(request, baseUrl) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  async findTransactionsByAmount(accountId, amount) {
    const response = await this.request.get(
      `${this.baseUrl}/services/bank/findtrans`, {
        params: { accountId, amount }
      }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    return body;
  }

  validateTransaction(transaction, expected) {
    expect(transaction.amount).toBe(expected.amount);
    expect(transaction.accountId).toBe(expected.accountId);
    if (expected.type) {
      expect(transaction.transactionType).toBe(expected.type);
    }
    if (expected.date) {
      expect(transaction.date).toContain(expected.date); // partial match
    }
    if (expected.description) {
      expect(transaction.description).toBe(expected.description);
    }
  }
}


export default ApiUtils;
