import css from './App.module.css'
import user from '../../db/user.json';
import data from '../../db/data.json';
import friends from '../../db/friends.json'
import transactions from '../../db/transactions.json'

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory} from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
