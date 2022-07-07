import React from 'react';

class JournalCollection extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
                <h2>Journals</h2>
                <ul id="journal-catalog__collection">
                  {
                      this.props.collection.map((journal) => (
                          <li onClick={()=>this.props.onJournalClicked(journal)} key={journal.id} className="journal-catalog__collection--journal">
                              <h3 id="title_date">{journal.title} - {journal.date}</h3>
                              <p>{journal.writeup}</p>
                          </li>
                      ))
                  }
                </ul>
            </div>
        );
    }
}

export default JournalCollection;