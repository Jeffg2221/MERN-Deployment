import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Main.css'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}





const Main = (props) => {

    const navigate = useNavigate()

    const [pets, setPets] = useState([])

    // trigger when the component has finished loading
    useEffect(() => {
        //get all the authors from server
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res.data)
                setPets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // go to the update route
    const goToUpdate = (petsMongoDB) => {
        console.log(petsMongoDB)
        navigate("/pets/" + petsMongoDB + "/edit")
    }






    return (
        <div >
            <h1>Pet Shelter</h1>
            {/* {JSON.stringify(authors)} */}


                    
                        
                            
            <table>
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                
                                <tbody >
                                {

                                        pets.map((onePet) => {
                                            return(
                                        
                                                <tr key ={onePet._id}>
                                                <td>{onePet.name}</td>
                                                <td>{onePet.type}</td>
                                                <td><button><Link  to={`/pets/${onePet._id}`} >details</Link></button> &nbsp;<button onClick={() => goToUpdate(onePet._id)}>edit</button></td>

                                            </tr>
                                        
                                        )
                                    
                                    })
                            }
                                    
                                    

                                </tbody>
                            </table>
                
                    

                
                    


            

        </div>
    )
}

export default Main