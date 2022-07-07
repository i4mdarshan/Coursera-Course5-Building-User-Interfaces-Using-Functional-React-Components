import React from 'react';

class MoodStats extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
               <h2>Mood Stats</h2>
                        <div id="journal-catalog__mood-stats">
                            <div className="mood-stat">
                                <div className="mood"><i className="far fa-smile-beam"></i></div>
                                <div className="stat">{this.props.excitedValue}</div>
                            </div>
                            <div className="mood-stat">
                                <div className="mood"><i className="far fa-smile"></i></div>
                                <div className="stat">{this.props.happyValue}</div>
                            </div>
                            <div className="mood-stat">
                                <div className="mood"><i className="far fa-surprise"></i></div>
                                <div className="stat">{this.props.surprisedValue}</div>
                            </div>
                            <div className="mood-stat">
                                <div className="mood"><i className="far fa-frown"></i></div>
                                <div className="stat">{this.props.sadValue}</div>
                            </div>
                            <div className="mood-stat">
                                <div className="mood"><i className="far fa-angry"></i></div>
                                <div className="stat">{this.props.angryValue}</div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default MoodStats;