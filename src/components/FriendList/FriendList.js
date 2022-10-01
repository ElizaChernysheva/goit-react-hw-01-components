import React from 'react';
import css from './FriendList.module.css'

import PropTypes, { shape } from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend =>(
        <li key={friend.id} className={css.item}>
          <span className={`${css.status} ${friend.isOnline && css.isOnline}`} ></span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" height="48"/>
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propeTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }))
}
