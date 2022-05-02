import Menu from '../../Menu';
import './../../styles/App.scss';
import './../../styles/Reset.css';
import './../../styles/Components.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../../route-config';
import axios from 'axios';
import React from 'react';
import { Klienti } from '../models/Klienti';
import KlientiDashboard from '../../features/activities/dashboard/KlientiDashboard';

function App() {
  const [clients, setClients] = React.useState<Klienti[]>([]);

  React.useEffect(() => {
    axios.get<Klienti[]>('https://localhost:7005/api/Klienti').then(response => {
      setClients(response.data);
    })
  }, [])

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
        <div className="container">
          <KlientiDashboard clients={clients}/>
        </div>
    </>
  );
}

export default App;