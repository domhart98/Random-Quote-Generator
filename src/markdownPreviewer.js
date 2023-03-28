import './markdownPreviewer.css'
import { marked } from 'marked'
import React, { useState} from 'react'

const MarkdownPreviewer = () =>{
    const placeholder = `
# Hello (H1)

## Hello (H2)

### Link

Here's a link to [Codepen](https://codepen.io).

### Code Block

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>FCC Markdown Previewer</title>
          </head>

3.  Update the title to match the name of the website.

### Inline Code

Some inline code: \`<addr>\` .

### List

- First item
- Second item

### Blockquote

> Dorothy followed her through many of the beautiful rooms in her castle.

### Image

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

### Bold Text

I just love **bold text**.
`;
    const [markedValue, setMarkedValue] = 
    useState(placeholder);

    marked.setOptions({
        breaks: true
    })
    const getMarkdownValue = () =>{

        return { __html: marked(markedValue)};
    };
    const updateMarkdownValue = (e) =>{
        const newValue = e.target.value;
        setMarkedValue(newValue);
    }

    return(
        <div>
            <div className="row">
                <div className="col-6" id="ed">
                    <div className="row" id="editor-header">
                        <img className="col-3" src="./logo-markdown.svg" alt="markdown logo"/>
                        <h1 className="col-9">Markdown Editor</h1>
                    </div>
                    <textarea id="editor" value={markedValue} onChange={updateMarkdownValue}>
                    </textarea>
                </div>
                <div className="col-6" id="prev">
                    <div className="" id="preview-header">
                        <h1>Preview</h1>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={getMarkdownValue()}>
                    </div> 
                </div>
            </div>
            
            
        </div>
    )
}
export default MarkdownPreviewer;