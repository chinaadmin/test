module.exports = function (grunt) {
// 项目配置
grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),
// uglify: {
// options: {
// banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
// },
// build: {
// src: 'src/<%=pkg.file %>.js',
// dest: 'dest/<%= pkg.file %>.min.js'
// }
// }
// 先合并再压缩
// concat: {
//      options: {
//        separator: ';'
//      },
//      dist: {
//        src: ['src/zepto.js', 'src/swiper.js'],
//        dest: 'dest/libs.js'
//      }
//    },
// uglify: {
//      build: {
//        src: 'dest/libs.js',
//        dest: 'dest/libs.min.js'
//      }
//    }

//    直接压缩合并了
// uglify: {
//     "my_target": {
//       "files": {
//         'dest/libs.min.js': ['src/zepto.js', 'src/swiper.js']
//       }
//     }
//   }

//   所有js文件打包到另一个文件夹
// uglify: {
//    my_target: {
//      files: [{
//        expand: true,
//        cwd: 'src',
//        src: '**/*.js',
//        dest: 'dest'
//      }]
//    }
//  }
// concat再实践
// concat: {
//   options: {
//     separator: '/*分割*/',
//     banner: '/*测试*/',
//     footer: '/*footer*/'

//   },
//   dist: {
//     src: ['src/zepto.js', 'src/swiper.js'],
//     dest: 'dist/built.js',
//   }
// }

//concat处于不同的文件夹内
// concat: {
//    basic: {
//      src: ['src/zepto.js'],
//      dest: 'dest/basic.js'
//    },
//    extras: {
//      src: ['src/swiper.js'],
//      dest: 'dest/with_extras.js'
//    }
//  }
//  jshint语法js检查
/*jshint: {
options: {
'-W033': true
},
all: ['src/test.js']
}*/
//使用grunt-contrib-requirejs压缩合并js文件(应该是深度的)
/*requirejs: {
      compile: {
        "options": {
          "baseUrl": "./",
          "paths": {
            "$": "src/zepto",
            "_": "src/swiper",
            // "B": "src/backbone",
            "Test": "src/test"
          },
          "include": [
            "$",
            "_",
            // "B",
            "Test"
          ],
          "out": "dest/libs.js"
        }
      }
    }*/
  //cssmin合并样式文件
  /*cssmin: {
      compress: {
        files: {
          'dest/car.min.css': [
          "src/car.css",
          "src/car01.css"
        ]
        }
      }
    }*/
  copy: {
  main: {
    flatten: true,
    expand: true,
    src: 'src/*.js',
    dest: 'dest/'
  }
}
});
// 加载提供"uglify"任务的插件
grunt.loadNpmTasks('grunt-contrib-copy');
// grunt.loadNpmTasks('grunt-contrib-uglify');
// 默认任务
 grunt.registerTask('default', ['copy']);
}