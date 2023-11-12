import { FC } from 'react';
import { router } from './services/router';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
