import { Button, Input } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react';



export default function Login() {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
    >
          {({handleSubmit}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
              <Input name='email' placeholder='Email...'/>
              <Input name='password' placeholder='Password...' type='password'/>
              <Button type='submit'>Login</Button>
            </Form>
          )} 
    </Formik>
  )
}
