import { expect } from "@playwright/test";

class ApiUtils {
  constructor(request, baseUrl) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  async findTransactionsByAmount(accountId, amount,payload,username,password) {

        const response = await this.request.post(
            `${this.baseUrl}/services_proxy/bank/billpay`, {
            params: { accountId, amount },
            headers: {
                "Content-Type": "application/json",
                 // eslint-disable-next-line no-undef
                 "Authorization": "Basic " + Buffer.from(`${username}:${password}`).toString("base64")

            },
            data: payload   // this is the JSON body for the POST
            }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log(body);
    
    return body;
  }

  validateTransaction(transaction, expected) {
    expect(transaction.amount).toBe(expected.amount);
    expect(Number(transaction.accountId)).toBe(Number(expected.newAccountNumber));

  }
}


export default ApiUtils;
