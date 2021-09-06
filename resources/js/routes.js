import Exemplo from './components/ExampleComponent.vue';
import NotaIndex from './components/notes/NoteIndex.vue';
import NotaView from './components/notes/NoteView.vue';
import NoteAdd from './components/notes/NoteAdd.vue';
import NoteUpdade from './components/notes/NoteUpdate.vue';
import NoteDelete from './components/notes/NoteDelete.vue';


const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const routes = [
    { name:"home", path: '/', component: Home },
    { name:"note", path: '/note', component: NotaIndex },
    { name:"note-view", path: '/note-view/:id', component: NotaView },
    { name:"exemplo", path: '/exemplo', component: Exemplo },
    { name:"addNote", path: '/addNote', component: NoteAdd },
    { name:"note-update", path: '/note-update/:id', component: NoteUpdade },
    { name:"note-delete", path: '/note-delete/:id', component: NoteDelete },
  ]
export default routes;