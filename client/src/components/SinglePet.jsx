import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from 'react-router-dom';

const SinglePet = () => {
    let [pet, setPet] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data.results);
            })
            .catch(err => console.log('Error getting single pet details', err))
    }, [])

    const deletepet= () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
        .then(res=> {
            history.push('/')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="container">
            <Link to={'/'}>back to home</Link>
            <div className="d-flex">
                <h4>Details about {pet.petName} </h4>
                <button onClick={deletepet} className="btn btn-sm btn-danger ms-5">Adopt {pet.petName}!</button>
            </div>
            <div className="form-control">
            <p>Type: {pet.petType}</p>
            <p>Description: {pet.petDescription}</p>
            <p>Skills:</p>
            <ul className="ms-3">
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
            </ul>
            </div>
        </div>
    )
}

export default SinglePet;