import user from '../data/user.json';
import { Profile } from './profile/Profile';
import stats from '../data/stats.json';
import { Statistics } from './statistics/Statistics';
import friends from '../data/friends.json';
import { Friends } from './friendslist/FriendsList';
import transactions from '../data/transactions.json';
import { TransactionsHistory } from './transactionshistory/TransactionsHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="A unique title!" stats={stats}/>
      <Statistics stats={stats}/>
      <Friends friends={friends}/>
      <TransactionsHistory transactions={transactions} />
    </>
  );
};
