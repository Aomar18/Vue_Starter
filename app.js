new Vue({
    el: '#vue-app',
    data: {
        message: '',
        Name: ''
    },
    methods: {
        greet:function(time){
            return 'good ' + time
         }
    }
})