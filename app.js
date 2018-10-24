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
        add:function(){
            this.age++;
        },
        subtract:function(){
            this.age--;
        },
        greet:function(time){
            return 'Good ' + time
         }
         
    }
})