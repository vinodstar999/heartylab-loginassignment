import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import TextError from './TextError';

const initialValues = {
  firstName:'',
  lastName :'',
  email:'',
  password:'',
  confirmPassword:'',
}

const onSubmit = values =>{
  const myObject = {
    userName: values.firstName,
    password: values.password,
  }
   console.log('form data',values)
  window.localStorage.setItem("myObject",JSON.stringify(myObject))
}



const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
  .required('Required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

function Register() {
  //  console.log('visited fields',formik.touched)
  // console.log('form values',formik.values)
  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      <Form >

        <div className='form-control'>
        <label htmlFor='firstName'>FirstName</label>
        <Field 
        type='text' 
        id='firstName' 
        name='firstName' 
        />
        <ErrorMessage name='firstName' component={TextError}/>
        </div>

        <div className='form-control'>
        <label htmlFor='lastName'>LastName</label>
        <Field 
        type='text' 
        id='lastName' 
        name='lastName'
        />
        <ErrorMessage name='lastName' component={TextError}/>
        </div>

        <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <Field 
        type='email' 
        id="email" 
        name="email"
        />
        <ErrorMessage name='email' component={TextError}/>
        </div>

        <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <Field 
        type="password" 
        id="password" 
        name="password" 
        />
        <ErrorMessage name='password' component={TextError}/>
        </div>

        <div className='form-control'>
        <label htmlFor='confirmPassword'>ConfirmPassword</label>
        <Field 
        type='password' 
        id="confirmPassword" 
        name="confirmPassword"
        />
        <ErrorMessage name='confirmPassword' component={TextError}/>
        </div>

        <div>
        <button type='Submit' className='button'>Register</button>
        </div>
      </Form>
    </Formik>
  )
}

export default Register