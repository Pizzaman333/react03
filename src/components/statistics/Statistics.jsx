import styles from './Statistics.module.scss';

const StatsList = (stats) => (
  <ul className={styles.statList}>
    {stats.map((stat) => (
      <li key={stat.id} className={styles.item}>
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
      </li>
    ))}
  </ul>
);

export const Statistics = ({ title = 'Some stats', stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      {StatsList(stats)}
    </section>
  );
};
