module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['js/jquery-animate.js']
		},
		concat: {
			css: {
                src: [
                    'css/*'
                ],
                dest: 'combined.css'
            },
	        js : {
	            src : [
	                'js/*'
	            ],
	            dest : 'js/combined.js'
	        }
	    },
		uglify: {
			options: {
				banner: '/* == Foi assim mesmo == */'
			},
			js: {
				files: {
					'js/combined.min.js': ['js/combined.js']
				}
			}
		},
		cssmin: {
			css: {
				src: 'css/style.css',
				dest: 'css/style.min.css'
			}
		}
	};
 
	grunt.initConfig(gruntConfig);
 
	// carregando plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// tarefas
	grunt.registerTask('default', ['jshint', 'concat:js','uglify:js', 'cssmin:css']);
};