app = Vue.createApp({
    data() {
        return { a: 1, b: 2, message: 'hello' };
    },
    methods: {
        useMethods() {
            console.log('method');
            return this.a + this.b;
        }
    },
    computed: {
        useComputed() {
            console.log('computed');
            return this.a + this.b;
        }
    },
    watch: {
        message: () => {
            console.log('The message property has been chenged.');
        }
    }

}).mount('#app')