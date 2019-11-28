import LocalStorageService from './LocalStorageService';

describe('LocalStorageService', () => {
  it('should not create multiple LocalStorageService instances', () => {
    const localStorageService = new LocalStorageService();
    const localStorageService2 = new LocalStorageService();

    expect(localStorageService).toBe(localStorageService2);
  });

  it('should set primitive value in localStorage', () => {
    const localStorageService = new LocalStorageService();

    const propName = 'somePropName';
    const value = 'someStringValue';

    localStorageService.setItem(propName, value);
    expect(localStorageService.getItem(propName)).toBe(value);
  });

  it('should set object value in localStorage', () => {
    const localStorageService = new LocalStorageService();

    const propName = 'someAnotherPropName';
    const value = { prop: 'test' };

    localStorageService.setItem(propName, value);
    expect(localStorageService.getItem(propName)).toEqual(value);
  });
});
