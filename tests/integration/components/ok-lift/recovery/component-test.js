import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ok-lift/recovery', 'Integration | Component | ok lift/recovery', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ok-lift/recovery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ok-lift/recovery}}
      template block text
    {{/ok-lift/recovery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
