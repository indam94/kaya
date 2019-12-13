// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// class input extends Component {
// 	constructor(props) {
//     super(props);
    
//     this.state = {

//     }
// 	}

//   render() {
//     return (
//       <>
//       <h1>github test</h1>
//       <Link to = "/main">
//         Click
//       </Link>
//       </>
//     )
    
//   }
// }

// export default input

import React from "react";
import { Link } from "react-router-dom";
import "./Input.css";
import CircleLeft from "../resources/top_circles.png";
import CircleRight from "../resources/top_circles2.png";
// import questionMark from "../resources/question_mark.png";

import CustomButton from '@material-ui/core/Button';

import positive from "../resources/Input/deselected/Positive.png";
import positive2 from "../resources/Input/selected/Positive2.png";
import didnot from "../resources/Input/deselected/did_not.png";
import didnot2 from "../resources/Input/selected/did_not2.png";
import negative from "../resources/Input/deselected/negative.png";
import negative2 from "../resources/Input/selected/negative2.png";
import flowIconWhite from "../resources/Input/deselected/flowIconWhite.png"; //implement this one once design is received
import protectedSex from "../resources/Input/deselected/protectedsex.png";
import protectedSex2 from "../resources/Input/selected/protectedsex2.png";
import unprotectedSex from "../resources/Input/deselected/unprotectedsex.png";
import unprotectedSex2 from "../resources/Input/selected/unprotectedsex2.png";
// import fahrenheit from "../resources/Fahrenheit.png";
import sticky from "../resources/Input/deselected/Sticky.png";
import sticky2 from "../resources/Input/selected/Sticky2.png";
import spotting from "../resources/Input/deselected/Spotting.png";
import spotting2 from "../resources/Input/selected/Spotting2.png";
import eggwhite from "../resources/Input/deselected/Eggwhite.png";
import eggwhite2 from "../resources/Input/selected/Eggwhite2.png";
import watery from "../resources/Input/deselected/watery.png";
import watery2 from "../resources/Input/selected/watery2.png";
import unusual from "../resources/Input/deselected/unusual.png";
import unusual2 from "../resources/Input/selected/unusual2.png";
import pregpositive from "../resources/Input/deselected/pregpositive.png";
import pregpositive2 from "../resources/Input/selected/pregpositive2.png";
import pregnegative from "../resources/Input/deselected/pregnegative.png";
import pregnegative2 from "../resources/Input/selected/pregnegative2.png";
import allgood from "../resources/Input/deselected/All_good.png";
import allgood2 from "../resources/Input/selected/All_good2.png";
import cramps from "../resources/Input/deselected/Cramps.png";
import cramps2 from "../resources/Input/selected/Cramps2.png";
import tenderbreasts from "../resources/Input/deselected/Tender.png";
import tenderbreasts2 from "../resources/Input/selected/Tender2.png";
import headache from "../resources/Input/deselected/headache.png";
import headache2 from "../resources/Input/selected/headache2.png";
import backache from "../resources/Input/deselected/Backache.png";
import backache2 from "../resources/Input/selected/Backache2.png";
import fatigue from "../resources/Input/deselected/Fatigue.png";
import fatigue2 from "../resources/Input/selected/Fatigue2.png";
import diarrhea from "../resources/Input/deselected/Diarrhea.png";
import diarrhea2 from "../resources/Input/selected/Diarrhea2.png";
import cravings from "../resources/Input/deselected/Cravings.png";
import cravings2 from "../resources/Input/selected/Cravings2.png";
import insomnia from "../resources/Input/deselected/Insomnia.png";
import insomnia2 from "../resources/Input/selected/Insomnia2.png";
import happy from "../resources/Input/deselected/Happy.png";
import happy2 from "../resources/Input/selected/Happy2.png";
import calm from "../resources/Input/deselected/calm.png";
import calm2 from "../resources/Input/selected/calm2.png";
import sad from "../resources/Input/deselected/sad.png";
import sad2 from "../resources/Input/selected/sad2.png";
import confused from "../resources/Input/deselected/confused.png";
import confused2 from "../resources/Input/selected/confused2.png";
import apathetic from "../resources/Input/deselected/apathetic.png";
import apathetic2 from "../resources/Input/selected/apathetic2.png";
import depressed from "../resources/Input/deselected/depressed.png";
import depressed2 from "../resources/Input/selected/depressed2.png";
import irritated from "../resources/Input/deselected/irritated.png";
import irritated2 from "../resources/Input/selected/irritated2.png";
import moodswings1 from "../resources/Input/deselected/moodswings.png";
import moodswings2 from "../resources/Input/selected/moodswings2.png";
import anxious1 from "../resources/Input/deselected/anxious.png";
import anxious2 from "../resources/Input/selected/anxious2.png";
import faintline1 from "../resources/Input/deselected/faintline.png";
import faintline2 from "../resources/Input/selected/faintline2.png";
import flowIconRed from "../resources/Input/deselected/flowIconRed.png";
import moment from "moment";

class input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ACTIVE: [],
      anxious: anxious1,
      faintline: faintline1,
      moodswings: moodswings1,
      irritated: irritated,
      depressed: depressed,
      apathetic: apathetic,
      confused: confused,
      sad: sad,
      calm: calm,
      happy: happy,
      insomnia: insomnia,
      cravings: cravings,
      diarrhea: diarrhea,
      fatigue: fatigue,
      backache: backache,
      headache: headache,
      tenderbreasts: tenderbreasts,
      cramps: cramps,
      allgood: allgood,
      pregnegative: pregnegative,
      pregpositive: pregpositive,
      unusual: unusual,
      watery: watery,
      eggwhite: eggwhite,
      spotting: spotting,
      sticky: sticky,
      unprotectedSex: unprotectedSex,
      protectedSex: protectedSex,
      negative: negative,
      didnotOPK: didnot,
      didnotSEX: didnot,
      didnotCM: didnot,
      positive: positive,
      flow1: flowIconWhite,
      flow2: flowIconWhite,
      flow3: flowIconWhite,
      flow4: flowIconWhite,
      flow5: flowIconWhite,
      cur: moment()
    };
    this.toggleIcon = this.toggleIcon.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    //chagne information
    localStorage.setItem('Information', `This is the input screen. <br/> Please, input the following data and press SAVE <br/> OPK test: didn't take test <br/> Flow: medium <br/> Sex: protected sex <br/> Temperature: 97.5F <br/> Cervical Mucus: watery <br/> Pregnancy test: faint line <br/> Symptoms: choose more than one <br/> Mood: choose more than one`)
  }

  render() {
    return (
      <>
      <img src={CircleLeft} alt="" className="decorator_left"/>
      <img src={CircleRight} alt="" className="decorator_right"/>
      <div className="input_screen">
        
        <div className="current_date">
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontStyle: "normal",
              color: "#56569D",
              marginTop: "0.0rem",
              marginBottom: "0.3rem"
            }}
          >
            {this.state.cur.format("MMMM DD")}
          </p>
        </div>
        <div className="input_title">
          <p className="input_content"> OPK Test</p>
        </div>
        <section className="positive">
          <div>
            <img
              className="imgprop"
              id="didnotOPK"
              src={this.state.didnotOPK}
              alt="Don't Take Test"
              onClick={this.toggleIcon}
            />
            <br />
            Don't Take Test
          </div>
          <div>
            <img
              id="positive"
              src={this.state.positive}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            Positive
          </div>
          <div>
            <img
              id="negative"
              src={this.state.negative}
              alt="negative"
              onClick={this.toggleIcon}
            />
            <br />
            Negative
          </div>
        </section>
        <div className="input_title_2">
          <p className="input_content_2"> Flow</p>
        </div>
        <section className="flow">
          <div></div>
          <div>
            <img
              id="flow1"
              onClick={this.toggleIcon}
              src={this.state.flow1}
              alt="positive"
            />
          </div>
          <div>
            <img
              id="flow2"
              onClick={this.toggleIcon}
              src={this.state.flow2}
              alt="positive"
            />
          </div>
          <div>
            <img
              id="flow3"
              onClick={this.toggleIcon}
              src={this.state.flow3}
              alt="positive"
            />
          </div>
          <div>
            <img
              id="flow4"
              onClick={this.toggleIcon}
              src={this.state.flow4}
              alt="positive"
            />
          </div>
          <div>
            <img
              id="flow5"
              onClick={this.toggleIcon}
              src={this.state.flow5}
              alt="positive"
            />
          </div>
          <div />
          <div>Light</div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div>Heavy</div>
        </section>
        <div className="input_title">
          <p className="input_content"> Sex</p>
        </div>
        <section className="positive">
          <div>
            <img
              id="didnotSEX"
              className="imgprop"
              src={this.state.didnotSEX}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            Didn't have sex
          </div>
          <div>
            <img
              id="protectedSex"
              onClick={this.toggleIcon}
              src={this.state.protectedSex}
              alt="positive"
            />
            <br />
            Protected sex
          </div>
          <div>
            <img
              id="unprotectedSex"
              onClick={this.toggleIcon}
              src={this.state.unprotectedSex}
              alt="positive"
            />
            <br />
            Unprotected sex
          </div>
        </section>
        <div className="input_title_2">
          <p className="input_content_2"> Temperature</p>
        </div>

        <div className="tempdiv">
          <table>
            <tr>
              <th>
                <input
                  type="text"
                  class="form-control mb-2"
                  id="inlineFormInput"
                  placeholder=" _ _ , _ _ "
                />
              </th>
              <th>
                {/* <img
                  className="imgprop fsymbol"
                  src={fahrenheit}
                  alt="positive"
                /> */}
                <font>F°</font>
              </th>
            </tr>
          </table>
        </div>

        <div className="input_title">
          <p className="input_content"> Cervical mucus</p>
        </div>
        <section className="positive">
          <div>
            <img
              id="didnotCM"
              className="imgprop"
              src={this.state.didnotCM}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            No discharge
          </div>
          <div>
            <img
              id="spotting"
              onClick={this.toggleIcon}
              src={this.state.spotting}
              alt="positive"
            />
            <br />
            Spotting
          </div>
          <div>
            <img
              id="sticky"
              onClick={this.toggleIcon}
              src={this.state.sticky}
              alt="positive"
            />
            <br />
            Sticky
          </div>
          <div>
            <img
              id="eggwhite"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.eggwhite}
              alt="positive"
            />
            <br />
            Eggwhite
          </div>
          <div>
            <img
              id="watery"
              onClick={this.toggleIcon}
              src={this.state.watery}
              alt="positive"
            />
            <br />
            Watery
          </div>
          <div>
            <img
              id="unusual"
              onClick={this.toggleIcon}
              src={this.state.unusual}
              alt="positive"
            />
            <br />
            Unusual
          </div>
        </section>
        <div className="input_title_2">
          <p className="input_content_2"> Pregnancy Test</p>
        </div>
        <section className="positive">
          <div>
            <img
              id="pregpositive"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.pregpositive}
              alt="positive"
            />
            <br />
            Positive
          </div>
          <div>
            <img
              id="pregnegative"
              onClick={this.toggleIcon}
              src={this.state.pregnegative}
              alt="negative"
            />
            <br />
            Negative
          </div>
          <div>
            <img
              id="faintline"
              src={this.state.faintline}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            Faint line
          </div>
        </section>
        <div className="input_title">
          <p className="input_content"> Symptoms</p>
        </div>
        <section className="positive">
          <div>
            <img
              id="allgood"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.allgood}
              alt="positive"
            />
            <br />
            All good
          </div>
          <div>
            <img
              id="cramps"
              onClick={this.toggleIcon}
              src={this.state.cramps}
              alt="positive"
            />
            <br />
            Cramps
          </div>
          <div>
            <img
              id="tenderbreasts"
              onClick={this.toggleIcon}
              src={this.state.tenderbreasts}
              alt="positive"
            />
            <br />
            Tender breasts
          </div>
          <div>
            <img
              id="headache"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.headache}
              alt="positive"
            />
            <br />
            Headache
          </div>
          <div>
            <img
              id="backache"
              onClick={this.toggleIcon}
              src={this.state.backache}
              alt="positive"
            />
            <br />
            Backache
          </div>
          <div>
            <img
              id="fatigue"
              onClick={this.toggleIcon}
              src={this.state.fatigue}
              alt="positive"
            />
            <br />
            Fatigue
          </div>
          <div>
            <img
              id="diarrhea"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.diarrhea}
              alt="positive"
            />
            <br />
            Diarrhea
          </div>
          <div>
            <img
              id="cravings"
              onClick={this.toggleIcon}
              src={this.state.cravings}
              alt="positive"
            />
            <br />
            Cravings
          </div>
          <div>
            <img
              id="insomnia"
              onClick={this.toggleIcon}
              src={this.state.insomnia}
              alt="positive"
            />
            <br />
            Insomnia
          </div>
        </section>
        <div className="input_title_2">
          <p className="input_content_2">Moods</p>
        </div>
        <section className="positive">
          <div>
            <img
              id="happy"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.happy}
              alt="positive"
            />
            <br />
            Happy
          </div>
          <div>
            <img
              id="calm"
              onClick={this.toggleIcon}
              src={this.state.calm}
              alt="positive"
            />
            <br />
            Calm
          </div>
          <div>
            <img
              id="sad"
              onClick={this.toggleIcon}
              src={this.state.sad}
              alt="sad"
            />
            <br />
            Sad
          </div>
          <div>
            <img
              id="confused"
              onClick={this.toggleIcon}
              className="imgprop"
              src={this.state.confused}
              alt="positive"
            />
            <br />
            Confused
          </div>
          <div>
            <img
              id="apathetic"
              onClick={this.toggleIcon}
              src={this.state.apathetic}
              alt="positive"
            />
            <br />
            Apathetic
          </div>
          <div>
            <img
              id="depressed"
              onClick={this.toggleIcon}
              src={this.state.depressed}
              alt="positive"
            />
            <br />
            Depressed
          </div>
          <div>
            <img
              id="irritated"
              className="imgprop"
              src={this.state.irritated}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            Irritated
          </div>
          <div>
            <img
              id="moodswings"
              align="middle"
              src={this.state.moodswings}
              alt="positive"
              onClick={this.toggleIcon}
            />
            <br />
            Mood swings
          </div>
          <div>
            <img
              id="anxious"
              src={this.state.anxious}
              alt="anxious"
              onClick={this.toggleIcon}
            />
            <br />
            Anxious
          </div>
        </section>
        <div style={{textAlign:"center"}}>
        <Link to = "/main">
        <CustomButton className="mb-2 mt-2"
                      style={{width:"100%"}}
                      variant="contained" 
                      color="primary">
            Save
        </CustomButton>
        </Link>
        </div>
      </div>
      </>
    );
  }
  toggleIcon = e => {
    //console.log(e.target.id);
    if (e.target.id === "faintline") {
      this.changeIcon(e.target.id, faintline1, faintline2);
    } else if (e.target.id === "anxious") {
      this.changeIcon(e.target.id, anxious1, anxious2);
    } else if (e.target.id === "moodswings") {
      this.changeIcon(e.target.id, moodswings1, moodswings2);
    } else if (e.target.id === "irritated") {
      this.changeIcon(e.target.id, irritated, irritated2);
    } else if (e.target.id === "didnotOPK") {
      this.changeIcon(e.target.id, didnot, didnot2);
    } else if (e.target.id === "didnotSEX") {
      this.changeIcon(e.target.id, didnot, didnot2);
    } else if (e.target.id === "didnotCM") {
      this.changeIcon(e.target.id, didnot, didnot2);
    } else if (e.target.id === "positive") {
      this.changeIcon(e.target.id, positive, positive2);
    } else if (e.target.id === "negative") {
      this.changeIcon(e.target.id, negative, negative2);
    } else if (e.target.id === "unprotectedSex") {
      this.changeIcon(e.target.id, unprotectedSex, unprotectedSex2);
    } else if (e.target.id === "spotting") {
      this.changeIcon(e.target.id, spotting, spotting2);
    } else if (e.target.id === "sticky") {
      this.changeIcon(e.target.id, sticky, sticky2);
    } else if (e.target.id === "eggwhite") {
      this.changeIcon(e.target.id, eggwhite, eggwhite2);
    } else if (e.target.id === "watery") {
      this.changeIcon(e.target.id, watery, watery2);
    } else if (e.target.id === "unusual") {
      this.changeIcon(e.target.id, unusual, unusual2);
    } else if (e.target.id === "pregpositive") {
      this.changeIcon(e.target.id, pregpositive, pregpositive2);
    } else if (e.target.id === "pregnegative") {
      this.changeIcon(e.target.id, pregnegative, pregnegative2);
    } else if (e.target.id === "protectedSex") {
      this.changeIcon(e.target.id, protectedSex, protectedSex2);
    } else if (e.target.id === "allgood") {
      this.changeIcon(e.target.id, allgood, allgood2);
    } else if (e.target.id === "cramps") {
      this.changeIcon(e.target.id, cramps, cramps2);
    } else if (e.target.id === "tenderbreasts") {
      this.changeIcon(e.target.id, tenderbreasts, tenderbreasts2);
    } else if (e.target.id === "headache") {
      this.changeIcon(e.target.id, headache, headache2);
    } else if (e.target.id === "backache") {
      this.changeIcon(e.target.id, backache, backache2);
    } else if (e.target.id === "fatigue") {
      this.changeIcon(e.target.id, fatigue, fatigue2);
    } else if (e.target.id === "diarrhea") {
      this.changeIcon(e.target.id, diarrhea, diarrhea2);
    } else if (e.target.id === "cravings") {
      this.changeIcon(e.target.id, cravings, cravings2);
    } else if (e.target.id === "insomnia") {
      this.changeIcon(e.target.id, insomnia, insomnia2);
    } else if (e.target.id === "happy") {
      this.changeIcon(e.target.id, happy, happy2);
    } else if (e.target.id === "calm") {
      this.changeIcon(e.target.id, calm, calm2);
    } else if (e.target.id === "sad") {
      this.changeIcon(e.target.id, sad, sad2);
    } else if (e.target.id === "confused") {
      this.changeIcon(e.target.id, confused, confused2);
    } else if (e.target.id === "apathetic") {
      this.changeIcon(e.target.id, apathetic, apathetic2);
    } else if (e.target.id === "depressed") {
      this.changeIcon(e.target.id, depressed, depressed2);
    } else if (e.target.id === "flow1") {
      this.toggleOff(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite
      );
      this.toggleOn(["flow1"], flowIconWhite, flowIconRed);
    } else if (e.target.id === "flow2") {
      this.toggleOff(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite
      );
      this.toggleOn(["flow1", "flow2"], flowIconWhite, flowIconRed);
    } else if (e.target.id === "flow3") {
      this.toggleOff(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite
      );
      this.toggleOn(["flow1", "flow2", "flow3"], flowIconWhite, flowIconRed);
    } else if (e.target.id === "flow4") {
      this.toggleOff(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite
      );
      this.toggleOn(
        ["flow1", "flow2", "flow3", "flow4"],
        flowIconWhite,
        flowIconRed
      );
    } else if (e.target.id === "flow5") {
      this.toggleOff(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite
      );
      this.toggleOn(
        ["flow1", "flow2", "flow3", "flow4", "flow5"],
        flowIconWhite,
        flowIconRed
      );
    }
  };

  changeIcon = (name, item1, item2) => {
    if (this.state[name] === item2) {
      this.setState({ [name]: item1 });
    } else {
      this.setState({ [name]: item2 });
    }
  };

  toggleOff = (arr, item1) => {
    arr.forEach(key => this.setState({ [key]: item1 }));
  };

  toggleOn = (arr, item1, item2) => {
    //arr.forEach(key => this.changeIcon(key, item1, item2));
    arr.forEach(key => this.setState({ [key]: item2 }));
  };
}

export default input;
