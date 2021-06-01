const GoodbyeComponent = {
    data() {
        return { message: 'Goodbye.' };
    },
    template: '<h2>{{ message }}</h2>'
}

const app = Vue.createApp({
    components: {
        'goodbye-component': GoodbyeComponent
    }
});

app.component('hello-component', {
    data() {
        return { message: 'Hello.' };
    },
    template: `
        <h1>{{ message }} {{ name }}</h1>
        <p>You lock so {{ condition }}. </p>
    `,
    props: [
        'name',
        'condition'
    ]
});

app.mount('#app');