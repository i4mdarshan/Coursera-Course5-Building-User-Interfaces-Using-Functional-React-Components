import React from 'react';

class JournalViewer extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const journal=this.props.journal;
        // console.log(journal.journalMode+''+journal.journalId);
        return (
            <div className={journal.journalMode == 'viewer'?'show':'hide'} id="journal-viewer">
            <h1 id="journal-viewer__date">{journal.date}</h1>
            <div id="journal-viewer__mood">
                <div className={journal.mood=='Excited' ? 'mood show' : 'hide'}>
                    <i className="far fa-smile-beam fa-fw"></i>
                </div>
                <div className={journal.mood=='Happy' ? 'mood show' : 'hide'}>
                    <i className="far fa-smile fa-fw"></i>
                </div>
                <div className={journal.mood=='Surprised' ? 'mood show' : 'hide'}>
                    <i className="far fa-surprise fa-fw"></i>
                </div>
                <div className={journal.mood=='Sad' ? 'mood show' : 'hide'}>
                    <i className="far fa-frown fa-fw"></i>
                </div>
                <div className={journal.mood=='Angry' ? 'mood show' : 'hide'}>
                    <i className="far fa-angry fa-fw"></i>
                </div>
            </div>
            <h3 id="journal-viewer__title-viewer">{journal.title}</h3>
            <div id="journal-viewer__writeup-viewer">{journal.writeup}</div>
            <div id="journal-viewer__actions">
                <button className="primary" id="edit_button" onClick={()=>this.props.onEdit()}>Edit</button>
                <button id="delete_button" onClick={()=>this.props.onDelete(journal.journalId)}>Delete</button>
            </div>
        </div>
        );
    }
}

export default JournalViewer;