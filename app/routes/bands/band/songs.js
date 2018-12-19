import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');

      document.title = `${band.name} songs - Rock & Roll`;
    },
  },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },
});
