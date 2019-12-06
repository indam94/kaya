import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class input extends Component {
	constructor(props) {
    super(props);
    
    this.state = {

    }
	}

  render() {
    return (
      <>
      <h1>github test</h1>
      <Link to = "/main">
        Click
      </Link>
      </>
    )
    
  }
}

export default input

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Input.css";
// import CircleLeft from "../resources/top_circles.png";
// import CircleRight from "../resources/top_circles2.png";
// import questionMark from "../resources/question_mark.png";
// import positive from "../resources/Positive.png";
// import didnot from "../resources/did_not.png";
// import negative from "../resources/negative.png";
// import flowIconWhite from "../resources/flowIconWhite.png";
// import protectedSex from "../resources/protectedsex.png";
// import unprotectedSex from "../resources/unprotectedsex.png";
// import fahrenheit from "../resources/Fahrenheit.png";
// import sticky from "../resources/Sticky.png";
// import spotting from "../resources/Spotting.png";
// import eggwhite from "../resources/Eggwhite.png";
// import watery from "../resources/watery.png";
// import unusual from "../resources/unusual.png";
// import pregpositive from "../resources/pregpositive.png";
// import pregnegative from "../resources/pregnegative.png";
// import allgood from "../resources/All_good.png";
// import cramps from "../resources/Cramps.png";
// import tenderbreasts from "../resources/Tender.png";
// import headache from "../resources/headache.png";
// import backache from "../resources/Backache.png";
// import fatigue from "../resources/Fatigue.png";
// import diarrhea from "../resources/Diarrhea.png";
// import cravings from "../resources/Cravings.png";
// import insomnia from "../resources/Insomnia.png";
// import happy from "../resources/Happy.png";
// import calm from "../resources/calm.png";
// import sad from "../resources/sad.png";
// import confused from "../resources/confused.png";
// import apathetic from "../resources/apathetic.png";
// import depressed from "../resources/depressed.png";
// import irritated from "../resources/irritated.png";
// import moodswings from "../resources/moodswings.png";
// import anxious from "../resources/anxious.png";
// import faintline from "../resources/faintline.png";
// import moment from "moment";

// class input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cur: moment()
//     };
//   }

//   render() {
//     return (
//       <div className="main_screen">
//         <img
//           src={CircleLeft}
//           alt=""
//           style={{ width: 100, height: 100 }}
//           className="decorator_left"
//         />
//         <img
//           src={CircleRight}
//           alt=""
//           style={{ width: 100, height: 100 }}
//           className="decorator_right"
//         />
//         <div className="current_date">
//           <p
//             style={{
//               fontSize: "1.2rem",
//               textAlign: "center",
//               fontStyle: "normal",
//               color: "#56569D",
//               marginTop: "0.0rem",
//               marginBottom: "0.3rem"
//             }}
//           >
//             {this.state.cur.format("MMMM DD")}
//           </p>
//         </div>
//         <div className="input_title">
//           <p className="input_content"> OPK Test</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={didnot} alt="positive" />
//             <br />
//             Don't Take Test
//           </div>
//           <div>
//             <img src={positive} alt="positive" />
//             <br />
//             Positive
//           </div>
//           <div>
//             <img src={negative} alt="positive" />
//             <br />
//             Negative
//           </div>
//         </section>
//         <div className="input_title_2">
//           <p className="input_content_2"> Flow</p>
//         </div>
//         <section className="flow">
//           <div></div>
//           <div>
//             <img src={flowIconWhite} alt="positive" />
//           </div>
//           <div>
//             <img src={flowIconWhite} alt="positive" />
//           </div>
//           <div>
//             <img src={flowIconWhite} alt="positive" />
//           </div>
//           <div>
//             <img src={flowIconWhite} alt="positive" />
//           </div>
//           <div>
//             <img src={flowIconWhite} alt="positive" />
//           </div>
//           <div />
//           <div>Light</div>
//           <div />
//           <div />
//           <div />
//           <div />
//           <div />
//           <div>Heavy</div>
//         </section>
//         <div className="input_title">
//           <p className="input_content"> Sex</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={didnot} alt="positive" />
//             <br />
//             Didn't have sex
//           </div>
//           <div>
//             <img src={protectedSex} alt="positive" />
//             <br />
//             Protected sex
//           </div>
//           <div>
//             <img src={unprotectedSex} alt="positive" />
//             <br />
//             Unprotected sex
//           </div>
//         </section>
//         <div className="input_title_2">
//           <p className="input_content_2"> Temperature</p>
//         </div>

//         <div className="tempdiv">
//           <div>
//             <input
//               type="text"
//               class="form-control mb-2"
//               id="inlineFormInput"
//               placeholder=" _ _ , _ _ "
//             />
//           </div>
//           <div>
//             <img className="imgprop fsymbol" src={fahrenheit} alt="positive" />
//           </div>
//         </div>

//         <div className="input_title">
//           <p className="input_content"> Cervical mucus</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={didnot} alt="positive" />
//             <br />
//             No discharge
//           </div>
//           <div>
//             <img src={spotting} alt="positive" />
//             <br />
//             Spotting
//           </div>
//           <div>
//             <img src={sticky} alt="positive" />
//             <br />
//             Sticky
//           </div>
//           <div>
//             <img className="imgprop" src={eggwhite} alt="positive" />
//             <br />
//             Eggwhite
//           </div>
//           <div>
//             <img src={watery} alt="positive" />
//             <br />
//             Watery
//           </div>
//           <div>
//             <img src={unusual} alt="positive" />
//             <br />
//             Unusual
//           </div>
//         </section>
//         <div className="input_title_2">
//           <p className="input_content_2"> Pregnancy Test</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={pregpositive} alt="positive" />
//             <br />
//             Positive
//           </div>
//           <div>
//             <img src={pregnegative} alt="positive" />
//             <br />
//             Negative
//           </div>
//           <div>
//             <img src={faintline} alt="positive" />
//             <br />
//             Faint line
//           </div>
//         </section>
//         <div className="input_title">
//           <p className="input_content"> Symptoms</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={allgood} alt="positive" />
//             <br />
//             All good
//           </div>
//           <div>
//             <img src={cramps} alt="positive" />
//             <br />
//             Cramps
//           </div>
//           <div>
//             <img src={tenderbreasts} alt="positive" />
//             <br />
//             Tender breasts
//           </div>
//           <div>
//             <img className="imgprop" src={headache} alt="positive" />
//             <br />
//             Headache
//           </div>
//           <div>
//             <img src={backache} alt="positive" />
//             <br />
//             Backache
//           </div>
//           <div>
//             <img src={fatigue} alt="positive" />
//             <br />
//             Fatigue
//           </div>
//           <div>
//             <img className="imgprop" src={diarrhea} alt="positive" />
//             <br />
//             Diarrhea
//           </div>
//           <div>
//             <img src={cravings} alt="positive" />
//             <br />
//             Cravings
//           </div>
//           <div>
//             <img src={insomnia} alt="positive" />
//             <br />
//             Insomnia
//           </div>
//         </section>
//         <div className="input_title_2">
//           <p className="input_content_2">Moods</p>
//         </div>
//         <section className="positive">
//           <div>
//             <img className="imgprop" src={happy} alt="positive" />
//             <br />
//             Happy
//           </div>
//           <div>
//             <img src={calm} alt="positive" />
//             <br />
//             Calm
//           </div>
//           <div>
//             <img src={sad} alt="positive" />
//             <br />
//             Sad
//           </div>
//           <div>
//             <img className="imgprop" src={confused} alt="positive" />
//             <br />
//             Confused
//           </div>
//           <div>
//             <img src={apathetic} alt="positive" />
//             <br />
//             Apathetic
//           </div>
//           <div>
//             <img src={depressed} alt="positive" />
//             <br />
//             Depressed
//           </div>
//           <div>
//             <img className="imgprop" src={irritated} alt="positive" />
//             <br />
//             Irritated
//           </div>
//           <div>
//             <img align="middle" src={moodswings} alt="positive" />
//             <br />
//             Mood swings
//           </div>
//           <div>
//             <img src={anxious} alt="positive" />
//             <br />
//             Anxious
//           </div>
//         </section>
//         <div>
//           <a
//             class="btn btn-primary btn-lg btn-block"
//             href="/main"
//             role="button"
//           >
//             Save
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default input;