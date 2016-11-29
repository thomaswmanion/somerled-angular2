import { SomerledAngular2Page } from './app.po';

describe('somerled-angular2 App', function() {
  let page: SomerledAngular2Page;

  beforeEach(() => {
    page = new SomerledAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
