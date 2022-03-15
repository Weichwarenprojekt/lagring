describe('test', () => {
    beforeEach(async () => {
        await page.goto(PATH, { waitUntil: 'load' })
    })

    it('should be running puppeteer', async () => {
        const localStorageAvailable = await page.evaluate(() => {
            window.localStorage.setItem("running", true);
            return Promise.resolve(window.localStorage.getItem("running"))
        });
        expect(localStorageAvailable).toBeTruthy();
    });

    it('should have run the lib', async () => {
        const myTestString = await page.evaluate(() => {
            const lagringConnection = new lagring.Connection();
            lagringConnection.testIt();

            return Promise.resolve(window['hello'])
        });

        expect(myTestString).toBe("indexeddb");
    });
});