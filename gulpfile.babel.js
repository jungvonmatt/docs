import gulp from 'gulp';
import clean from '~/setup/tasks/clean.js'
import templates from '~/setup/tasks/templates.js'
import icons from '~/setup/tasks/icons.js'
import styles from '~/setup/tasks/styles.js'
import examples from '~/setup/tasks/examples.js'

import settings from '~/setup/settings.js';

// Register all tasks seperately to be able to call them standalone
gulp.task('clean', clean);
gulp.task('templates', templates);
gulp.task('icons', icons);
gulp.task('styles', styles);
gulp.task('examples', examples);

gulp.task('default', gulp.series(clean, templates, icons, styles, examples));

// Use develop to watch files and automatically run corresponding tasks
gulp.task('develop', gulp.series('default', function watch() {
  gulp.watch('frontend/source/j2/**/*', templates);
  gulp.watch('frontend/source/svg/**/*', icons);
  gulp.watch('frontend/source/scss/**/*', styles);
  gulp.watch(settings.examples.src, examples);

  console.log('Watching files for changes ...');
}));
