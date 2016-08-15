import Ember from 'ember';

export default Ember.Controller.extend({
  // Styleguide Color Palette
  // Match Colors from "_variables.scss" or "_settings.scss"
  colorPalette: {
    primary: {
      name: 'Primary',
      base: '#00bcd4',
      light: '#b2ebf2',
      dark: '#0097a7'
    },
    secondary: {
      name: 'Secondary',
      base: '#b6b6b6'
    },
    background: {
      name: 'Background',
      base: '#ffffff'
    }
  }
});
