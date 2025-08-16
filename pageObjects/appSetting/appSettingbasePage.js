// pages/AppSettingsPage.js';

 class AppSettingsPage {


  constructor(page) {
    this.page = page;
    this.appSettingLink = page.getByText('App settings');
    this.tablesLink = page.getByRole('link', { name: 'Tables (2)' });
    this.tableNewBtn = page.getByRole('button', { name: '+ New Table' });
    this.fromScratchDesignbtn = page.getByRole('link', { name: 'From scratch Design your own' });

  }

  async goToTables() {

    await this.appSettingLink.waitFor();
    await this.appSettingLink.click();
   // await this.tablesLink.waitFor({ state: 'visible', timeout: 60000 });
    await this.tablesLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickOnNewTable(){
    await this.tableNewBtn.waitFor();
    await this.tableNewBtn.click();
    await this.fromScratchDesignbtn.waitFor();
    await this.fromScratchDesignbtn.click();

  }

}
 export default AppSettingsPage;
