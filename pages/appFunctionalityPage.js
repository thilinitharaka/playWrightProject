require("dotenv").config();
exports.AppFunctionalityPage = class AppFunctionalityPage {

    constructor(page) {

        this.page = page
        this.checkbox_link = page.getByRole('link', { name: 'Checkboxes' })
        this.firstCheckbox = page.getByRole('checkbox').first()
        this.secondCheckbox = page.getByRole('checkbox').nth(1)

        this.input_link = page.getByRole('link', { name: 'Inputs' })
        this.input_textbox = page.getByRole('spinbutton')

        this.ABtesting_link = page.getByRole('link', { name: 'A/B Testing' })
        this.ABtext = page.locator("//*[@id='content']/div/h3")

        this.addRemove_link = page.getByRole('link', { name: 'Add/Remove Elements' })
        this.addButton = page.getByRole('button', { name: 'Add Element' })
        this.removeButton = page.getByRole('button', { name: 'Delete' })

        this.dropDown_link = page.getByRole('link', { name: 'Dropdown' })
        this.firstOption = page.locator('#dropdown')
        this.secondOption = page.locator('#dropdown')

    }

    async navigateToTheUrl() {

        //Navigate to the url
        await this.page.goto(process.env.BASE_URL)

    }

    async checkboxfunctianlity() {

        //Click on Checkboxes link
        await this.checkbox_link.click();

        //Check the first check box
        await this.firstCheckbox.check();

        //Check the second check box again
        await this.secondCheckbox.uncheck();

    }

    async inputfunctianlity(number) {

        //Click on Checkboxes link
        await this.input_link.click();

        //Check the first check box
        await this.input_textbox.click();

        //Check the second check box again
        await this.input_textbox.fill(number);

        //Press enter
        await this.input_textbox.press('Enter');

    }

    async verifyTextContentinAbTesingfunctianlity() {

        //Click on A/B Testing link
        await this.ABtesting_link.click();

        //Get the header text
        const text1 = await this.ABtext.textContent();

        //Assert the header text contains A/B
        //expect(text1.includes("A/B")).toBeTruthy()

        return text1

    }

    async verifyAddRemoveButtonfunctianlity() {

        //Click on Add/Remove elements link
        await this.addRemove_link.click();

        //Click on the add button
        await this.addButton.click();

        //Click on the remove button
        await this.removeButton.click();

        //Verify that the delete button is not display in the page
        await this.removeButton.isVisible(false);

    }

    async verifyDropdownfunctianlity() {

        //Click on drop down link
        await this.dropDown_link.click();

        //Click on the first option in the drop down
        await this.firstOption.selectOption('1');

        //Click on the second option in the drop down
        await this.secondOption.selectOption('2');

    }

}