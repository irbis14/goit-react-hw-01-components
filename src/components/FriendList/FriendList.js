import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import defaultImage from './defaultImage.jpg';

const statusToggle = status => (status ? styles.isOnline : styles.isOffline);

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.item}>
          <span className={`${styles.status} ${statusToggle(isOnline)}`}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaulProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
