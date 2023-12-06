
import React, { useEffect, useState } from "react";
import "./mapPath.less"

const MapPath = (props) => {
  const [linePath, setLinePath] = useState([]);

  useEffect(() => {
    createLinePath()
  }, [])

  const createLinePath = () => {
    let pintDoms = document.querySelectorAll('[id^="ams-map-path-point"]');
    let path = "M"
    if (pintDoms.length) {
      for (let i = 0; i < pintDoms.length; i++) {
        let point = document.querySelector("#ams-map-path-point" + (i + 1))
        if (i === 0) {
          path += ((point.offsetLeft + "," + point.offsetTop) ?? "0,0")
        } else if (i < pintDoms.length - 1) {
          path += "L" + ((point.offsetLeft + "," + point.offsetTop) ?? "0,0")
        } else {
          path += "L" + ((point.offsetLeft + "," + point.offsetTop) ?? "0,0") +
            "M" + ((point.offsetLeft + "," + point.offsetTop) ?? "0,0") +
            "z"
        }
      }
      setLinePath(path)
    }
  }

  return (
    <>
      <svg id={props.id} className={"ams-svg-map-path" + (props.className ? " " + props.className : "")}>
        <defs>
          <path id="ams-map-path-light"
            d={linePath}
            fill="transparent" />
          <radialGradient id="ams-map-path-border-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={props.gradientColor ?? "yellow"} stopOpacity="1"></stop>
            <stop offset="100%" stopColor={props.gradientColor ?? "yellow"} stopOpacity="0"></stop>
          </radialGradient>
        </defs>
        <mask id="ams-map-path-border-mask">
          <circle cx="0" cy="0" r={props.r ?? 50} fill="url(#ams-map-path-border-gradient)">
            {
              linePath ? <animateMotion dur={props.dur ?? "3s"} path={linePath} rotate="auto" repeatCount="indefinite"></animateMotion> : null
            }
          </circle>
        </mask>
        {
          props.isPathAnimate ? null :
            <use stroke={props.color ?? "yellow"} strokeWidth={props.strokeWidth ?? 5} href="#ams-map-path-light" mask={props.isMask ? "url(#ams-map-path-border-mask)" : ""} >
              <animate attributeName="stroke-dasharray" from={props.from ?? "0,1200"} to={props.to ?? "1200,0"} dur={props.dur ?? "3s"} repeatCount="indefinite"></animate>
            </use>
        }
        {
          props.isPath ?
            <use stroke={props.color ?? "yellow"} strokeWidth={props.strokeWidth ?? 5} href="#ams-map-path-light" /> : null
        }
      </svg>
    </>
  )
}

export default MapPath;