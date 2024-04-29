import s from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friends}>
      {friends.map(friend => (
        <li className={s.friend} key={friend.id}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          {friend.isOnline ? (
            <p className={s.online}>{'Online'}</p>
          ) : (
            <p className={s.offline}>{'Offline'}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
