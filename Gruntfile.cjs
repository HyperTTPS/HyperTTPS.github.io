module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: '**/*.js',
                    dest: 'dist/js',
                    ext: ".js"
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
                    src: '**/*.css',
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        run: {
            tscompile: { // Compile TypeScript using tsconfig.json
                exec: "npx tsc"
            }
        },
        watch: {
            scss: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass", "cssmin"]
            },
            ts: {
                files: ["src/ts/**/*.ts"],
                tasks: ["run:tscompile", "uglify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-run");
}