import { SearchPage } from './search.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let findContent           : SearchPage;
  let title                 : string;
  let selectedSubjects      : string[];

  beforeAll(() => {
    findContent = new SearchPage();
    title = Math.random().toString(36).substring(7);
    selectedSubjects = ["Java", "CSS"];
    findContent.navigateTo();
  });

  beforeEach(() => {
    browser.manage().timeouts().implicitlyWait(5000);
  });

  it('should accept title input', () => {
    findContent.inputTitle(title);
    expect(findContent.getTitleValue()).toEqual(title);
  });

  // only enters values
  it('should accept selected subjects input', () => {
    findContent.enterSelectedSubjects(selectedSubjects);
    // browser.sleep(5000); // to manually check, uncomment.
  });

  it('should select Document radio button', () => {
    findContent.clickDocumentRadio();
    expect(findContent.getCheckedRadioValue()).toEqual('Document');
  });

  it('should select Code radio button', () => {
    findContent.clickCodeRadio();
    expect(findContent.getCheckedRadioValue()).toEqual('Code');
  });

  it('should select All radio button', () => {
    findContent.clickAllRadio();
    expect(findContent.getCheckedRadioValue()).toEqual('All');
  }); 

  it('should click submit button', () => {
    findContent.clickSearchButton();
  });
  

  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
