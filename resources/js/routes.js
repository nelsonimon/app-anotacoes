import Exemplo from './components/ExampleComponent.vue';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/exemplo', component: Exemplo },
  ]

export default routes;