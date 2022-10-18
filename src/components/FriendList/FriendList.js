import React from 'react';
import css from './FriendList.module.css'

import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendItem friends={friends}/>
    </ul>
  );
};

