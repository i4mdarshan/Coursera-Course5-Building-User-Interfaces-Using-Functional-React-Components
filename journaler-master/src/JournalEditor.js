import React from 'react';

class JournalEditor extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        const journal=this.props.journal;
        // console.log(journal);
        return (
            <div className={journal.journalMode == 'editor'?'show':'hide'} id="journal-editor">
                        <h1 id="journal-editor__date">{journal.date}</h1>
                        <h2 id="journal-editor__mood-label">How's your Mood Today</h2>
                        <div id="journal-editor__mood">
                            <button className={journal.mood=='Excited' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Excited')}>
                                <i className="far fa-smile-beam fa-fw"></i>
                            </button>
                            <button className={journal.mood=='Happy' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Happy')}>
                                <i className="far fa-smile fa-fw"></i>
                            </button>
                            <button className={journal.mood=='Surprised' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Surprised')}>
                                <i className="far fa-surprise fa-fw"></i>
                            </button>
                            <button className={journal.mood=='Sad' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Sad')}>
                                <i className="far fa-frown fa-fw"></i>
                            </button>
                            <button className={journal.mood=='Angry' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Angry')}>
                                <i className="far fa-angry fa-fw"></i>
                            </button>
                        </div>
                        <input value={journal.falseTitle} onChange={this.props.onTitleChange} 
                            placeholder="What's on your Mind?" 
                            type="text" id="journal-editor__title-editor" />
                        <textarea value={journal.writeup} onChange={this.props.onWriteupChange} 
                            placeholder="I am all excited to know how was your day like!" 
                            name="journal-editor__writeup-editor" 
                            id="journal-editor__writeup-editor" 
                            cols="30" rows="20"></textarea>
                        <div id="journal-editor__actions">
                            <button className="primary" id="save_button" onClick={()=>this.props.onSave()}>Save</button>
                            <button id="cancel_button" onClick={()=>this.props.onCancel()}>Clear</button>
                        </div>
                    </div>
        );
    }
}

export default JournalEditor;