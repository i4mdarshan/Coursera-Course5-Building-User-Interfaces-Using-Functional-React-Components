import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
    // define timer states with values 'Running', 'Stopped' and 'Ended'
    const [timerButton, setTimerButton] = useState("start");
    const [endTimerButton, setEndTimerButton] = useState(false);
    // define timer intervals pomodoro and shortbreak as arrays

    // define timers object with object properties pomodoro and shortBreak
    //  each property object should have properties: 
    //  type, timeout, timerState, timeLeft, timeLeftDisplay and message

    // Call useState Hook to manage 'currentTimer' state
   

    // Call useEffect Hook to update currentTimer state as timer interval expires
    

    // define startTimer() function to start timer and update currentTimer state
    const startTimer = () =>{
        setTimerButton("stop");
    }
    
    // define endTimer() function to end current timer and navigate to next timer
    const endTimer = () => {
        setEndTimerButton(true);
    }
    
    // define navigateToTimer() function to update currentTimer state with given timer

    // define navigateToNextTimer() function to update currentTimer with next timer state
    
    // define stopTimer() function to pause the current timer and update the currentTimer state
    
    
    // DO NOT MODIFY THE BELOW CODE, ELSE THE TEST CASES WILL FAIL 
    return (
        <div>
            <button id="btn-pd-timer">Pomodoro</button>
            <h2>Pomodoro</h2>
            <button id="btn-sb-timer">Short Break</button>
            <p id="timer">25:00</p>
            <p>05:00</p>
            {(timerButton === "start")
            ? 
            <div>
                <button id="btn-start-timer" onClick={startTimer}>{timerButton}</button>
               
            </div>
            :
            <div>
                <button id="btn-start-timer">start</button>
                <button id="btn-stop-timer">{timerButton}</button>
            </div>
            
            }
            <button id="btn-end-timer" onClick={endTimer}>end</button>
            {
                (endTimerButton) 
                ?
                <p id="message">Time for Break!</p>
                :
                <p id="message">Time to Work!</p>
            }
            <p>end</p>
        </div>
    )
}
export default App;