import KlientiDashboard from "../features/klienti/dashboard/KlientiDashboard";
import React from 'react';
import axios from 'axios';
import { Klienti } from "../app/models/Klienti";
import {v4 as uuid} from 'uuid';
import Button from "../utils/Button";

export default function Clients() {
    const [clients, setClients] = React.useState<Klienti[]>([]);

    React.useEffect(() => {
      axios.get<Klienti[]>('https://localhost:7005/api/Klienti').then(response => {
        setClients(response.data);
      })
    }, [])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditClients(client: Klienti) {
      client.klientiId 
        ? setClients([...clients.filter(x => x.klientiId !== client.klientiId), client])
        : setClients([...clients, {...client, klientiId: parseInt(uuid())}]);
      setEditMode(false);
    }

    function handleDeleteClient(id: string) {
      setClients([...clients.filter(x => x.klientiId !== parseInt(id))]);
    }

    React.useEffect(() => {
      axios.get<Klienti[]>('https://localhost:7005/api/Klienti').then(response => {
        setClients(response.data);
      })
    }, [])
    return (
        <section className="clients">
            <div className="container">
                <h1>Clients</h1>
                <KlientiDashboard 
                  handleFormOpen={handleFormOpen} 
                  handleFormClose={handleFormClose} 
                  editMode={editMode} 
                  setEditMode={() => setEditMode} 
                  clients={clients}
                  createOrEdit={handleCreateOrEditClients}
                  deleteClient={handleDeleteClient}
                />
            </div>
        </section>
    )
}