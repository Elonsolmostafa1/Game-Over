import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useURL(url) {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [endIndex, setEndIndex] = useState(20)

  async function getDataFromURL() {
    setLoading(true);
    let { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    });
    setAllData(data);
    setLoading(false);
  }

  useEffect(() => {
    getDataFromURL();
  }, []);

  function sliceData() {
    setEndIndex(endIndex + 20)
    if(endIndex > allData.length) {
      setEndIndex(allData.length)
    }
  }

  return { allData, loading , sliceData , endIndex };
}
