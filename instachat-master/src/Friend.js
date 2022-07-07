import useFriendStatus from './FriendStatus';
export default function Friend(props) {
    const status = useFriendStatus(props.friend._id);
    return (
        <div className="friendListItem">
            <div className={status === "online" ? "online" : "offline" }></div>
            <img alt={props.friend.name} src={props.friend.picture}></img>
            <div><b>{props.friend.name}</b></div>
        </div>
    );
} 