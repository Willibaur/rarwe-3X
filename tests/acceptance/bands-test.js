import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('visiting /bands', async function(assert) {
    await visit('/bands');

    assert.equal(currentURL(), '/bands');
  });
});
