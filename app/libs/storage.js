const storage = store => ({
  get(key) {
    try {
      return JSON.parse(store.getItem(key));
    } catch (event) {
      return null;
    }
  },
  set(key, value) {
    store.setItem(key, JSON.stringify(value));
  }
});

export default storage;
