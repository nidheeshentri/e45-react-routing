import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './ProductDetails.jsx';

import Contact from './Contact.jsx';
import Root from './routes/root.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import { Counter } from './features/counter/Counter.jsx';

import store from './app/store'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/product-details/:product_id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
