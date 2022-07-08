import { Button, Input } from '@mui/material'
import { Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';



export default observer(function Login() {
  const {userStore} = useStore();
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
    >
          {({handleSubmit}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
              <Input name='email' placeholder='Email...'/>
              <Input name='password' placeholder='Password...' type='password'/>
              <Button type='submit' >Login</Button>
            </Form>
          )} 
    </Formik>
  )
})
