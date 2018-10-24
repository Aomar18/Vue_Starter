new Vue({
    el: '#vue-app',
    data: {
        message: '',
        Name: '',
        github: "https://github.com/Aomar18",
        webTag: '<a href="https://github.com/Aomar18">Ahmeds Github</a>'
    },
    methods: {
        greet:function(time){
            return 'Good ' + time
         }
    }
})