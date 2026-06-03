import React, { createContext,useState } from 'react'
import F2 from './F2'

const FormContext = createContext()

function F1(){
    const [data,setData] = useState({})

    const hC = (e)=>{
        setData({...data,
             [e.target.name]:e.target.value
        })
    }
    return(
        <FormContext.Provider value={data}>
            <>
            First Name : <input type='text' name='fname' onChange={hC}/><br />
            Last Name : <input type='text' name='lname' onChange={hC}/><br />
            Message : <textarea name='msg' onChange={hC}/> <br />
            City : <select name='city' onChange={hC}>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Dhrangadhra">Surat</option>
                <option value="Rajkot">Rajkot</option>
            </select><br />
            Gender : <input type='radio' name='gender' value='male' onChange={hC}/>Male
                     <input type='radio' name='gender' value='female' onChange={hC}/>Female
                     <br />
            
            <F2/>
            </>
        </FormContext.Provider>
    )
}
export {FormContext}
export default F1
