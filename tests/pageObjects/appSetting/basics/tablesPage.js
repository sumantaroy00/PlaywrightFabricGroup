
class TablesPages {
  constructor(page) {
    this.page = page;
    this.cancelBtn = page.getByText('dialogCancelButton');
    this.crossIcon = page.getByTestId('dialog-close-button');
  }

  async clickCancelBtn(){
   this.cancelBtn.waitFor({state: 'visible' });
   this.cancelBtn.click();

  }

   async clickCrossIcon(){
   this.crossIcon.waitFor({state: 'visible' });
   this.crossIcon.click();

  }
}

export default TablesPages;
