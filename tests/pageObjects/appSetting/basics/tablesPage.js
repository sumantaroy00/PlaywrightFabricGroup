
class TablesPages {
  constructor(page) {
    this.page = page;
    this.cancelBtn = page.getByText('dialogCancelButton');
    this.crossIcon = page.getByTestId('dialog-close-button');
    this.recommendationLink = page.locator('[data-test-id="recommendationsButton"]');
    this.documentLink = page.getByRole('button', { name: 'Documents', exact: true });
    this.tableDescriptionTxt = page.locator('[data-test-id="TableDescription"]');
    this.closeBtn = page.locator('[data-test-id="dialogOkButton"]');
    this.fieldCrossIcon = page.locator('[data-test-id="dialog-close-button"]');

  }

  async clickCancelBtn(){
   await this.cancelBtn.waitFor();
   await this.cancelBtn.click();

  }

   async clickCrossIcon(){
   await this.crossIcon.waitFor();
   await this.crossIcon.click();

  }

  async fillTableForm(){
    await this.recommendationLink.waitFor();
    await this.recommendationLink.click();
    await this.documentLink.click();
    await this.tableDescriptionTxt.click();
    await this.tableDescriptionTxt.fill("Testing");

  }
}
export default TablesPages;
