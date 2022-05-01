var grunt = require('grunt');
var glob = require('glob-all');

// workaround till (https://github.com/angular/angular-cli/issues/16997)
grunt.registerTask('move-uk', () =>
{
	glob.sync('./dist/till-tomorrow/uk/*').forEach(srcPath =>
	{
		let fileName = srcPath.substring(srcPath.lastIndexOf('/') + 1);
		let destPath = './dist/till-tomorrow/' + fileName;
		grunt.file.copy(srcPath, destPath);
	});
	grunt.file.delete('./dist/till-tomorrow/uk/');
});

grunt.registerTask('default', ['move-uk']);
