import React, { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App(){
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || "" 
    )
    
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    })
    
    function createNote(){
        const newNote = {
            id: nanoid(),
            body: "# Type your note heading here"
        }
        setNotes(oldNotes => [newNote, ...oldNotes])
        setCurrentNoteId(newNote.id)
    }

    function findCurrentNoteId(){
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function updateNote(text){

        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++){
                if(oldNotes[i].id === currentNoteId)
                    newArray.unshift({...oldNotes[i], body: text})
                else
                    newArray.push(oldNotes[i])
            }
            return newArray
        })
        
        // setNotes(prevNote => {
        //     const newNoteArray = []
        //     for(let i = 0; i<prevNote.length; i++){
        //         const currentNote = prevNote[i]
        //         if(currentNote.id===currentNoteId){
        //             const updatedNote = {
        //                 id: currentNote.id,
        //                 body: text
        //             }
        //             newNoteArray.push(updatedNote)
        //         }
        //         else{
        //             newNoteArray.push(currentNote)
        //         }
        //     }
        //     return newNoteArray
        // })
    }

    function deleteNote(event, noteId){
        setNotes(prevNote => prevNote.filter(note => note.id !== noteId))
    }

    return(
        <main>
            {
                notes.length > 0 ?
                <Split
                    sizes={[30, 70]}
                    direction="horizontal"
                    className="split"
                >
                    <Sidebar
                        notes={notes}
                        currentNote = {findCurrentNoteId()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote = {createNote}
                        deleteNote = {deleteNote}
                    />
                    {
                        currentNoteId && notes.length > 0 &&
                        <Editor
                            currentNote={findCurrentNoteId()}
                            updateNote={updateNote}
                        />
                    }
                </Split>
                :
                <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button onClick={createNote} className="first-note" >Create one now</button>
                </div>
            }
        </main>
    )
}