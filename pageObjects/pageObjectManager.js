import AppSetting from './appSetting/appSettingbasePage.js';
import Login from './loginPage.js';
import Tables from './appSetting/basics/tablesPage.js';

class pageObjectManager {
  constructor(page) {
    this.page = page;
    this.appSetting = new AppSetting(this.page);
    this.login = new Login(this.page);
    this.tables = new Tables(this.page);
  }

  async getAppSettingPage() {
    return this.appSetting;
  }

  async getLoginPage(){
    return this.login;
  }

  async getTablesPage(){

    return this.tables;
  }

}

export default pageObjectManager;
