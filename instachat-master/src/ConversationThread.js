import { useEffect, useState } from "react";
import axios from 'axios';

import useFriendStatus from './FriendStatus';
import useFriendNotifications from "./FriendNotificationSetting";

export default function ConversationThread(props) {
    const status = useFriendStatus(props.friend._id);
    const [isNotificationMuted, updateNotificationSettings] = useFriendNotifications(props.friend._id);
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        async function fetchConversations() {
            if (props.friend._id !== null) {
                const conversationThread = await axios(`http://localhost:3001/conversations/${props.friend._id}`);
                setMessages(conversationThread.data.messages);
            }
        }
        fetchConversations();
    }, [props.friend._id]);

    const toggleIsNotificationMuted = (e) => {
        e.preventDefault();
        updateNotificationSettings(!isNotificationMuted);
    };

    return (
        <div className="conversation-block">
            {/* Conversation Header */}
            <div className="conversationThreadHeader">
                <button id="btn_notification" onClick={toggleIsNotificationMuted}>Notification Muted: { isNotificationMuted ? "True" : "False" }</button>
                <img alt={props.friend.name} src={props.friend.picture}></img>
                <div>{props.friend.name}</div>
                <small>{status}</small>
            </div>
            {/* Conversation */}
            <ul>
                {
                    messages.map((message, index) => <li key={index}>{ message }</li>)
                }
            </ul>
        </div>
    );
}