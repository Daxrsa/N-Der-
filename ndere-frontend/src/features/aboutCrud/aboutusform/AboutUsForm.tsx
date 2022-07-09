import { Button,  Input,  InputBase,  InputLabel } from '@mui/material'
import React, { ChangeEvent } from 'react'
import FormControl from '@mui/material/FormControl';
import { AboutUs } from '../../../app/models/aboutus';


export default function AboutUsForm(props : any) {

  const initialState = props.aboutus ?? {
    id: '',
    title: '',
    undertitle: '',
    faq: '',
    description: ''
  };

  const [aboutus, setAboutUs] = React.useState(initialState);

  function handleSubmit(){
    props.createOrEdit(aboutus);
    console.log(aboutus)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const{name, value} = event.target;
    setAboutUs({...aboutus, [name]: value})
    console.log(aboutus)
  }

  React.useEffect(() => {
    setAboutUs(initialState)
}, []); //initialState

return (props.open) ? (
    <>
    <FormControl onSubmit={handleSubmit}>
    
      <Input  placeholder='Title' onChange={handleInputChange} defaultValue={aboutus.title} name='title'/>
      <Input  placeholder='Undertitle' onChange={handleInputChange} defaultValue={aboutus.undertitle} name='undertitle'/>
      <Input  placeholder='FAQ' onChange={handleInputChange} defaultValue={aboutus.faq} name='faq'/>
      <Input  placeholder='Description' onChange={handleInputChange} defaultValue={aboutus.description} name='description'/>
      <Button variant="contained" type="submit" size="small" color="secondary" onClick={() => { handleSubmit(); props.aboutus = {}; setAboutUs(initialState)}}>Submit</Button>
      <Button onClick={props.closeForm} variant="contained" type="button" size="small" color="secondary">Cancel</Button>
    
    </FormControl>
    </>
  ) : null
}
