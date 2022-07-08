import axios from "axios";
import { useEffect, useState } from "react";

export default function useFriendStatus(friendId) {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        async function fetchStatus() {
            const statusResponse = await axios.get(`http://localhost:3001/status/${friendId}`);
            // console.log("inside hook",statusResponse);
            setStatus(statusResponse.data.status);    
        }
        fetchStatus();
    }, [friendId]);
    return status;
};


