import { test, expect } from '@playwright/test';
import { FirstProjectPage } from '../../pages/firstProjectPage'

 test('Navigate to the herokuapp website and verify the functinality of check box', async ({ page }) => {

  const firstProjPage = new FirstProjectPage(page);
  //Call navigateToTheUrl function
  await firstProjPage.navigateToTheUrl()
  //call checkboxfunctianlity function
  await firstProjPage.checkboxfunctianlity()

});

test('Navigate to the herokuapp website and verify the functionality of Inputs', async ({ page }) => {

  const firstProjPage = new FirstProjectPage(page);
  //Call navigateToTheUrl function
  await firstProjPage.navigateToTheUrl()
  //call checkboxfunctianlity function
  await firstProjPage.inputfunctianlity('2')

});

test('Navigate to the herokuapp website and verify the text in A/B testing', async ({ page }) => {

  const firstProjPage = new FirstProjectPage(page);
  //Call navigateToTheUrl function
  await firstProjPage.navigateToTheUrl()
  //Get text from verifyTextContentinAbTesingfunctianlity
  const ss = await firstProjPage.verifyTextContentinAbTesingfunctianlity()

  //Assert the header text contains A/B
    expect(ss.includes("A/B")).toBeTruthy()
});

test('Navigate to the herokuapp website and verify Add/Remove Elements functionality', async ({ page }) => {

  const firstProjPage = new FirstProjectPage(page);
  //Call navigateToTheUrl function
  await firstProjPage.navigateToTheUrl()
  //Call verifyAddRemoveButtonfunctianlity function
  await firstProjPage.verifyAddRemoveButtonfunctianlity()

});

test('Navigate to the herokuapp website and verify the functionality of dropdown', async ({ page }) => {

  const firstProjPage = new FirstProjectPage(page);
  //Call navigateToTheUrl function
  await firstProjPage.navigateToTheUrl()
  //Call verifyDropdownfunctianlity function
  await firstProjPage.verifyDropdownfunctianlity()

});