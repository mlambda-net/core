import Store from './pages/store';
import Login from './pages/login';

const routes = [
  {
    name: 'global',
    actual: 'login',
    routes: [
      { path: 'login', name: 'login', component: Login },
      { path: 'store', name: 'store', component: Store },
    ],
  },
  {
    name: 'other',
    actual: 'login',
    routes: [
      { path: 'login', name: 'login', component: Login },
      { path: 'store', name: 'store', component: Store },
    ],
  },
];
export default routes;
