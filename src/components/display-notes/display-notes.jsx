import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './display-notes.css'
import Header from '../header/header'

const DisplayNotes = () => {
    // For navigating onClick
    const navigate = useNavigate()

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getAllNotes = async () => {
            let result = await axios.get("http://localhost:5000/api/v1/notes")

            setNotes(result.data.notes)
        }
        getAllNotes()
    }, [notes])


    const handleDelete = id => {
        const deleteNote = async () => {
            let result = await axios.delete(`http://localhost:5000/api/v1/notes/${id}`)
        }

        deleteNote()
    }

    const handleEdit = id => {
        alert("This functionality is working with postman only, and kindly wait till implementing in frontend. remaining functionalities are working fine")
        // navigate(`/addnote/${id}`)
        // const editNote = async () => {
        //     let result = await axios.put(`http://localhost:5000/api/v1/notes/${id}`, {


        //     })
        // }
    }
    //console.log(notes);
    return (
        <>
            <section className='display-notes-container'>
                <Header />

                <section className='display-notes-table'>

                    <table className="table table-striped table-bordered">
                        <thead className='table-heading'>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Note</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>

                            {
                                notes.length && notes.length > 0 ?
                                    notes.map((note) => {
                                        return (
                                            <tr key={note._id}>
                                                <td>{note.title}</td>
                                                <td>{note.body}</td>
                                                <td className='table-note-action-btn'>
                                                    <button onClick={() => handleEdit(note._id)}>EDIT</button>
                                                    <button onClick={() => handleDelete(note._id)}>DELETE</button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                    :

                                    "Loading"
                            }

                        </tbody>
                    </table>

                </section>
            </section>
        </>
    )
}

export default DisplayNotes;