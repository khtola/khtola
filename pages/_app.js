import '../styles/globals.css';
import { useRouter } from 'next/router';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import HomeScreen from './src/HomeScreen';
import ListProduct from './component/ListProduct/ListProduct';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  return <Component key={router.asPath} {...pageProps}>
    <BrowserRouter>
      <Routes>
        <Route path="./" element={<HomeScreen />}>
          <Route path='./listProduct' element={<ListProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Component>

}

export default MyApp
