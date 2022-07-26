import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { useNavigate } from "react-router-dom";

const initialValues = {
  userName: "",
  password: "",
};




const validationSchema = Yup.object({
  userName: Yup.string().required("required"),
  password: Yup.string().required("required"),
});

const Login = () => {
  let navigate = useNavigate()

  const onSubmit = (values)=>{
    let newObj = window.localStorage.getItem('myObject')
    newObj = JSON.parse(newObj)
    const user = values.userName === newObj.userName
    const pwd = values.password === newObj.password
    console.log(user,pwd)
    if ( user && pwd){
     return navigate('/welcome')
    }else{
      return navigate('/errorlogin')
    }
   }

  return (
    <div>
      <Formik initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <label htmlFor="userName">UserName</label>
            <Field type="text" name="userName" id="userName" ></Field>
            <ErrorMessage name="userName" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password"></Field>
            <ErrorMessage name="password" component={TextError} />
          </div>

          <button type="Submit" className="button">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
