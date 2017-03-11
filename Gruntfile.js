module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: "src/*.js",
            options: {
                configFile: 'conf/eslint.json'
            },
        },
        "babel": {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    "dist/debounce.js": "src/debounce.js",
                    "dist/throttle.js": "src/throttle.js",
                }
            }
        },
        qunit: {
            all: ['tests/**/*.html']
        },
	watch: {
	  scripts: {
	    files: ['src/*.js', 'tests/test.js'],
	    tasks: ['default'],
	    options: {
	      spawn: false,
	    },
	  },
	},
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['eslint', 'babel', 'qunit']);

};
