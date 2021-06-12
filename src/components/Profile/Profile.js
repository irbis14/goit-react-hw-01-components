import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.lable}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.lable}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.lable}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaulProps = {
  avatar:
    'https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png',
};

Profile.propType = PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape(PropTypes.number),
});

export default Profile;
