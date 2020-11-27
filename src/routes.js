import Store from './pages/store';
import Login from './pages/login';

const routes = {
  actual: 'login',
  routes: [
    { path: 'login', name: 'login', component: Login },
    { path: 'store', name: 'store', component: Store },
  ],
};

export default routes;
