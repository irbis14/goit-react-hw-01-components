import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImage from './defaultImage.jpg';

const statusToggle = status => (status ? styles.isOnline : styles.isOffline);

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={styles.item}>
      <span className={`${styles.status} ${statusToggle(isOnline)}`}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));
};

FriendListItem.defaulProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
