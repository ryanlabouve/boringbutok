import Ember from 'ember';

export default Ember.Component.extend({
  allSets: Ember.computed('lift', function() {
    return [
      {
        vol: '70%',
        sets: 5,
        reps: 5,
        weight: this.get('lift.tm') * 0.7
      },
    ]
  }),
  totalWeight: Ember.computed('allSets', function() {
    return this.get('allSets').reduce(function(previous, current) {
      const weight = Ember.get(current, 'weight');
      const sets = Ember.get(current, 'sets');
      const reps = Ember.get(current, 'reps');
      return previous + weight * reps * sets;
    }, 0);
  })
});
