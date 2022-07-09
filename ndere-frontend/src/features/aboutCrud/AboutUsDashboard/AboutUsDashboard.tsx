import { Button } from '@mui/material';
import React from 'react'
import { AboutUs } from '../../../app/models/aboutus'
import AboutUsForm from '../aboutusform/AboutUsForm';


interface Props{
    aboutus: AboutUs[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (aboutus: AboutUs) => void;
    deleteAboutUs: (id: string) => void;
    submitting: boolean;
}


export default function AboutUsDashboard({aboutus, editMode,handleFormClose,
    handleFormOpen,createOrEdit,deleteAboutUs, submitting}: Props) {

        const [about, setAboutUs] = React.useState({});   
  
    return (
        <>
            <Button color="secondary" onClick={() => {setAboutUs({}); handleFormOpen()}} >Create</Button>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Undertitle</th>
                        <th>Faq</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
            {aboutus.map(about => (
                <tr key={about.id}>
                    <td>{about.id}</td>
                    <td>{about.title}</td>
                    <td>{about.undertitle}</td>
                    <td>{about.faq}</td> 
                    <td>{about.description}</td>
                    <td><Button onClick={() => {setAboutUs(about); handleFormOpen()}}>Edit</Button></td>
                    <td><Button onClick={() => deleteAboutUs(about.id.toString())}>Delete</Button></td>
                </tr>
            ))}
            </tbody>
            </table>
          
            <AboutUsForm 
                 open={editMode}
                 client={aboutus}
                 formClose={handleFormClose}
                 createOrEdit={createOrEdit}
                 submitting={submitting}
                 />
        </>
    )
}