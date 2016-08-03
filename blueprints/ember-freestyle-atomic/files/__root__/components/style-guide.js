import Ember from 'ember';

export default Ember.Component.extend({
  colorPalette: {
    primary: {
      name: 'cyan',
      description: 'something toply cyanish',
      base: '#00bcd4',
      light: '#b2ebf2',
      dark: '#0097a7'
    },
    accent: {
      name: 'amber',
      base: '#ffc107'
    },
    secondary: {
      name: 'greyish',
      base: '#b6b6b6'
    },
    foreground: {
      name: 'blackish',
      base: '#212121',
      light: '#727272'
    },
    background: {
      name: 'white',
      base: '#ffffff'
    }
  }
});
