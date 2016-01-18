import Ember from 'ember';
import EmberCPM from 'ember-cpm';

const { Macros: { sum, difference, product, asInt }} = EmberCPM;

export default Ember.Component.extend({
  weight: 0,
  reps: 0,
  oneRm: sum(
    product(asInt('weight'), asInt('reps'), 0.0333),
    asInt('weight')),
  actions: {
    save() {
      this.attrs.save(this.get('oneRm'));
    }
  }
});
