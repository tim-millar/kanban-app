function persist(alt, storage, storageName) {
  try {
    alt.bootstrap(storage.get(storageName));
  } catch (err) {
    console.log('Failed to bootstrap data', err);
  }

  alt.FinalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });
}

export default persist;
