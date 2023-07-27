import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Switch } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path='/invite' element={<PhoneConfirmation />} />
      <Route path='/code-confirm' element={<CodeConfirm />} />
      <Route path='/allow-notification' element={<AllowNotification />} />

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
