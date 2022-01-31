import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllPets = () => {
    let [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setAllPets(res.data.results)
            })
            .catch(err => console.log("Error", err))
    }, [])

    return (
        <div className="container">
            <table>
            <thead><tr><th><Link to={'/pets/new'}>Add pet to shelter</Link></th></tr></thead>
            <thead><tr><th>These pets are looking for a good home</th></tr></thead>
            </table>
            <table className="form-control table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((Pet, i) => {
                            return (
                                    <tr key={i}>
                                        <td>
                                            <p className="mt-1">{Pet.petName}</p>
                                        </td>
                                        <td>
                                            <p className="mt-1">{Pet.petType}</p>
                                        </td>
                                        <td>
                                        <Link className="btn btn-outline-info btn-sm mt-1" to={`/pets/${Pet._id}`}>Details</Link>
                                            <Link className="btn btn-outline-dark btn-sm mt-1" to={`/pets/${Pet._id}/edit`}>Edit</Link>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;