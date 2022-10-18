import React from 'react';
import css from './FriendItem.module.css'
import PropTypes from 'prop-types';


export const FriendItem = ({friends}) => {
  return (
    <div>
      {friends.map(friend =>(
        <li key={friend.id} className={css.item}>
          <span className={`${css.status} ${friend.isOnline && css.isOnline}`} ></span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" height="48"/>
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

FriendItem.propeTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }))
}
