import PropTypes from "prop-types"
import css from "./FriendList.module.css"
import FriendItem from "../FriendItem/FriendItem"

const FriendList = ({ friends }) => (
    
    <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return <FriendItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        })}
    </ul>

)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default FriendList;