import styles from './FriendList.module.css';

const FriendList = ({ children }) => {
  return <ul className={styles.friendsList}>{children}</ul>;
};

export default FriendList;
