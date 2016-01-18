import Ember from 'ember';
import DS from 'ember-data';
import EmberCPM from 'ember-cpm';

const { Macros: { sum, difference, product }} = EmberCPM;

export default DS.Model.extend({
  name: DS.attr('string'),
  repMax: DS.attr('number'),
  rm: Ember.computed.alias('repMax'),
  trainingMax: product('rm', 0.85),
  tm: Ember.computed.alias('trainingMax'),

  weeklyAdjustmnet: DS.attr('number')
});
