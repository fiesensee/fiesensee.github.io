import { IsenwebPage } from './app.po';

describe('isenweb App', function() {
  let page: IsenwebPage;

  beforeEach(() => {
    page = new IsenwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
