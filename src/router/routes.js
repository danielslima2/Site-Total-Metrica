import Home from '@/pages/Home';
import Empresa from '@/pages/Empresa'
import Portifolio from '@/pages/Portifolio'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/empresa',
        component: Empresa,
        name: 'empresa'
    },
    {
        path: '/portifolio',
        component: Portifolio,
        name: 'portifolio'
    },


    
    
    {
        path: '*',
        redirect: '/',
    },
];

export default { routes };