import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import CodeConfirm from './pages/CodeConfirm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path='/invite' element={<PhoneConfirmation />} />
      <Route path='/code-confirm' element={<CodeConfirm />} />
    </Route>
    
  )
)



function App() {
  return (
   <RouterProvider router={router} />
   
  );
}

export default App;
