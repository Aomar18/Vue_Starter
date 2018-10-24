new Vue({
    el: '#vue-app',
    data: {
        message: '',
        Name: '',
        github: "https://github.com/Aomar18"
    },
    methods: {
        greet:function(time){
            return 'Good ' + time
         }
    }
})