import { Profile } from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import users from './assets/users.json';

const App = () => {
  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      <Profile users={users} />
      <FriendList />
    </>
  );
};

export default App;
