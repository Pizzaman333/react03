import styles from './FriendsList.module.scss';

const FriendsList = (friends) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li className={styles.item} id={friend.id} key={friend.id}>
        <span
          className={styles.status}
          style={{ backgroundColor: friend.isOnline ? "limegreen" : "crimson",
            boxShadow: friend.isOnline ? "0 0 10px rgba(0, 255, 0, 0.8)" : "0 0 10px rgba(255, 77, 0, 0.8)"
           }}
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

export const Friends = ({ friends }) => {
  return (
    <section className={styles.friends}>
      <h2 className={styles.friendsTitle}>Here is a list of your friends:</h2>
      {FriendsList(friends)}
    </section>
  );
};
