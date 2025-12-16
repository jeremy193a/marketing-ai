const assert = require('assert');
const { loadState, toggleMilestone, setMilestone } = require('../milestoneState');

function createStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    }
  };
}

const STORAGE_KEY = 'test-curriculum';

// RED: expect empty state by default
const storage = createStorage();
assert.deepStrictEqual(loadState(storage, STORAGE_KEY), {});

// toggle should set to true and persist
const firstToggle = toggleMilestone(storage, STORAGE_KEY, 'week-1-reading');
assert.strictEqual(firstToggle.done, true);
assert.deepStrictEqual(loadState(storage, STORAGE_KEY), { 'week-1-reading': true });

// toggle again should flip to false and persist
const secondToggle = toggleMilestone(storage, STORAGE_KEY, 'week-1-reading');
assert.strictEqual(secondToggle.done, false);
assert.deepStrictEqual(loadState(storage, STORAGE_KEY), { 'week-1-reading': false });

// setMilestone should write explicit values without toggling others
setMilestone(storage, STORAGE_KEY, 'week-2-hands-on', true);
assert.deepStrictEqual(loadState(storage, STORAGE_KEY), {
  'week-1-reading': false,
  'week-2-hands-on': true
});

console.log('milestoneState tests passed');
