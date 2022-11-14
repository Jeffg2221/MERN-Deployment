import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "40rem", padding: "1rem",
        marginLeft: "35rem"
    },
    input: {
        marginBottom: "1rem",

    },
    button: {
        width: "100%"
    }
}

const Update = (props) => {

    //keep track of what is being typed via useState hook
    // forms state variable
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkillOne] = useState("")
    const [skill2, setSkillTwo] = useState("")
    const [skill3, setSkillThree] = useState("")

    const navigate = useNavigate()

    //grab the url variable
    const { id } = useParams()

    

        useEffect(() => {
            axios.get('http://localhost:8000/api/pets/' + id)
                .then(res => {
                    console.log(res.data)
                    setName(res.data.name)
                    setType(res.data.type)
                    setDescription(res.data.description)
                    setSkillOne(res.data.skill1)
                    setSkillTwo(res.data.skill2)
                    setSkillThree(res.data.skill3)


                })
                .catch(err => console.log(err))
        }, [id])
        const [errors, setErrors] = useState([]);
        //onSubmit to update title, price, and description
        const updatePet = (e) => {
            e.preventDefault();
            // console.log(title,price,description)  checks if content is being recorded in the form 
            //! PUT REQUEST
            axios.put("http://localhost:8000/api/pets/" + id, {

                name, 
                type, 
                description, 
                skill1, 
                skill2, 
                skill3, 
            }).then(res => {
                    console.log("✅ client success")
                    console.log(res.data)
                    navigate("/pets")
                }).catch(err => {
                    console.log("❌ client error")
                    console.log(err)
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    console.log(JSON.stringify(errorResponse))
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })
        }

        return (
            <div>
                {/* {JSON.stringify(title)} */}
    
                <Paper elevation={3} style={styles.paper}>
                    <h1>Pet Shelter</h1>
                
                    <form onSubmit={updatePet}>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    
    
                        <h3>Know a pet needing a home?</h3>
                        <p>
                            
                            <label>Pet Name: </label><br />
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            
                            
                        </p>
                        <div>
                            {name.length > 0 && name.length < 3
                            ? "Pet name must be at least 3 characters.": ""}
                        </div>
                        
                        <p>
                            
                            <label>Pet Type: </label><br />
                            <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
                            
                            
                        </p>
                        <div>
                            {type.length > 0 && type.length < 3
                            ? "Pet type must be at least 3 characters.": ""}
                        </div>
                        <p>
                            <label>Pet Description</label><br />
                            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
    
                            {description.length > 0 && description.length < 2
                            ? "Description  must be at least 2 characters.": ""}
                        </p>
    
                        <p>Skills (optional): </p>
                        <p>
                            <label>Skill 1: </label><br />
                            <input type="text" onChange={(e) => setSkillOne(e.target.value)} value={skill1} />
                        </p>
                        <p>
                            <label>Skill 2</label><br />
                            <input type="text" onChange={(e) => setSkillTwo(e.target.value)} value={skill2} />
                        </p>
                        <p>
                            <label>Skill 3</label><br />
                            <input type="text" onChange={(e) => setSkillThree(e.target.value)} value={skill3} />
                        </p>
                    
            
                    
    
                        {/* <Link to="/authors" className="btn btn-success">
                            Cancel
                        </Link>
                        &nbsp; */}
                        <Button type="submit" variant="contained" color="primary">
                            Update Pet
                        </Button>
                    </form>
    
    
    
                </Paper>
            </div>
        )
    }
    export default Update