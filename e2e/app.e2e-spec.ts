import { AngularMaterialUXPage } from './app.po';

describe('angular-material-ux App', () => {
  let page: AngularMaterialUXPage;

  beforeEach(() => {
    page = new AngularMaterialUXPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
