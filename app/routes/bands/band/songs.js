import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from 'rarwe3/helpers/capitalize';

export default Route.extend({
  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      let name = capitalizeWords(band.name);

      document.title = `${name} songs - Rock & Roll`;
    },
  },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },
});
