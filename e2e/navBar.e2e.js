const LoginPage = require('./pages/login.page');
const logOut = require('./preparations/logout');
const logIn = require('./preparations/login');
const NavBar = require('./pages/navBar.page');
const NotesPage = require('./pages/notes.page');
const GraphPage = require('./pages/graph.page');
const AboutPage = require('./pages/about.page');


jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Navigation bar', () => {
  beforeEach(() => {
    logIn();
  });

  afterEach(() => {
    logOut();
  });

  it('should be able to logout', () => {
    NavBar.logOutButton.click();
    LoginPage.waitForLoad();

    const actual = LoginPage.isOpen();

    expect(actual).toEqual(true);
  });

  it('should be able to open notes page', () => {
    NavBar.notesTab.click();
    NotesPage.waitForLoad();

    const actual = NotesPage.isOpen();

    expect(actual).toEqual(true);
  });

  it('should be able to open graph page', () => {
    NavBar.graphTab.click();
    GraphPage.waitForLoad();

    const actual = GraphPage.isOpen();

    expect(actual).toEqual(true);
  });

  it('should be able to open about page', () => {
    NavBar.aboutTab.click();
    AboutPage.waitForLoad();

    const actual = AboutPage.isOpen();

    expect(actual).toEqual(true);
  });
});
