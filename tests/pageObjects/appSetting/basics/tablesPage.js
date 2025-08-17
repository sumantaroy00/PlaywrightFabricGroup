import generateTableName from '../../../../resources/utils/randomGenerator.js';
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
    this.singleRecordTxt = page.locator('[data-test-id="SingleRecordInput"]');
    this.tableNameTxt = page.locator('#react-select-3-input');

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

    const data = generateTableName();
   // console.log(data);
    await this.tableNameTxt.waitFor();
    await this.tableNameTxt.click();
    await this.tableNameTxt.fill(data);
    
    await this.singleRecordTxt.click();
    await this.singleRecordTxt.fill(data);

    await this.tableDescriptionTxt.click();
    await this.tableDescriptionTxt.fill(data);
    await this.fieldCrossIcon.waitFor();
    await this.fieldCrossIcon.click();
  }
}
export default TablesPages;
