import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validations';
import React, { useState, useEffect} from 'react';


const initialFormValues = {

  name: '',
  email: '',
  password: '',
  tof: false

};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tof: false
};

const users = [];
const initialDisabled = true;




function App() {

  const [ people, setPeople ] = useState(users)
  const [ formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)





  const postPeople = peps => {
    axios.post('https://reqres.in/api/users', peps)
    .then(res => {
      setPeople([res.data, ...people]);
      setFormValues(initialFormValues);
    }).catch(err => console.error(err))
  }

  //need to be added schema
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormError({ ...formError, [name]: ''}))
      .catch(err => setFormError({ ...formError, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) =>{
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  const formSubmit = () =>{
    const newPeople = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }


    postPeople(newPeople);

  }

  // useEffect here


  


  return (
    <div className="App">
        <header><h1>Form list</h1></header>
        <Form 
        
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          // disabled={disabled}
          errors={formError}
        
        />
    </div>
  );
}

export default App;
