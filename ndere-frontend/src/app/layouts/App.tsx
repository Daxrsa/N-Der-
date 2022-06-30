import Menu from '../../Menu';
import './../../styles/App.scss';
import './../../styles/Reset.css';
import './../../styles/Components.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../../route-config';
import { useStore } from '../stores/store';
import { useEffect, useState } from 'react';
import LoadingComponent from './LoadingComponent';

function App() {
  const {commonStore, userStore} = useStore();
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
      setLoading(false);
    } else {
      commonStore.setAppLoaded();
      setLoading(false);
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent open={loading}/>
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