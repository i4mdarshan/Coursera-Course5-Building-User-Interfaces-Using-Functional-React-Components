import Friend from "./Friend";

export default function FriendList(props) {
    return (
        <div className="friendList-container">
            <h3>Friends</h3>
            <div className="friendList">
                {
                    props.friends.map(friend => <button onClick={() => props.onFriendSelected(friend)}><Friend key={friend._id} friend={friend} /></button>)
                }
            </div>
        </div>
    );
};