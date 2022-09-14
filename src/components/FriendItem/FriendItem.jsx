import PropTypes from "prop-types"
import css from "./FriendItem.module.css"

const FriendItem = ( {avatar, name, isOnline, id} ) => (
    
    <li key={id} className={css.item}>
        <span className={isOnline ? css.isOnline : css.isOffline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>


)

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

export default FriendItem;