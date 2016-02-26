module.exports = function(grunt) {

	grunt.registerTask('build', ['clean','copy:built','concat:lib','concat:app', 'uglify']);
	grunt.registerTask('serve', ['clean','copy:lib','copy:dev','connect:standalone']);
	grunt.registerTask('serve_built', ['build','connect:standalone']);
	grunt.registerTask('unit', ['clean', 'karma']);
	grunt.registerTask('e2e', ['build', 'connect:e2e', 'protractor'])																																																							;
	grunt.registerTask('e2e_coverage', ['clean','copy:lib','copy:e2e','instrument','connect:e2e_coverage','protractor_coverage','makeReport'])																																																							;
	
	grunt.initConfig({
		
		clean: ["dist/", "instrumented/", "coverage/"],
		concat: {
		    options: {
		      	separator: ';',
		    },
		    lib: {
		      	src: ['node_modules/angular/angular.min.js', 'node_modules/angular-mocks/angular-mocks.js', 'node_modules/angular-route/angular-route.min.js'],
		      	dest: 'dist/resources/lib/dep.js',
		    },
		    app: {
		      	src: ['src/main/webapp/resources/js/*.js'],
		      	dest: 'dist/resources/js/built.js',
		    }
		},
		uglify: {
		    src: {
		    	files: {
		    		'dist/resources/js/built.js': ['dist/resources/js/built.js']
		    	}
		    }
		},
		copy: {
			lib: {
			    files: [
			      {
			      	src: 'node_modules/angular/angular.js', 
			      	dest: 'src/main/webapp/resources/lib/angular/angular.js'
			      },
			      {
			      	src: 'node_modules/angular-mocks/angular-mocks.js', 
			      	dest: 'src/main/webapp/resources/lib/angular-mocks/angular-mocks.js'
			      },
			      {
			      	src: 'node_modules/angular-route/angular-route.js', 
			      	dest: 'src/main/webapp/resources/lib/angular-route/angular-route.js'
			      }
			    ]
			},
			built: {
			    files: [			      
			      {
			      	expand: true,
			      	cwd: 'src/main/webapp/resources/partials',
			      	src:'**',
			      	dest: 'dist/resources/partials'
			      },
			      {
			      	src: 'src/main/webapp/index_built.html', 
			      	dest: 'dist/index.html'
			      }
			    ]
			},
			dev: {
			    files: [
			      {
			      	expand: true,
			      	cwd: 'src/main/webapp/resources',
			      	src:'**',
			      	dest: 'dist/resources'
			      },
			      {
			      	src: 'src/main/webapp/index.html', 
			      	dest: 'dist/index.html'
			      }
			    ]
			},
			e2e: {
			    files: [
			      {
			      	expand: true,
			      	cwd: 'src/main/webapp/resources',
			      	src:'**',
			      	dest: 'instrumented/resources'
			      },
			      {
			      	src: 'src/main/webapp/index.html', 
			      	dest: 'instrumented/index.html'
			      }
			    ]
			}
		},
		karma: {
		  	unit: {
		    	configFile: 'karma.conf.js'
		  	}
		},
		protractor: {
    		options: {
      			configFile: "protractor.conf.js",
      			noColor: false,
      			args: {
      				baseUrl: 'http://localhost:9001'
      			}
    		},
    		all: {}
    	},
	  	instrument: {
	        files: '**/*.js',
	        options: {
	        	cwd:'src/main/webapp/resources/js',
	            basePath: 'instrumented/resources/js'

	        }
	    
    	},
    	protractor_coverage: {
	        options: {
	        	configFile: 'protractor.conf.js',
	            coverageDir: 'coverage/e2e',
            	seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar'
	        },
	        chrome: {
			    options: {
			      args: {
			        baseUrl: 'http://localhost:9001',
			        'browser': 'chrome'
			      	}
				}
			}
	    },
	    makeReport: {
	        src: 'coverage/e2e/*.json',
	        options: {
	            type: 'lcov',
	            dir: 'coverage/e2e',
	            print: 'detail'
	        }
	    },
	    connect: {
		    e2e: {
			   	options: {
			        port: 9001,
			        base: 'dist'
			    }
			},
			e2e_coverage: {
			   	options: {
			        port: 9001,
			        base: 'instrumented'
			    }
			},
			standalone: {
			   	options: {
			        port: 9001,
			        base: 'dist',
			        keepalive: true
			    }
			}			    
	 	}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-istanbul');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-coverage');

};