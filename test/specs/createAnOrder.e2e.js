const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => { 
        
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })
    
    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    
    }) 
        
    it('should Select the Supportive option', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const supportiveVerify = await $(page.supportiveOption);
        await expect(supportiveVerify).toBeExisting();
            
    }) 

    it('should add credit card info', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const payMethod = await $(page.paymentMethodButton);
        await payMethod.waitForDisplayed();        
        await payMethod.click();
        const addCard = await $(page.addCardButton);
        await addCard.waitForDisplayed();
        await addCard.click();
        await page.fillCardDetails('123401104321', '69');
        const linkCard = await $(page.linkCardButton);
        await linkCard.waitForDisplayed();
        await linkCard.click();
        const addedCard = await $(page.addCardButton);
        await expect(addedCard).toBeDisplayed();            
        }) 

        it('should write a message for the driver', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            await page.leaveAMessage('Bring some tequila');
            const messageField = await $(page.messageField);
            const fieldValue = await messageField.getValue();
            await expect(fieldValue).toBe('Bring some tequila');
        }) 

        it('should order a Blanket and handerchiefs', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const supportiveButton = await $(page.supportiveButton);
            await supportiveButton.waitForDisplayed();
            await supportiveButton.click();
            const bAndHButton = await $(page.bAndHButton);
            await bAndHButton.click();
            await expect(bAndHButton).not.toBeChecked();
            //Cannot find the other selector to run expect on     
        }) 
        
         it('should order 2 Ice creams', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const supportiveButton = await $(page.supportiveButton);
            await supportiveButton.waitForDisplayed();
            await supportiveButton.click();  
            const addIcecream = await $(page.addIcecream);
            await addIcecream.click();
            await addIcecream.click();
            const verifyIcecream = await $(page.verifyIcecream);
            const verifyIcecreamTest = await verifyIcecream.getText();
            await expect(Number(verifyIcecreamTest)).toBe(2);
        }) 
        
        it('should display car search modal', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const pressOrder = await $(page.orderButton);
            await pressOrder.click();
            const orderModal = await $(page.orderModal);
            await expect(orderModal).toBeDisplayed();
        })


})

