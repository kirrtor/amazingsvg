import "./arrow.less"
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useState } from "react";

let width = 30
let height = 120
let itemHeight = 10
let number = 3
let fillColor = "rgb(1,255,255)"
let borderColor = "rgb(1,255,255)"
let dep = "10"

const Arrow = (props) => {
  const [pointsArray, setPointsArray] = useState([])

  useEffect(() => {
    fillColor = props.fillColor && props.fillColor !== "" ? props.fillColor : fillColor
    borderColor = props.borderColor && props.borderColor !== "" ? props.borderColor : borderColor
    number = props.number && props.number !== "" ? props.number : number
    dep = props.dep && props.dep !== "" ? props.dep : dep
    itemHeight = props.itemHeight && props.itemHeight !== "" ? props.itemHeight : itemHeight

    creatPoints(30, 120, 15)

    anime({
      targets: '.ams-arrow g',
      scaleX: -1,
      translateY: dep + 'px',
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    })

    const svg = document.querySelector('.ams-arrow')

    const resizeObserver = new ResizeObserver(() => {
      let svgW = svg.offsetWidth
      let svgH = svg.offsetHeight
      let svgWB = svgW / 2;
      creatPoints(svgW, svgH, svgWB)
    });

    resizeObserver.observe(svg);
  }, [])


  const creatPoints = (svgW, svgH, svgWB) => {
    let pointsList = []
    for (let i = 0; i < number; i++) {
      if (i === 0) {
        pointsList.push((svgWB + "," + (svgH - dep) + " 0," + (svgH - dep - itemHeight * 2) + " 0," + (svgH - dep - itemHeight * 3) + " " +
          svgWB + "," + (svgH - dep - itemHeight) + " " + svgW + "," + (svgH - dep - itemHeight * 3) + " " + svgW + "," + (svgH - dep - itemHeight * 2)));
      } else {
        pointsList.push((svgWB + "," + ((svgH - dep) - i * itemHeight * 2) + " 0," + ((svgH - dep - itemHeight * 2) - i * itemHeight * 2) + " 0," + ((svgH - dep - itemHeight * 3) - i * itemHeight * 2) + " " +
          svgWB + "," + ((svgH - dep - itemHeight) - i * itemHeight * 2) + " " + svgW + "," + ((svgH - dep - itemHeight * 3) - i * itemHeight * 2) + " " + svgW + "," + ((svgH - dep - itemHeight * 2) - i * itemHeight * 2)));
      }
      // if (i === 0) {
      //   pointsList.push((svgWB + "," + (svgH - dep) + " 0," + (svgH - dep - 20) + " 0," + (svgH - dep - 30) + " " +
      //     svgWB + "," + (svgH - dep - 10) + " " + svgW + "," + (svgH - dep - 30) + " " + svgW + "," + (svgH - dep - 20)));
      // } else {
      //   pointsList.push((svgWB + "," + ((svgH - dep) - i * 20) + " 0," + ((svgH - dep - 20) - i * 20) + " 0," + ((svgH - dep - 30) - i * 20) + " " +
      //     svgWB + "," + ((svgH - dep - 10) - i * 20) + " " + svgW + "," + ((svgH - dep - 30) - i * 20) + " " + svgW + "," + ((svgH - dep - 20) - i * 20)));
      // }
    }
    setPointsArray(pointsList);
  }

  return (
    <div className="ams-arrow" style={{ 'width': props.width ?? width + "px", 'height': props.height ?? height + "px" }}>
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id="ams-arrow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor={fillColor} stopOpacity="0" />
            <stop offset="90%" stopColor={fillColor} stopOpacity="1" />
          </linearGradient>
        </defs>
        <g fill="url(#ams-arrow-gradient)">
          {
            pointsArray.map((item, index) => {
              return (
                <polygon key={index} stroke={borderColor} strokeWidth="1" points={item} />
              )
            })
          }
          {/* <polygon stroke={borderColor} strokeWidth="1" points="15,110 0,90 0,80 15,100 30,80 30,90" />
          <polygon stroke={borderColor} strokeWidth="1" points="15,90 0,70 0,60 15,80 30,60 30,70" />
          <polygon stroke={borderColor} strokeWidth="1" points="15,70 0,50 0,40 15,60 30,40 30,50" />
          <polygon stroke={borderColor} strokeWidth="1" points="15,50 0,30 0,20 15,40 30,20 30,30" />
          <polygon stroke={borderColor} strokeWidth="1" points="15,30 0,10 0,0 15,20 30,0 30,10" /> */}
        </g>
      </svg>
    </div>
  )
}
export default Arrow;