// import React from "react";
// import "./Cover.css";
// import coverVideo from "../../media/coverVideo.mp4";

// const Cover = () => {
//   return (
//     <div className="cover-container">
//       <video className="video" src={coverVideo} autoPlay loop muted />
//       <h2>Senait Alemayehu</h2>
//       <p> Fullstack Developer</p>
//     </div>
//   );
// };

// export default Cover
import React from 'react'
import "./Cover.css";
import coverVideo from "../componants/media/coverVideo.mp4";

function Cover() {
  return (
    <div className="cover-container">
          <video className="video" src={coverVideo} autoPlay loop muted />
          <h2>Senait Alemayehu</h2>
         <p> Fullstack web Developer / Mearn Stack</p>
    </div>
  )
}

export default Cover