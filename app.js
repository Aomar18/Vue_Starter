new Vue({
    el: '#vue-app',
    data: {
        message: '',
        Name: 'Ahmed',
        age: 26,
        github: "https://github.com/Aomar18",
        webTag: '<a href="https://github.com/Aomar18">Ahmeds Github</a>'
    },
    methods: {
        add:function(inc){
            this.age+=inc;
        },
        subtract:function(dec){
            this.age-=dec;
        },
        greet:function(time){
            return 'Good ' + time
         }
         
    }
})