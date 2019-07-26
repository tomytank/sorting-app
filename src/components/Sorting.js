import React, { useEffect, useState } from "react";
import axios from "axios";
import SortingHatSvg from "./SortingHatSvg";

export default function Sorting() {
  const [hHouse, setHouse] = useState("...");
  // NOTE: The value given to setState() must be of the same type as your value is expected to be
  // const houseColors = {
  //   red: "#740001",
  //   blue: "#222f5b",
  //   yellow: "#ecb939",
  //   green: "#2A623D"
  // };
  const styles = {
    color: "#740001",
    fontSize: "25px"
  };

  if (hHouse === "Hufflepuff") {
    styles.color = "#726255";
  } else if (hHouse === "Ravenclaw") {
    styles.color = "#222f5b";
  } else if (hHouse === "Gryffindor") {
    styles.color = "#740001";
  } else {
    styles.color = "#2A623D";
  }

  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/sortinghat`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const hpHouse = response.data;
        console.log("harry potter API", hpHouse);
        setHouse(hpHouse);
      });
  }, [hHouse]);

  return (
    <div className="card">
      <h2>
        Don't Be Shy.
        <br />
        Step on up to be sorted.
      </h2>
      <SortingHatSvg />
      <button onClick={() => setHouse()}>Which house?</button>
      <div className="house-card">
        {hHouse ? (
          <p className="house-name">
            It's going to be <span style={styles}>{hHouse}!</span>
          </p>
        ) : (
          <p className="loader"> Hmm, difficult. VERY difficult. </p>
        )}
      </div>
    </div>
  );
}
