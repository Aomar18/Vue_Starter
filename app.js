new Vue({
    el: '#vue-app',
    data: {
        message: '',
        Name: 'Ahmed',
        age: 26,
        github: "https://github.com/Aomar18",
        webTag: '<a href="https://github.com/Aomar18/Vue_Starter">My Vue Repo</a>',
        x: 0,
        y: 0,
        number: 20,
        a: 0,
        b: 0,
        dog: '',
        cat: '',
        available: true,
        nearby: false,
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        greet: function (time) {
            return 'Good ' + time
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert("Sorry You Can't Go There!")
        },
        logDog: function () {
            console.log('You entered a dog');

        },
        logCat: function () {
            console.log('You entered a cat');

        }
    },
    computed: {
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        },
        addToA: function () {
            return this.a + this.number
        },
        addToB: function () {
            return this.b + this.number
        }

    }


})