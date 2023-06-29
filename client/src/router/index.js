import { createMemoryHistory, createRouter } from "vue-router";
import ViewContacts from '@/components/contacts/ViewContacts';
import CreateContact from '@/components/contacts/CreateContact.vue';

const routes = [
    {
        path: '/',
        redirect: '/contacts'
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: ViewContacts
    },
    {
        name: 'addcontact',
        path: '/contacts/add',
        component: CreateContact
    },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;