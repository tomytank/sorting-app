import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [data, setData] = useState([]);
  // const houseColors = {
  //   red: "#740001",
  //   blue: "#222f5b",
  //   yellow: "#ecb939",
  //   green: "#2A623D"
  // };

  // if (hHouse === "Hufflepuff") {
  //   styles.color = "#ecb939";
  // } else if (hHouse === "Ravenclaw") {
  //   styles.color = "#222f5b";
  // } else if (hHouse === "Gryffindor") {
  //   styles.color = "#740001";
  // } else {
  //   styles.color = "#2A623D";
  // }

  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/characters`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const data = response.data;
        console.log("harry potter characters", data);
        setData(data);
      });
  }, []);

  return (
    <div className="spell">
      {data.map(data => {
        return (
          <div className="character-list " key={data._id}>
            <h2>
              <span aria-label="sparkles" role="img">
                🧙
              </span>
              {data.name}
            </h2>
            <h3 className="capital">Role: {data.role}</h3>
            <h3 className="capital">House: {data.house}</h3>
            <h3 className="capital">Wand: {data.wand}</h3>
            <h3 className="capital">Patronus: {data.patronus}</h3>
            <h3 className="capital">Blood Status: {data.bloodStatus}</h3>
          </div>
        );
      })}
    </div>
  );
}
