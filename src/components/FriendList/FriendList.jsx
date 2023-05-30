import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
