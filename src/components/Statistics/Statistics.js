import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title && title}</h2>

      <ul className={styles.statList}>
        {stats.map(statData => (
          <li
            key={statData.id}
            // style={{ backgroundColor: `${randomColor}` }}
            className={styles.item}
          >
            <span className={styles.label}>{statData.label}</span>
            <span className={styles.percentage}>{statData.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
