import React from 'react'
import './Skills.css'
import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";


const Skills = () => {
  return (

    <section className="skills-section">
        <img src={react} alt="react-icon" />
        {/* <img src={btc} alt="btc-icon" /> */}
        <img src="https://www.itsolutionsjovel.com/wp-content/uploads/2018/05/cpp_logo-600x675.png" alt="c++ image"></img>
        <img src="https://tse4.mm.bing.net/th?id=OIP.jeNvQPvdnFeEnHBtqV4SyAHaIk&pid=Api&P=0&h=180" alt="python image"></img>
        <img src="https://tse4.mm.bing.net/th?id=OIP.BxxfUqJaajzMYP_dg3ynCQHaIW&pid=Api&P=0&h=180" alt="javascript image"></img>
        <img src="https://tse2.mm.bing.net/th?id=OIP.ddsrM9ycfk4HI77xPFEsiQHaHa&pid=Api&P=0&h=180" alt="solidity image"></img>
        {/* <img src={truffle} alt="truffle-icon" /> */}
        {/* <img src={eth} alt="eth-icon" /> */}
        <img src={gns} alt="gns-icon" />
        {/* <img src={polygon} alt="polygon-icon" /> */}
        {/* <img src={node} alt="node-icon" /> */}
    </section>
  )
}

export default Skills
