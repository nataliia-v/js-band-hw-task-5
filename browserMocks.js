const localStorageMock = (() => {
  let store = {};

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value;
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});