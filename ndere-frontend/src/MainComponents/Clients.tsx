import KlientiDashboard from "../features/klienti/dashboard/KlientiDashboard";
import React from 'react';
import { Klienti } from "../app/models/Klienti";
import {v4 as uuid} from 'uuid';
import LoadingComponents from "../app/layouts/LoadingComponent";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";

export default function Clients() {
    const [clients, setClients] = React.useState<Klienti[]>([]);

    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Klienti[]>('https://localhost:7077/api/Klienti').then(response => {
      setClients(response.data);
      })
    }, []) */
   

    React.useEffect(() => {
      axios.get<Klienti[]>('https://localhost:7077/api/Klienti').then(response => {
        //per me e bo date
/*         let clients: Klienti[] = [];
        response.forEach(client => {
          client.date = client.date.split('T')[0];
          clients.push(client);  
        })
        setClients(clients); */
        
        setClients(response.data);
        setLoading(false);
      })
    }, [clients])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditClients(client: Klienti) {
      setSubmitting(true);
      if (client.klientiId) {
        axios.put('https://localhost:7077/api/Klienti', client).then(() => {
          console.log('put method used');
          setClients([...clients.filter(x => x.klientiId !== client.klientiId), client]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        /* mos harro me e set identity_insert on ne databaze nqs e perdor keto */
        /* client.klientiId = parseInt(uuid()); */
        axios.post('https://localhost:7077/api/Klienti', client).then(() => {
          console.log('post method used');
          setClients([...clients, client]);
          setEditMode(false);
          setSubmitting(false);
          console.log(client);
        })
      }
/*       client.klientiId 
        ? setClients([...clients.filter(x => x.klientiId !== client.klientiId), client])
        : setClients([...clients, {...client, klientiId: parseInt(uuid())}]);
      setEditMode(false); */
    }

    function handleDeleteClient(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7077/api/Klienti/${id}`).then(() => {
        setClients([...clients.filter(x => x.klientiId !== parseInt(id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

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
                  submitting={submitting}
                />
            </div>
        </section>
    )
}