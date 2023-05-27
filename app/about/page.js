"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
const About = () => {
  const [first, setFirst] = useState({});
  const options = {
    method: "GET",
    url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
    params: {
      market: "classic",

      federation: "UEFA",
    },
    headers: {
      "X-RapidAPI-Key": "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
      "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
    },
  };
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.data[0]);
      setFirst(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>About</h1>
      {first ? (
        <div>
          <h1>{first.competition_cluster}</h1>
          <p>{first.home_team}</p>
          <p>vs</p>
          <p>{first.away_team}</p>
        </div>
      ) : null}{" "}
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default About;
