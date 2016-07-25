const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');
const nodemon = require('gulp-nodemon');

function handleErrors() {
  const args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>',
  }).apply(this, args);
  // console.log('Compile error: ', args);
  this.emit('end'); // keeps gulp from hanging on this task
}

function buildScript(file, watch) {
  const props = {
    entries: ['./components/' + file],
    debug: true,
    transform: babelify.configure({
      presets: ['react', 'es2015'],
    }),
  };

  //watchify if watch set to true. otherwise browserify once
  const bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle(){
    const stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build/'));
  }

  bundler.on('update', () => {
    const updateStart = Date.now();
    rebundle();
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

// run once
gulp.task('scripts', () => {
  return buildScript('App.js', false);
});

// run nodemon
gulp.task('start', () => {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
  });
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts', 'start'], () => {
  return buildScript('App.js', true);
});
