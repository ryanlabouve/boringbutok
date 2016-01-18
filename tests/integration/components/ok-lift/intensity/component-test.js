import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ok-lift/intensity', 'Integration | Component | ok lift/intensity', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ok-lift/intensity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ok-lift/intensity}}
      template block text
    {{/ok-lift/intensity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
