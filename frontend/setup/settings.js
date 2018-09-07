/**
 * These settings are meant to define sensible defaults for each of the tasks
 * defined inside ~setup/tasks/. This pattern provides the ability to easily
 * change settings based on environments and flags.
 * @type {Object}
 */
const settings = {
    'styles': {
        'src': 'source/scss/bundles/*.scss',
        'dest': [
            '../grav/user/themes/amp-dev/css',
        ],
        'options': {
            'outputStyle': 'compact'
        }
    },
    'templates': {
      'src': 'source/twig/**/*.twig',
      'dest': '../grav/user/themes/amp-dev/templates'
    },
    'icons': {
      'src': 'source/svg/icons/**/*.svg',
      'dest': '../grav/user/themes/amp-dev/icons'
    }
};

// TODO: Maybe overwrite settings for other environments.

export default settings;
