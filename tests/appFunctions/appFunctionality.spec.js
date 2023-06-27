import { test, expect } from '@playwright/test';
import { AppFunctionalityPage } from '../../pages/appFunctionalityPage'

test('Navigate to the herokuapp website and verify the functinality of check box', async ({ page }) => {

  const AppFunctionalityPg = new AppFunctionalityPage(page);

  //Call navigateToTheUrl function
  await AppFunctionalityPg.navigateToTheUrl()
  //call checkboxfunctianlity function
  await AppFunctionalityPg.checkboxfunctianlity()

});

test('Navigate to the herokuapp website and verify the functionality of Inputs', async ({ page }) => {

  const AppFunctionalityPg = new AppFunctionalityPage(page);
  //Call navigateToTheUrl function
  await AppFunctionalityPg.navigateToTheUrl()
  //call checkboxfunctianlity function
  await AppFunctionalityPg.inputfunctianlity('2')

});

test('Navigate to the herokuapp website and verify the text in A/B testing', async ({ page }) => {

  const AppFunctionalityPg = new AppFunctionalityPage(page);
  //Call navigateToTheUrl function
  await AppFunctionalityPg.navigateToTheUrl()
  //Get text from verifyTextContentinAbTesingfunctianlity
  const text = await AppFunctionalityPg.verifyTextContentinAbTesingfunctianlity()

  //Assert the header text contains A/B
  expect(text.includes("A/B")).toBeTruthy()
  
});

test('Navigate to the herokuapp website and verify Add/Remove Elements functionality', async ({ page }) => {

  const AppFunctionalityPg = new AppFunctionalityPage(page);
  //Call navigateToTheUrl function
  await AppFunctionalityPg.navigateToTheUrl()
  //Call verifyAddRemoveButtonfunctianlity function
  await AppFunctionalityPg.verifyAddRemoveButtonfunctianlity()

});

test('Navigate to the herokuapp website and verify the functionality of dropdown', async ({ page }) => {

  const AppFunctionalityPg = new AppFunctionalityPage(page);
  //Call navigateToTheUrl function
  await AppFunctionalityPg.navigateToTheUrl()
  //Call verifyDropdownfunctianlity function
  await AppFunctionalityPg.verifyDropdownfunctianlity()

});