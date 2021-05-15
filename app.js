userName = 'allow method';

Vue.createApp({
    data() {
        return {
            userName: 'SasakiHajime'
        };
    },
    methods: {
        /**
         * methodName: function() {} (ES2015以前の書き方)
         * methodname() {} (ES2015以降の書き方)
         */
        sayHello() {
            return `Hello ${this.userName}!`;
        },
        /**
         * noThis() {
         *   return `See you, ${userName}.`;  // userName is not defined
         * }
         */
        userAllow: () => {
            /**
             * アロー関数を使用するとthisは自信のVueインスタンスではなく、
             * JavaScriptのグローバルオブジェクトを参照してしまう
             */
            return `This is ${this.userName}!`;
        }
    }
}).mount('#app');