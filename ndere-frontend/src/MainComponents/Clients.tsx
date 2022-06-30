import KlientiDashboard from "../features/klienti/dashboard/KlientiDashboard";
import React from 'react';
import { IUseri } from "../app/models/Useri";
import {v4 as uuid} from 'uuid';
import LoadingComponents from "../app/layouts/LoadingComponent";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";
import { useStore } from "../app/stores/store";

export default function Clients() {

  const {usersStore} = useStore();

  const [clients, setClients] = React.useState<IUseri[]>([]);

  const [loading, setLoading] = React.useState(true);
  const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Useri[]>('https://localhost:7077/api/User').then(response => {
      setClients(response.data);
      })
    }, []) */
   

    React.useEffect(() => {
      axios.get<IUseri[]>('https://localhost:7077/api/User').then(response => {
        //per me e bo date
/*         let clients: Useri[] = [];
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

    function handleCreateOrEditClients(client: IUseri) {
      setSubmitting(true);
      if (client.id) {
        axios.put('https://localhost:7077/api/User', client).then(() => {
          console.log('put method used');
          setClients([...clients.filter(x => x.id !== client.id), client]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        /* mos harro me e set identity_insert on ne databaze nqs e perdor keto */
        /* client.UseriId = parseInt(uuid()); */
        axios.post('https://localhost:7077/api/User', client).then(() => {
          console.log('post method used');
          setClients([...clients, client]);
          setEditMode(false);
          setSubmitting(false);
          console.log(client);
        })
      }
/*       client.UseriId 
        ? setClients([...clients.filter(x => x.UseriId !== client.UseriId), client])
        : setClients([...clients, {...client, UseriId: parseInt(uuid())}]);
      setEditMode(false); */
    }

    function handleDeleteClient(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7077/api/User/${id}`).then(() => {
        setClients([...clients.filter(x => x.id !== id)]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="clients">
            <div className="container">
                <h1>{usersStore.title}</h1>
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