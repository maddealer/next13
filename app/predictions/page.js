"use client";
import { useSelector, useDispatch } from "react-redux";
import mainStyles from "../page.module.css";

import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../../redux/counterSlice";
import axios from "axios";
import { allData } from "../../redux/counterSlice";
import { data } from "../../redux/counterSlice";
import { useState, useEffect } from "react";
function Predictions() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("10");
  const [loading, setLoading] = useState(true);
  const dataLoadet = useSelector(data);
  console.log("data log", typeof dataLoadet);
  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
        params: {
          market: "classic",
        },
        headers: {
          "X-RapidAPI-Key":
            "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
          "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        dispatch(allData(response.data.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (dataLoadet === null) getData();
    else {
      setLoading(false);
    }
  }, [dataLoadet]);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className={mainStyles.ldsspinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>Predictions</div>
      )}
    </>
  );
}

export default Predictions;
