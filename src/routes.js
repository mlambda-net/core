import { Recovery, SignIn } from '@mlambda-net/core/login';

const routes = {
  actual : "login",
  routes: [
    { path: "login", name: 'login',  component: SignIn },
    { path: "recovery", name: 'recovery', component: Recovery }
  ]
}


export default routes