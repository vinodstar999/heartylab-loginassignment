import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const initialValues = {
  firstName:'',
  lastName :'',
  email:'',
  password:'',
  confirmPassword:'',
}

const onSubmit = values =>{
  console.log('form data',values)
}

const validate = values =>{
  let errors = {}
  
  if(!values.firstName){
    errors.firstName = 'Required'
  }
  if(!values.lastName){
    errors.lastName = 'Required'
  }
  if(!values.password){
    errors.password = 'Required'
  }
  if(!values.confirmPassword){
    errors.confirmPassword = 'Required'
  }
  if(!values.email){
    errors.email = 'Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Enter valid Email'
  }


  if(!(values.password === values.confirmPassword)){
    errors.confirmPassword = 'password and confirmpassword must be same'
  }
  return errors
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

function Form() {
 const formik = useFormik({
  initialValues,
  onSubmit,
  //validate,
  validationSchema,
  })
  
  // console.log('visited fields',formik.touched)
  // console.log('form values',formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div className='form-control'>
        <label htmlFor='firstName'>FirstName</label>
        <input 
        type='text' 
        id='firstName' 
        name='firstName' 
        onChange={formik.handleChange} 
        onBlur = {formik.handleBlur}
        value={formik.values.firstName} 
        />
        { formik.touched.firstName && formik.errors.firstName?<div className='error'>{formik.errors.firstName}</div>:null}
        </div>

        <div className='form-control'>
        <label htmlFor='lastName'>LastName</label>
        <input 
        type='text' 
        id='lastName' 
        name='lastName'
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value = {formik.values.lastName}
        ></input>
        { formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div>:null}
        </div>

        <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input 
        type='email' 
        id="email" 
        name="email"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value = {formik.values.email}
        ></input>
        { formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>:null}
        </div>

        <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value = {formik.values.password}
        ></input>
        { formik.touched.password && formik.errors.password? <div className='error'>{formik.errors.password}</div>:null}
        </div>

        <div className='form-control'>
        <label htmlFor='confirmPassword'>ConfirmPassword</label>
        <input 
        type='password' 
        id="confirmPassword" 
        name="confirmPassword"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        value = {formik.values.confirmPassword}
        ></input>
        { formik.touched.confirmPassword && formik.errors.confirmPassword?<div className='error'>{formik.errors.confirmPassword}</div>:null}
        </div>

        <div>
        <button type='Submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form