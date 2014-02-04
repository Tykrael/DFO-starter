module.exports = function(grunt){

	/*grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');*/

	// permet de se passer de grunt.loadNpmTasks('ma tache')
	// suffit d'installer le module
	//https://github.com/sindresorhus/load-grunt-tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration
	grunt.initConfig({

/******JAVASCRIPT TASK******/
		// ATTENTION AVEC ANGULAR IL FAUT RESPECTER UN ORDRE PARTICULIER 
		uglify: {
			options:{
				mangle:false
			},
			dist: {
				files: {
					'dist/js/libs.js': ['js/libs.js'],
					'dist/js/libs-touch.js': ['js/libs-touch.js'],
					'dist/js/main.js': ['js/main.js'],
					'dist/js/main-touch.js': ['js/main-touch.js']
				}
			}
		},

/******CSS TASKS******/
		// ATTENTION AVEC ANGULAR IL FAUT RESPECTER UN ORDRE PARTICULIER 
		cssmin: {
			combine: {
				files: {
					'dist/css/style.css': ['css/*.css'],
				}
			},	
		},
/***** IMG MIN ******/
		imagemin: {                          // Task
			 dynamic: {                         // Another target
		      files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: 'img/',                   // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		        dest: 'img'                  // Destination path prefix
		      }]
		    }
		},

/*****WATCH TASK******/
		watch:{
			js:{
				files:['js/**/*.js'],
				tasks: ['uglify'],
				options :{spawn : false}
			},
			css:{
				files:['css/**/*.css'],
				tasks: ['cssmin'],
				options :{spawn : false}
			}
		}
		
	});

// registerTask va lister les taches a effectuer via la commande: grunt 
	grunt.registerTask('default', ['uglify', 'cssmin','imagemin'])

}