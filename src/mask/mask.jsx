import React, { useEffect, useState } from "react";
import "./mask.less"

let color = "rgb(1,255,255)"
let lightFrom = ""
let lightTo = ""
let isRadius = false //是否启用圆角
let lightColor = "#fff"

const Mask = (props, ref) => {

  const [borderPath, setBorderPath] = useState('');

  useEffect(() => {
    let borderBox = document.querySelector('.ams-border-box-8')
    isRadius = props.isRadius
    if (isRadius) {
      // borderBox.offsetHeight * 0.1 为圆角处圆半径可进一步封装
      setBorderPath("M" + borderBox.offsetHeight * 0.1 + ",2.5 L" + (borderBox.offsetWidth - (2.5 + borderBox.offsetHeight * 0.1)) + ",2.5,A" +
        borderBox.offsetHeight * 0.1 + " " + borderBox.offsetHeight * 0.1 + " 0 0 1" + (borderBox.offsetWidth - 2.5) + " " + borderBox.offsetHeight * 0.1 +
        "L" + (borderBox.offsetWidth - 2.5) + "," + (borderBox.offsetHeight - (2.5 + borderBox.offsetHeight * 0.1)) + "A" +
        borderBox.offsetHeight * 0.1 + " " + borderBox.offsetHeight * 0.1 + " 0 0 1" +
        (borderBox.offsetWidth - (2.5 + borderBox.offsetHeight * 0.1)) + " " + (borderBox.offsetHeight - 2.5) + "L" +
        borderBox.offsetHeight * 0.1 + "," + (borderBox.offsetHeight - 2.5) + "A" +
        borderBox.offsetHeight * 0.1 + " " + borderBox.offsetHeight * 0.1 + " 0 0 1 2.5 " +
        (borderBox.offsetHeight - (2.5 + borderBox.offsetHeight * 0.1)) + "L 2.5," +
        borderBox.offsetHeight * 0.1 + "A" +
        borderBox.offsetHeight * 0.1 + " " + borderBox.offsetHeight * 0.1 + " 0 0 1 " +
        borderBox.offsetHeight * 0.1 + " 2.5"
      )
    } else {
      setBorderPath("M 2.5,2.5 L" + (borderBox.offsetWidth - 2.5) + ",2.5,L" +
        (borderBox.offsetWidth - 2.5) + "," + (borderBox.offsetHeight - 2.5) + ",L2.5," +
        (borderBox.offsetHeight - 2.5) + ",L2.5,2.5")
    }

    lightFrom = "0,2023"
    lightTo = "2023,0"

    color = props.color && props.color !== "" ? props.color : color
    lightColor = props.lightColor && props.lightColor !== "" ? props.lightColor : lightColor
  }, [])

  return (
    <>
      <div className="ams-border-box-8" style={{ width: props.width ?? "50vw", height: props.height ?? "30vh" }}>
        <svg className="ams-border-svg-container" width="100%" height="100%">
          <defs>
            <path id="ams-border-box-8-path"
              d={borderPath}
              fill="transparent">
            </path>
            <radialGradient id="ams-border-box-8-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={lightColor} stopOpacity="1"></stop>
              <stop offset="100%" stopColor={lightColor} stopOpacity="0"></stop>
            </radialGradient>
            <linearGradient id="ams-border-box-8-gradient-inside" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="20%" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="80%" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="100%" stopColor="#fff" stopOpacity="0.12"></stop>
            </linearGradient>
            <mask id="ams-border-box-8-mask">
              <circle cx="0" cy="0" r="150" fill="url(#ams-border-box-8-gradient)">
                <animateMotion dur="3s" path={borderPath} rotate="auto" repeatCount="indefinite"></animateMotion>
              </circle>
            </mask>
            <mask id="ams-inside-mask">
              <path d={borderPath} fill={lightColor}></path >
            </mask>
          </defs>

          <path fill="url(#ams-border-box-8-gradient-inside)" d={borderPath} mask="url(#ams-inside-mask)"></path>

          <use stroke={color} strokeWidth="2" href="#ams-border-box-8-path"></use>
          <use stroke={lightColor} strokeWidth="3" href="#ams-border-box-8-path" mask="url(#ams-border-box-8-mask)">
            <animate attributeName="stroke-dasharray" from={lightFrom} to={lightTo} dur="3s" repeatCount="indefinite"></animate>
          </use>
        </svg>
      </div>
    </>
  )
}
export default Mask;