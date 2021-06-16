import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(statData => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              key={statData.id}
              className={styles.item}
              style={{ backgroundColor: `#${randomColor}` }}
            >
              <span className={styles.label}>{statData.label}</span>
              <span className={styles.percentage}>{statData.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
});

export default Statistics;
