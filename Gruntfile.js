module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['**/*.js', "!**/*.min.js"],
                    dest: 'dist/js',
                    ext: ".min.js"
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: '**/*.scss',
                    dest: 'dist/css',
                    ext: ".css"
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        run: {
            tscompile: { // Compile TypeScript using tsconfig.json
                exec: "npx tsc"
            }
        },
        watch: {
            js: {
                files: ['dist/js/**/*.js', "!dist/js/**/*.min.js"],
                tasks: ["uglify"]
            },
            scss: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass"]
            },
            cssmin: {
                files: ["dist/css/**/*.css", "!dist/css/**/*.min.css"],
                tasks: ["cssmin"]
            },
            ts: {
                files: ["src/ts/**/*.ts"],
                tasks: ["run:tscompile"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-run");
}