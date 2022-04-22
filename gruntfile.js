var grunt = require('grunt');
var glob = require('glob');
grunt.loadNpmTasks('grunt-purifycss');

var cssUkSource = glob.sync('./dist/till-tomorrow/uk/styles.*.css').toString();
var cssEnSource = glob.sync('./dist/till-tomorrow/en/styles.*.css').toString();
var cssRuSource = glob.sync('./dist/till-tomorrow/ru/styles.*.css').toString();

grunt.initConfig({
	purifycss: {
		options: {
			info: true,
			minify: true,
			rejected: false, // Logs the CSS rules that were removed
			whitelist: ['*transition*', '*dimmer*']
		},
		uk: {
			cwd: '.',
			src: ['./src/app/**/*.ts', './src/app/**/*.html'],
			css: [cssUkSource],
			dest: cssUkSource
		},
		en: {
			cwd: '.',
			src: ['./src/app/**/*.ts', './src/app/**/*.html'],
			css: [cssEnSource],
			dest: cssEnSource
		},
		ru: {
			cwd: '.',
			src: ['./src/app/**/*.ts', './src/app/**/*.html'],
			css: [cssRuSource],
			dest: cssRuSource
		}
	}
});
