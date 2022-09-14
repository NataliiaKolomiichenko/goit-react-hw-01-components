import {user, data, friends, transactions} from "../data/totalData"
import Profile from "./Profile/Profile"
import Statistic from "./Statistic/Statistic"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"

export const App = () => {
  return (
    <>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />

    <Statistic title="Upload stats" stats={data} /> 
      
    <FriendList friends={friends} />
      
    <TransactionHistory items={transactions} />
    </>
  );
};
