const {Builder,By,until} = require('selenium-webdriver')

async function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function SeleniumTest() {

    let driver = await new Builder().forBrowser('chrome').build()


    try{
        
        await driver.get("http://localhost:3000/")
        await sleep (2000);
        await driver.manage().window().maximize();

        //Add three Notes
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/input')).sendKeys('My First Note')
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/button')).click()
        await sleep (2000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/input')).sendKeys('My second Note')
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/button')).click()
        await sleep (2000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/input')).sendKeys('My third Note')
        await driver.findElement(By.xpath('//*[@id="root"]/div/form/button')).click()
        await sleep (2000);

        //console.log("Added three Notes")

        //save the Edit a Note
        await driver.findElement(By.className('edit')).click();
        await sleep (2000);
        driver.findElement(By.xpath('//*[@id="root"]/div/ul/li/div/input')).sendKeys(' Edited');
        await sleep (2000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/ul/li/div/button[1]')).click();
        await sleep (2000);

        //console.log("Edited and Saved the first note")

        //cancel the edit of a note
        await driver.findElement(By.className('edit')).click();
        await sleep (2000);
        driver.findElement(By.xpath('//*[@id="root"]/div/ul/li/div/input')).sendKeys(' Edited again with new parameters');
        await sleep (2000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/ul/li/div/button[2]')).click();
        await sleep (2000);

        //console.log("cancelled the further editing of the first note")

        //delete only the second note
        await driver.findElement(By.xpath('//*[@id="root"]/div/ul/li[2]/div[2]/button[2]')).click();
        await sleep (2000);
        //console.log("deleted second note")

        //Search for the Note
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/input')).sendKeys('My First Note Edited');
        await driver.wait(until.elementLocated(By.className('note-content')),5000);
        await sleep (2000);
        //console.log("Searched the edited first note")

        //console.log("********All Login test passed***********")

    } catch(error) {
        console.error("Login test failed", error)
    } finally {
        await driver.quit()
    }



}


SeleniumTest()



