import style from './ShopCards.module.css';

import React from "react";
import ShopCard from "../ShopCard/ShopCard";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopCards } from "../../redux/actions/shop.actions.js";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccessibleIcon from "@material-ui/icons/Accessible";

function ShopCards() {
  const dispatch = useDispatch();
  const { shopList, isLoading, error } = useSelector((state) => state.shopCards);

  useEffect(() => {
    dispatch(getShopCards());
  }, []);
  return (
    <>
      <div className={style.shop__cards}>
        {isLoading ? (
          <p>
            <CircularProgress />
          </p>
        ) : error ? (
          <Paper>
            <AccessibleIcon fontSize="large"></AccessibleIcon>
          </Paper>
        ) : (
          <>
            {shopList && shopList.map((item, index) => <ShopCard key={index} {...item} />)}
          </>
        )}
      </div>
    </>
  );
}

export default memo(ShopCards);
