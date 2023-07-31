import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import NotFound from './pages/NotFound';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path='/invite' element={<PhoneConfirmation />} />
      <Route path='/code_confirm' element={<CodeConfirm />} />
      <Route path='/allow_notification' element={<AllowNotification />} />

      <Route path='/home' element={<Home />} />
      <Route path="*" element={ <NotFound /> }/>

    </Route>




    
  )
)



function App() {
  return (
   <RouterProvider router={router} />
   
  );
}

export default App;
