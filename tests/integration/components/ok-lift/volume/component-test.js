import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ok-lift/volume', 'Integration | Component | ok lift/volume', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ok-lift/volume}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ok-lift/volume}}
      template block text
    {{/ok-lift/volume}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
