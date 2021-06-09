import styles from './FriendList.module.css';

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

export default FriendList;
