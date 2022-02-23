import React, { useState } from "react"
import Showdown from "showdown"
import ReactMde from "react-mde"

export default function Editor({currentNote, updateNote}){
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        tasklists: true,
        strikethrough: true,
    })

    return(
        <section className="pane editor">
        <ReactMde
            value={currentNote.body}
            onChange={updateNote}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview ={ markdown =>
                Promise.resolve(converter.makeHtml(markdown))
            }
            minEditorHeight={80}
            heightUnits="vh"
        />
        </section>
    )
}