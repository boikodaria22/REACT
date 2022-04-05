import Container from './Container/Container'

import Profile from "./Profile/Profile";
import Statistic from "./Statistic/Statistic";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistic/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transaction.json';

export const App = () => {
  return (
    <div>
{/* =================== Задача 1 =============================*/}
<nav>
  <a href="#1"> Задача 1</a>
  <a href="#2"> Задача 2</a>
  <a href="#3"> Задача 3</a>
  <a href="#4"> Задача 4</a>
</nav>
<div className='content'>
    <h2 id='1'>Задача 1</h2>
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  
    </Container>
{/* =================== Задача 2 =============================*/}
    <h2 id='2'>Задача 2</h2>
    <Container>
      <Statistic title="Upload stats" stats={data}/>
    </Container>
    <Container>
      <Statistic  stats={data}/>
    </Container>
{/* =================== Задача 3 =============================*/}
    <h2 id='3'>Задача 3</h2>
    <FriendList friends={friends}/>
{/* =================== Задача 4 =============================*/}
    <h2 id='4'>Задача 4</h2>
    <TransactionHistory items={transactions}/>
    </div>
</div>

  );
};
