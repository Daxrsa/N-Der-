import Menu from './Menu';
import Hero from './MainComponents/Hero';
import './styles/App.scss';
import './styles/Reset.css';
import './styles/Components.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './route-config';

function App() {
  return (
    <>
        <BrowserRouter>
            <Menu />
            <Routes>
              {routes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>
              )}
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;