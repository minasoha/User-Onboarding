import React, { useState } from 'react';






export default function Form(props){

    const { values, submit, change, disabled, errors} = props;
    

    const onChange = e =>{
        const { name, value, type, checked} = e.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse);
    }

    const onSubmit = e =>{
        e.preventDefault();
        submit();
    }






    return (
        


        <form className='form container' onSubmit={onSubmit}>
            <div className='addingPeople'>
                <h2>Sign up!</h2>

                <div className="errors">

                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tof}</div>

                

                </div>
               

            </div>

            <div className="inputs">

                <label> Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                        />
                </label>
                <label> Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        />
                </label>
                <label> Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                        />
                </label>
                <label> Terms of Service
                    <input 
                        type="checkbox"
                        name="tof"
                        checked={values.tof}
                        onChange={onChange}
                        />
                </label>
                <button disabled={disabled}>Submit</button>
            </div>

        </form>

    );

}