import DelivererDashboard from "../features/deliverer/dashboard/DelivererDashboard";
import React from 'react';
import { Deliverer } from "../app/models/Deliverer";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";

export default function Deliverers() {
    const [deliverers, setDeliverers] = React.useState<Deliverer[]>([]);

    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Deliverer[]>('https://localhost:7077/api/Deliverer').then(response => {
      setDeliverers(response.data);
      })
    }, []) */
   

    React.useEffect(() => {
      axios.get<Deliverer[]>('https://localhost:7077/api/Deliverer').then(response => {
        setDeliverers(response.data);
        setLoading(false);
      })
    }, [deliverers])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditDeliverers(deliverer: Deliverer) {
      setSubmitting(true);
      if (deliverer.shperndaresId) {
        axios.put('https://localhost:7077/api/Deliverer', deliverer).then(() => {
          console.log('put method used');
          setDeliverers([...deliverers.filter(x => x.shperndaresId !== deliverer.shperndaresId), deliverer]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        axios.post('https://localhost:7077/api/Deliverer', deliverer).then(() => {
          console.log('post method used');
          setDeliverers([...deliverers, deliverer]);
          setEditMode(false);
          setSubmitting(false);
          console.log(deliverer);
        })
      }
    }

    function handleDeleteDeliverer(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7077/api/Deliverer/${id}`).then(() => {
        setDeliverers([...deliverers.filter(x => x.shperndaresId !== parseInt(id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="Deliverers">
            <div className="container">
                <h1>Deliverers</h1>
                <DelivererDashboard 
                  handleFormOpen={handleFormOpen} 
                  handleFormClose={handleFormClose} 
                  editMode={editMode} 
                  setEditMode={() => setEditMode} 
                  deliverers={deliverers}
                  createOrEdit={handleCreateOrEditDeliverers}
                  deleteDeliverer={handleDeleteDeliverer}
                  submitting={submitting}
                />
            </div>
        </section>
    )
}