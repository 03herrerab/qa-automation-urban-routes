module.exports = {
    
    // Inputs 
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '//input[@id="number"]',
    cardCodeField:'//div[@class="card-code-input"]//input[@id="code"]',
    messageField:"//input[@id='comment']",
    
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: '//div[starts-with(text(), "Supportive")]',
    paymentMethodButton: '//div[@class="pp-text"]',
    addCardButton:'//div[contains(text(),"Add card")]',
    linkCardButton:"//button[normalize-space()='Link']",
    cardAddedButton:"//div[@class='pp-title'][normalize-space()='Card']",
    bAndHButton:"//div[@class='workflow']//div[1]//div[1]//div[2]//div[1]//span[1]",
    addIcecream:"//div[@class='r-group']//div[1]//div[1]//div[2]//div[1]//div[3]",
    verifyIcecream:"//div[@class='r-group']//div[1]//div[1]//div[2]//div[1]//div[2]",
    orderButton:"//button[@class='smart-button']",
    
    // Modals
    phoneNumberModal: '.modal',
    supportiveOption: '//div[normalize-space()="Ice cream"]',
    orderModal: "//div[@class='order-subbody']",
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCardDetails: async function(number, cvv) {
        const cardNumber = await $(this.cardNumberField);
        await cardNumber.setValue(number);
        const cardCode = await $(this.cardCodeField);
        await cardCode.setValue(cvv);
    },
    leaveAMessage: async function (note) {
        const message = await $(this.messageField);
        await message.setValue(note);
    }
    
};