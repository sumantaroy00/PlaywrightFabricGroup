// pages/AppSettingsPage.js';
import { expect } from '@playwright/test';


class AppSettingsPage {


  constructor(page) {
    this.page = page;
    this.appSettingLink = page.getByText('App settings');
    this.tablesLink = page.getByRole('link', { name: /^Tables/ });
    this.tableNewBtn = page.getByRole('button', { name: '+ New Table' });
    this.fromScratchDesignbtn = page.getByRole('link', { name: 'From scratch Design your own' });
    this.tableList = page.locator("//*[@data-test-id='tables-list-item']");

  }

  async goToTables() {

    await this.appSettingLink.waitFor();
    await this.appSettingLink.click();
    await expect(this.page).toHaveURL(/appsettingshome/); 
    await this.tablesLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickOnNewTable(){
    await this.tableNewBtn.waitFor();
    await this.tableNewBtn.click();
    await this.fromScratchDesignbtn.waitFor();
    await this.fromScratchDesignbtn.click();

  }

     // Method to count tables
  async getTablesCount(){
    const tables = this.tableList;
    const count = await tables.count();
    console.log(`Total tables found: ${count}`);
    return count;
  }

  // Method to get all table names (optional)
  async getTableNames() {
    const tables = this.tableList;
    const names= [];
    const count = await tables.count();
    for (let i = 0; i < count; i++) {
      names.push(await tables.nth(i).innerText());
    }
    console.log("Table Names: ", names);
    return names;              
  
  }

}
 export default AppSettingsPage;
