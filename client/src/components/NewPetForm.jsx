import React, { useState } from "react";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

const NewPetForm = () => {
    let history = useHistory();
    let [petName, setPetName] = useState('');
    let [petType, setPetType] = useState('');
    let [petDescription, setPetDescription] = useState('');
    let [skill1, setSkill1] = useState('');
    let [skill2, setSkill2] = useState('');
    let [skill3, setSkill3] = useState('');
    let [formerrors, setFormErrors] = useState([]);
    
    const createPet = (e) => {
        console.log('created')
        e.preventDefault();
        // axios.get('http://localhost:8000/api/pets')
        // .then(res => {
        //     for(let i = 0; i < res.data.results.length - 1; i++){
        //         if (res.data.results[i].petName == petName){
        //             history.push('/pets/new')
        //         }
        //     }
        // })
        // .catch(err => console.log(err))

        let formInfoObj = { petName, petType, petDescription, skill1, skill2, skill3 };
        axios.post('http://localhost:8000/api/pets/create', formInfoObj)
            .then(response => {
                console.log(response.data)
                if (response.data.error) {
                    setFormErrors(response.data.error.errors)
                }
                else {
                    history.push('/')
                }
            })
            .catch(err => console.log("Error in submitting POST", err))
    }

    return (
        <div className="container">
            <form onSubmit={createPet}>
                <table>
                    <thead><tr><th><Link to={'/'}>back to home</Link></th></tr></thead>
                    <thead><tr><th>Know a pet needing a home?:</th></tr></thead>
                </table>
                <table className="form-control d-flex">
                    <tbody className="me-3">
                        <tr>
                            <td>Pet Name:</td>
                            <td><input onChange={(e) => { setPetName(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.petName?.message}</td>
                        </tr>
                        <tr>
                            <td>Pet Type:</td>
                            <td><input onChange={(e) => { setPetType(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.petType?.message}</td>
                        </tr>
                        <tr>
                            <td>Pet Description:</td>
                            <td><input onChange={(e) => { setPetDescription(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.petDescription?.message}</td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Add Pet" className="btn btn-success" /></td>
                        </tr>
                    </tbody>
                    <tbody className="d-inline-block">
                        <tr>
                            <td>Skills(Optional)</td>
                        </tr>
                        <tr>
                            <td>Skill 1:</td>
                            <td><input onChange={(e) => { setSkill1(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.skill1?.message}</td>
                        </tr>
                        <tr>
                            <td>Skill 2:</td>
                            <td><input onChange={(e) => { setSkill2(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.skill2?.message}</td>
                        </tr>
                        <tr>
                            <td>Skill 3:</td>
                            <td><input onChange={(e) => { setSkill3(e.target.value) }} type="text" name="" id="" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-danger">{formerrors.skill3?.message}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default NewPetForm;