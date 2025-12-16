(function (global) {
  const DEFAULT_STORAGE_KEY = 'curriculum-milestones';

  function getStorage(storage) {
    if (storage) return storage;
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
    throw new Error('A storage implementation is required');
  }

  function loadState(storage, storageKey = DEFAULT_STORAGE_KEY) {
    const store = getStorage(storage);
    const raw = store.getItem(storageKey);
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed !== null ? parsed : {};
    } catch (_) {
      return {};
    }
  }

  function saveState(storage, storageKey, state) {
    const store = getStorage(storage);
    store.setItem(storageKey, JSON.stringify(state));
    return state;
  }

  function setMilestone(storage, storageKey, id, done) {
    const state = loadState(storage, storageKey);
    const updated = { ...state, [id]: !!done };
    saveState(storage, storageKey, updated);
    return { done: !!done, state: updated };
  }

  function toggleMilestone(storage, storageKey, id) {
    const state = loadState(storage, storageKey);
    const next = !state[id];
    const updated = { ...state, [id]: next };
    saveState(storage, storageKey, updated);
    return { done: next, state: updated };
  }

  const api = {
    DEFAULT_STORAGE_KEY,
    loadState,
    setMilestone,
    toggleMilestone
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    global.MilestoneState = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
