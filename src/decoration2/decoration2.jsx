import React from "react";
import "./decoration2.less"

const Decoration2 = (props) => {

  return (
    <>
      <div key={props.key} id={props.id} className={"ams-decoration" + (props.className ? " " + props.className : "")} style={{ 'width': props.width ?? '150px', 'height': props.height ?? '150px' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100">

          <defs>
            <linearGradient id="ams-decoration-gradient" x1="0%" y1="0%" x2="100%" y2="0%" >
              <stop offset="60%" stopColor="transparent" stopOpacity="0" />
              <stop offset="70%" stopColor={props.outColor ?? "rgb(1,255,255)"} stopOpacity="0.1" />
              <stop offset="80%" stopColor={props.outColor ?? "rgb(1,255,255)"} stopOpacity="0.3" />
              <stop offset="95%" stopColor={props.outColor ?? "rgb(1,255,255)"} stopOpacity="0.4" />
              <stop offset="100%" stopColor={props.outColor ?? "rgb(1,255,255)"} stopOpacity="1" />
            </linearGradient>
            <linearGradient id="ams-decoration-gradient1">
              <stop offset="40%" stopColor={props.insideColor ?? "rgb(1,255,255)"} stopOpacity="1" />
              <stop offset="70%" stopColor={props.insideColor ?? "rgb(1,255,255)"} stopOpacity="0.3" />
              <stop offset="80%" stopColor={props.insideColor ?? "rgb(1,255,255)"} stopOpacity="0.2" />
              <stop offset="90%" stopColor={props.insideColor ?? "rgb(1,255,255)"} stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="ams-decoration-gradient2">
              <stop offset="60%" stopColor={props.lineColor ?? "rgb(1,255,255)"} stopOpacity="1" />
              <stop offset="70%" stopColor={props.lineColor ?? "rgb(1,255,255)"} stopOpacity="0.5" />
              <stop offset="90%" stopColor={props.lineColor ?? "rgb(1,255,255)"} stopOpacity="0.1" />
              <stop offset="100%" stopColor={props.lineColor ?? "rgb(1,255,255)"} stopOpacity="0" />
            </linearGradient>
          </defs>

          <g>
            <circle cx="50" cy="50" r="45" fill="transparent" stroke={props.outColor ?? "rgb(1,255,255)"} strokeWidth="4" strokeDasharray={100 * 3.1415926}
              strokeDashoffset={100 * 3.1415926 / 360 * -(360 - 110)}
              transform="rotate(-60 50 50)" />
            <circle cx="50" cy="50" r="45" fill="transparent" stroke={props.outColor ?? "rgb(1,255,255)"} strokeWidth="4" strokeDasharray={100 * 3.1415926}
              strokeDashoffset={100 * 3.1415926 / 360 * -(360 - 160)}
              transform="rotate(200 50 50)" />
            <circle cx="76" cy="14" r="1" fill={props.outColor ?? "rgb(1,255,255)"} />
            <circle cx="80" cy="17" r="1" fill={props.outColor ?? "rgb(1,255,255)"} />
            <circle cx="84" cy="21" r="1" fill={props.outColor ?? "rgb(1,255,255)"} />
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#ams-decoration-gradient)" strokeWidth="4" strokeDasharray={100 * 3.1415926}
              strokeDashoffset={100 * 3.1415926 / 360 * -(360 - 100)}
              transform="rotate(36 50 50)" />
            <circle cx="75" cy="88" r="2" fill={props.outColor ?? "rgb(1,255,255)"} />
            <circle cx="80" cy="84" r="2" fill={props.outColor ?? "rgb(1,255,255)"} />
            <circle cx="84" cy="80" r="2" fill={props.outColor ?? "rgb(1,255,255)"} />
            <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="3s" repeatCount="indefinite"></animateTransform>
          </g>

          <g>
            <circle cx="50" cy="50" r="35" fill="transparent" stroke={props.insideColor ?? "rgb(1,255,255)"} strokeWidth="8" strokeDasharray={80 * 3.1415926}
              strokeDashoffset={150 * 3.1415926 / 360 * -(360 - 110)}
              transform="rotate(90 50 50)" />
            <circle cx="50" cy="50" r="35" fill="transparent" stroke="url(#ams-decoration-gradient1)" strokeWidth="8" strokeDasharray={80 * 3.1415926}
              strokeDashoffset={150 * 3.1415926 / 360 * -(360 - 110)}
              transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="35" fill="transparent" stroke={props.insideColor ?? "rgb(1,255,255)"} strokeWidth="8" strokeDasharray={98 * 3.1415926}
              strokeDashoffset={150 * 3.1415926 / 360 * -(360 - 110)}
              transform="rotate(45 50 50)" />
            <circle cx="50" cy="50" r="35" fill="transparent" stroke={props.insideColor ?? "rgb(1,255,255)"} strokeWidth="8" strokeDasharray={98 * 3.1415926}
              strokeDashoffset={150 * 3.1415926 / 360 * -(360 - 110)}
              transform="rotate(-135 50 50)" />
            <circle cx="50" cy="50" r="40.5" fill="transparent" stroke="url(#ams-decoration-gradient2)" />
            <animateTransform attributeName="transform" type="rotate" values="0 50 50;-360 50 50" dur="3s" repeatCount="indefinite"></animateTransform>
          </g>
        </svg>
        <div className="ams-decoration-icon">
          <img alt="" src={props.imgSrc}></img>
        </div>
      </div>
    </>
  )
}

export default Decoration2;