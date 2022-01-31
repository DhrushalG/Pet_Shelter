import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";


const EditPet = () => {
    let [petDet, setPetDet] = useState({});
    let [editErrors, setEditErrors] = useState([]);

    const { id } = useParams();
    const history = useHistory();

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setPetDet({
                ...petDet,
                [e.target.name]: e.target.checked
            })
        }
        else {
            setPetDet({
                ...petDet,
                [e.target.name]: e.target.value
            })
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data.results)
                setPetDet(res.data.results)
            })
            .catch(err => console.log("Error getting single pet's details", err))
    }, [])

    const editPet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${id}`, petDet)
            .then(response => {
                if (response.data.error) {
                    setEditErrors(response.data.error.errors)
                }
                else {
                    history.push('/')
                }
            })
            .catch(err => console.log("Error in submitting POST", err))
    }

    return (
        <div>
            <form onSubmit={editPet}>
                <table>
                    <thead><tr><th><Link to={'/'}>back to home</Link></th></tr></thead>
                    <thead><tr><th>Editing {petDet.petName}:</th></tr></thead>
                </table>
                <table className="form-control d-flex">
                    <tbody className="me-3">
                        <tr>
                            <td>Pet Name:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.petName} name="petName" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.petName?.message}</td>
                        </tr>
                        <tr>
                            <td>Pet Type:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.petType} name="petType" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.petType?.message}</td>
                        </tr>
                        <tr>
                            <td>Pet Description:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.petDescription} name="petDescription" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.petDescription?.message}</td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Update Pet" className="btn btn-success" /></td>
                        </tr>
                    </tbody>
                    <tbody className="d-inline-block">
                    <tr>
                            <td>Skills(Optional)</td>
                        </tr>
                        <tr>
                            <td>Skill 1:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.skill1} name="skill1" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.skill1?.message}</td>
                        </tr>
                        <tr>
                            <td>Skill 2:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.skill2} name="skill2" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.skill2?.message}</td>
                        </tr>
                        <tr>
                            <td>Skill 3:</td>
                            <td><input type="text" onChange={changeHandler} value={petDet.skill3} name="skill3" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{editErrors.skill3?.message}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div >
    )
}

export default EditPet;