import axios from 'axios'
import React from 'react'
import LoadingComponent from '../app/layouts/LoadingComponent';
import { AboutUs } from '../app/models/aboutus';
import AboutUsDashboard from '../features/aboutCrud/AboutUsDashboard/AboutUsDashboard';


export default function AboutUsCRUD() {
  const [aboutus, setAboutUs] = React.useState<AboutUs[]>([]);
  
  const [loading, setLoading] = React.useState(true);
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    axios.get<AboutUs[]>('https://localhost:7005/api/AboutUs').then(response => {
      setAboutUs(response.data);
      setLoading(false);
    })
  }, [])


  const [editMode, setEditMode] = React.useState(false);

  function handleFormOpen(){
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditAboutUs(about: AboutUs) {
    setSubmitting(true);
    if (about.id) {
      axios.put('https://localhost:7005/api/AboutUs', about).then(() => {
        console.log('put method used');
        setAboutUs([...aboutus.filter(x => x.id !== about.id), about]);
        setEditMode(false);
        setSubmitting(false);
      })
    }
    else {
      /* mos harro me e set identity_insert on ne databaze nqs e perdor keto */
      /* client.klientiId = parseInt(uuid()); */
      axios.post('https://localhost:7005/api/AboutUs', about).then(() => {
        console.log('post method used');
        setAboutUs([...aboutus, about]);
        setEditMode(false);
        setSubmitting(false);
        console.log(about);
      })
    }

  }


  function handleDeleteAboutUs(id: string) {
    setSubmitting(true);
    axios.delete(`https://localhost:7005/api/AboutUs/${id}`).then(() => {
      setAboutUs([...aboutus.filter(x => x.id)]);
      setSubmitting(false);
    })
  }


  if (loading) return <LoadingComponent open={loading}/>;

  return (
      <AboutUsDashboard 
    handleFormOpen={handleFormOpen} 
    handleFormClose={handleFormClose} 
    editMode={editMode} 
    setEditMode={() => setEditMode} 
    aboutus={aboutus}
    createOrEdit={handleCreateOrEditAboutUs}
    deleteAboutUs={handleDeleteAboutUs}
    submitting={submitting}
      />
  )
}



