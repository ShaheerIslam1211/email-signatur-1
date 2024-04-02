import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Company from './components/Company';
import Create from './components/Create';
import Learn from './components/Learn';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/Register', component: <Register /> },
  { path: '/NotFound', component: <NotFound /> },
  { path: '/Company', component: <Company /> },
  { path: '/Create', component: <Create /> },
  { path: '/SignIn', component: <SignIn /> },
  { path: '/Learn', component: <Learn /> },
  { path: '/Footer', component: <Footer /> },
];

export default routes;
