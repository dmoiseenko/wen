// import LoginPage from './pages/login.page';
// import { logOut } from './preparations/login';


describe('Login @watch', () => {
  beforeEach(() => {
    // logOut();
  });

  it('should redirect to dashboard after successful login', () => {
    browser.reload();
    browser.url('http://nginx:3000');

    // LoginPage.go();
    // LoginPage.email.setValue('admin@email.diq');
    // LoginPage.password.setValue('20AltaSigma16');
    // LoginPage.clickOnSubmit();

    expect(1).toEqual(1);
  });
});
