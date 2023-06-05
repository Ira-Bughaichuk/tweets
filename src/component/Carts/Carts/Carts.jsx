import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectorTweets } from "../../../redux/tweetsSelector";
import {
  getTweetsThunk,
  updateTweetByIdThunk,
} from "../../../redux/tweetsThunk";
import s from './Carts.module.scss';

function Carts() {
  const [list, setList] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState(3);
  const allTweets = useSelector(selectorTweets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getTweetsThunk());
    }
    setList(allTweets);
  }, [dispatch, allTweets, list]);

  const handleToggle = (id, isActive, followers) => {
    const obj = list.find((item) => item.id === id);
    const newObj = {
      ...obj,
      isActive: !isActive,
      followers: isActive ? followers - 1 : followers + 1,
    };
    dispatch(updateTweetByIdThunk(newObj))
      .unwrap()
      .then(() => {
        dispatch(getTweetsThunk());
      });
  };


  const loadMore = () => {
    setVisibleTweets((pV) => pV + 3);
  };
  const visibleData = list.slice(0, visibleTweets);

  return (
    <div className={s.boxContainer}>
      {visibleData.map(({ id, isActive, followers, user, tweets, avatar }) => {
         const formatedFollowers = new Intl.NumberFormat("en-US", {
    style: "decimal",
        }).format(followers)
        return (

        <div className={s.box} key={id}>
          <div className={s.overflowImage}>
          <img src={avatar} alt="User" className={s.image}/>
          </div>
          <p className={s.tweets}>
            {tweets} {user}
          </p>
          <p className={s.followers}>{formatedFollowers} Followers</p>
          <button
            className={s.button}
            onClick={() => handleToggle(id, isActive, followers)}
            style={{ backgroundColor: isActive ? "#5CD3A8" : "#EBD8FF" }}
          >
            {isActive ? "Follow" : "Following"}
          </button>
        </div>
      )})}
      {visibleTweets < list.length && (
        <button onClick={loadMore} className={s.button}> Load More </button>
      )}
      <NavLink to="/" className={s.button}>Back to Home</NavLink>
    </div>
  );
}

export default Carts;
