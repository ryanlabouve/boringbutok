import Ember from 'ember';

export default Ember.Component.extend({
  allSets: Ember.computed('lift', function() {
    return [
      {
        vol: '65%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.65
      },
      {
        vol: '70%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.7
      },
      {
        vol: '75%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.75
      },
      {
        vol: '80%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.8
      },
      {
        vol: '85%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.85
      },
      {
        vol: '90%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.9
      },
      {
        vol: '95%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.95
      },
      {
        vol: '100%+',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 1.0
      },
      {
        vol: '90%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.9
      },
      {
        vol: '80%',
        sets: 1,
        reps: 3,
        weight: this.get('lift.tm') * 0.8
      },
      {
        vol: '70%',
        sets: 1,
        reps: 3,
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
