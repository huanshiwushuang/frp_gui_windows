require.config({//第一块，配置
    baseUrl: './js',
    paths: {
        underscore: 'lib/underscore'
    },
    shim: {
        underscore: {
            // deps: [],
            exports: '_'
        }
    }
});
