import { useEffect, useState } from "react";
import axios from "axios";

export default function useFriendNotifications(friendId) {
    const [isNotificationMuted, setIsNotificationMuted] = useState(null);

    // console.log(" state isNotificationMuted", isNotificationMuted);
    useEffect(() => {
        async function fetchNotificationSettings() {
            const statusResponse = await axios.get(`http://localhost:3001/notificationSettings/${friendId}`);
            setIsNotificationMuted(statusResponse.data.isNotificationsMuted);
        }
        fetchNotificationSettings();
    }, [friendId]);

    async function updateNotificationSettings(isNotificationMuted) {
        await axios.put(`http://localhost:3001/notificationSettings/${friendId}`, {
            isNotificationMuted,
        });
        setIsNotificationMuted(isNotificationMuted);
    };

    return [isNotificationMuted, updateNotificationSettings];
}