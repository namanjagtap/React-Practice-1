import React from "react"

export default function Sidebar(props){

    const noteElement = props.notes.map((note, index) =>(
        <div>
            <div
                onClick={() => props.setCurrentNoteId(note.id)}
                className={`title ${note.id === props.currentNote.id ? "selected-note" : "" }`}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    onClick={(event) => props.deleteNote(event, note.id)} className="delete-btn"
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))
    
    return(
        <section className="pane sidebar">
            <div className="sidebar--header" >
                <h1>Notes</h1>
                <button onClick={props.newNote} className="new-note" >+</button>
            </div>
            {noteElement}
        </section>
    )
}