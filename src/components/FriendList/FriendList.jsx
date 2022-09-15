import PropTypes from "prop-types"
import css from "./FriendList.module.css"
import FriendItem from "../FriendItem/FriendItem"

const FriendList = ({ friends }) => (
    
    <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
        })}
    </ul>

)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
    
}

export default FriendList;