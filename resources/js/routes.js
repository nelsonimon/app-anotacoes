import Exemplo from './components/ExampleComponent.vue';
import NotaIndex from './components/notes/NoteIndex.vue';

const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/note', component: NotaIndex },
    { path: '/exemplo', component: Exemplo },
  ]

export default routes;