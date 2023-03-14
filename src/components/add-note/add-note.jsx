import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import './add-note.css'
import Header from "../header/header";
import axios from "axios";


const AddNote = () => {
    // For navigating onClick
    const navigate = useNavigate()

    const [note, setNote] = useState({ title: "", body: "" })

    // For checking the mandotary field errors
    const [isValied, setIsValied] = useState(false)

    const isAllInputsValied = note.title.length && note.body.length

    const handleAdd = (e) => {
        e.preventDefault()

        if (!isAllInputsValied) {
            setIsValied(true)
        }


        else {
            const addNote = async () => {
                let result = await axios.post("http://localhost:5000/api/v1/notes", {
                    title: note.title,
                    body: note.body
                })

                navigate('/')
            }

            addNote()
        }


    }

    return (
        <>
            <Header />

            <section className="add-note-container">
                <form action="" className="form-section" onSubmit={handleAdd}>
                    <input type="text" placeholder="Enter your note title" onChange={e => setNote({ ...note, title: e.target.value })} />
                    <input type="text" placeholder="Enter your note" onChange={e => setNote({ ...note, body: e.target.value })} />

                    {/* Handle the error, if the mandotary field is empty */}
                    {isValied && <div style={{ color: "red", textAlign: "center" }}>Please fill all fields</div>}

                    <button>Add</button>
                </form>
            </section>
        </>
    )
}

export default AddNote;