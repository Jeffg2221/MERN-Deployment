import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const View = (props) => {

    const [pets, setPets] = useState([])

    const navigate = useNavigate()

    //grab the url variable
    const { id } = useParams()

    const [thisPet, setThisPet] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log(res.data)
                setThisPet(res.data)
            })
            .catch(err => console.log(err))
    }, [id])




    //Delete
    const deletePet = (deleteID) => {
        if (window.confirm("Are you sure you want to adopt this pet?")) {


            axios.delete("http://localhost:8000/api/pets/" + deleteID)

                .then(res => {
                    console.log("DELETE SUCCESS", res.data)
                    navigate("/pets")

                    //remove form the DOM after a successful delete
                    setPets(pets.filter((pet) => pet._id !== deleteID))
                })
                .catch(err => console.log(err))
        }
    }





    return (
        <div>
            {
                thisPet ? (

                    <div>
                        <h1>Pet Shelter</h1>

                        <h4> Details About: {thisPet.name} &nbsp;  <button onClick={() => deletePet(thisPet._id)}>Adopt {thisPet.name} </button></h4>
                        <ul>

                            <li>Pet Type: {thisPet.type}</li>
                            <li>Right Cast?: {thisPet.description}</li>
                            <li>Skills: {thisPet.skill1}</li>
                            <li> {thisPet.skill2} <br /></li>
                            <li> {thisPet.skill3}</li>

                        </ul>
                        
                    
                    </div>
                ) : "loading...."

            }




        </div>
    )
}

export default View
