import LoginPage from '../pages/login.page';


export function logIn() {
  LoginPage.go();
  LoginPage.waitForLoad();
  LoginPage.email.setValue('admin@email.diq');
  LoginPage.password.setValue('20AltaSigma16');
  LoginPage.clickOnSubmit();
}

export function logOut() {
  browser.deleteCookie('datadash');
  browser.deleteCookie('datadash_session');
  browser.url('/');
}
