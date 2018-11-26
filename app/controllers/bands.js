import Controller from '@ember/controller';
import Band from '../models/band';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingBand: false,
  newBandName: '',

  isAddButtonDisabled: empty('neyBandName'),

  actions: {
    addBand() {
      this.toggleProperty('isAddingBand');
    },

    cancelAddBand() {
      this.set('isAddingBand', false);
    },

    saveBand() {
      let newBand = Band.create({ name: this.newBandName });

      this.model.pushObject(newBand);
      this.set('newBandName', '');
    },
  }
});
