module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        less : {
            // 作業のラベルは"dist"にしてみます
            dist : {
                // オプションの指定
                options : {
                    compress : true
                },
                // コンパイルするファイルの指定。左辺には出力先のCSSファイル、右辺には元となるLessファイルへのパス
                files : {
                    "css/style.css" : "css/style.less"
                }
            }
        },

        // ファイル結合の設定
        concat: {
            dist: {
                src: [
                    'js/libs/_jquery.min.js',
                    'js/libs/_jquery.fitvids.min.js',
                    'js/libs/_apollo-js-core.js'
                ],
                dest: 'js/apollo-js.js'
            }
        },

        // ファイル圧縮の設定
        uglify: {
            build: {
                src: 'js/apollo-js.js',
                dest: 'js/apollo-js.min.js'
            },
            options: {
                preserveComments: 'all'
            }
        },

        watch : {

            // ラベルは"less"にしてみます
            less : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "css/*.less"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    "less:dist"
                ]
            },

            scripts : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "js/libs/*.js"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    'concat', 'uglify'
                ]
            }

        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['watch']);

};