import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Spell() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [spells, setSpells] = useState([]);
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
      .get(`https://www.potterapi.com/v1/spells`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const spells = response.data;
        console.log("harry potter spells", spells);
        setSpells(spells);
      });
  }, []);

  return (
    <div className="spell">
      {spells.map(spell => {
        return (
          <div className="spell-list " key={spell._id}>
            <h2>
              <span aria-label="sparkles" role="img">
                ✨
              </span>
              {spell.spell}
            </h2>
            <h3>Type of Spell: {spell.type}</h3>
            <h3 className="capital">{spell.effect}</h3>
          </div>
        );
      })}
    </div>
  );
}
