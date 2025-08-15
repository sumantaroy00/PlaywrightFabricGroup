// pages/AppSettingsPage.js';

 class AppSettingsPage {


  constructor(page) {
    this.page = page;
    this.appSettingLink = page.getByText('App settings');
    this.tableNewBtn = page.locator('#newTableMenuButtonAppHome');
    this.fromScratchDesignbtn = page.locator('#btnNewTableAppHome');

  }

  async goToTables() {

    await this.appSettingLink.waitFor();
    await this.appSettingLink.click();

    //await this.page.waitForLoadState('networkidle');
    await this.tableNewBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.tableNewBtn.click();

    await this.fromScratchDesignbtn.waitFor();
    await this.fromScratchDesignbtn.click();
    await this.page.waitForLoadState('networkidle');
  }

}
 export default AppSettingsPage;
