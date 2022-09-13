import PropTypes from "prop-types"
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => (
    
    <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return <li key={id} className={css.item}>
                <span className={isOnline ? css.isOnline : css.isOffline}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        })}
    </ul>

)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}

export default FriendList;