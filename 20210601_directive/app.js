app = Vue.createApp({
    data() {
        return {
            colors: ['Red', 'Blue', 'Yellow'],
            users: [
                { id: 1, name: 'John', age: 29 },
                { id: 2, name: 'Eric', age: 39 },
                { id: 3, name: 'Bill', age: 19 },
            ],
            message: 'Hello',

            // 双方向バインディング用データ
            input_text: '',
            selected: 'A',
            checked: false
        };
    },
    methods: {
        getMessage() {
            this.message = 'Goodbye';
        },
        changeMessage(event, message) {
            this.message = message;
            console.log(event);
        }
    }
}).mount('#app')