import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';



class Terceros extends Page {

    get Transferir() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]")}
    get Terceros() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]")}
    get selecciona(){return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona tu cuenta' or . = 'Selecciona tu cuenta')]")}

    get selectacc(){return $("//*[@class = 'android.widget.TextView' and (@text = 'Cuentacorriente1' or . = 'Cuentacorriente1')]")}
//get selectacc1() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Corriente' or . = 'Corriente')]")}
    get selectbenifi() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
    get selectRDacc() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Campeonato LICIMADI' or . = 'Campeonato LICIMADI')]")}
    get entervalue() {return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]")}
    get descriptions() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}
    get continue() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]")}
    get SiTransferiri() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Sí, transferir' or . = 'Sí, transferir')]")}
    get tocken() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}
    get valider() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Validar Token Popular' or . = 'Validar Token Popular')]")}
    get continuar() {return $("//*[@class = 'android.widget.Button' and (@text = 'Continuar' or . = 'Continuar') and @resource-id = 'com.popular.app.android:id/btnNonToken']")}
    get errmsg() {return $("//*[@class = 'android.widget.TextView' and (@text = 'De acuerdo' or . = 'De acuerdo')]")}
    
///////////////////////////////////////////
get selectUSD() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Movimientos Usd' or . = 'Movimientos Usd')]")}
get selectionaun() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
get selectUSDacco() { return $("//*[@class = 'android.widget.TextView' and (@text = 'SR IGOR THEN QUIROZ' or . = 'SR IGOR THEN QUIROZ')]")}
public get dummy() {
    return $("//*[@class = 'android.widget.TextView' and (@text = 'AAvelinoDontDelete' or . = 'AAvelinoDontDelete')]");
   }
get USD() { return $("//*[@class = 'android.widget.EditText' and (@text = 'US$' or . = 'US$')]")}   
get descriptionsUSD() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}
get continueUSD() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]")}
get SiTransfeririUSD() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Sí, transferir' or . = 'Sí, transferir')]")}
get tockenUSD() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}




    async TransferirButton() {
        await this.Transferir.click();
    }

    async TercerosButton() {
        await this.Terceros.click();
    }
    async seleccionaButton() {
        await this.selecciona.click();
       await this.selectacc.waitForDisplayed({timeout:30000});
    }
    async SelectAccount() {
        await this.selectacc.click();
    //await this.selectbenifi.waitForDisplayed({timeout:3000});
    }
    async selectbenificiary() {
        await this.selectbenifi.click();
       // await this.selectRDAcco.waitForDisplayed({timeout:3000});
       await this.selectRDacc.waitForDisplayed({timeout:30000});
        await this.selectRDacc.click();
    }
    // async selectRDAcco() {
    //     await this.selectRDacc.click();
    // }

    async EnterAmount() {
        await this.entervalue.click();
        await this.entervalue.setValue("1");
       // await this.continue.waitForDisplayed({timeout:3000});
    }
    async EnterDiscription() {
        //await this.descriptions.click();
        await this.descriptions.waitForDisplayed({timeout:3000});
        await this.descriptions.setValue("Testing");
        browser.execute('mobile: performEditorAction', { action: 'done' });

    }
    async clickonContinue() {
        await driver.back();
       // await this.continue.click();
    }
//     async SitransfeririButton() {
//       await  this.SiTransferiri.waitForDisplayed({timeout:60000})
       
    
//        await this.errmsg.click();
//         await this.SiTransferiri.click();
//         await this.tocken.waitForDisplayed({timeout:60000});
        
        
//     }
//     async EnterToken() {

//         await this.tocken.setValue("321321");
//         await this.valider.waitForDisplayed({timeout:50000});
//         await this.valider.click();
//         await this.continuar.waitForDisplayed({timeout:6000});
//         await this.continuar.click();
//       // await this.Transferir.waitForDisplayed({timeout:60000});



// }
    async transferirButton1() {
        await this.Transferir.click();
    }

    async TercerosButton1() {
        await this.Terceros.click();
    }
    async seleccionaButton1() {
        await this.selecciona.click();
        await this.selectacc.waitForDisplayed({timeout:3000});
    }
//////////////////////////
    
async selectUSDacc() {
    await this.selectUSD.click();
   // await this.selectionaun.waitForDisplayed({timeout:3000});
}

async USDAcc() {
    await this.selectionaun.click();
    await this.dummy.waitForDisplayed({ timeout:50000 });
   // await this.selectUSDacco.waitForDisplayed({timeout:30000});
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("QUIROZ")');
    await this.selectUSDacco.click();
}
async EnterUSD() {
    await this.USD.waitForDisplayed({timeout:3000});
    await this.USD.setValue("1");
}

// async EnterDiscriptionUSD() {
//     //await this.descriptions.click();
//     //await this.descriptions.waitForDisplayed({timeout:3000});
//     await this.descriptions.setValue("Testing");
//     browser.execute('mobile: performEditorAction', { action1: 'done' });

// }

// async clickonContinueUSD() {
//     await this.continue.click();
// }
// async SitransfeririButtonUSD() {
//     await this.SiTransferiri.waitForDisplayed({timeout:6000});
//     await this.SiTransferiri.click();
//     await this.tocken.waitForDisplayed({timeout:3000});
//     //browser.pause(3000);
    
// }




}
export default new Terceros();