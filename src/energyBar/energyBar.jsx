import React, { useEffect, useState } from "react"
import "./energyBar.less"

let number = 10
let strokeWidth = 3
let width = 300
let height = 20
let fillColor = "rgba(3, 166, 224, 0.1)"
let fromColor = "rgba(3, 166, 224, 1)"
let toColor = "rgba(3, 166, 224, 0)"
let borderColor = "rgb(1,255,255)"
let itemWidth = 15
let space = 15
let speed = 1

const EnergyBar = (props) => {
  const [pointsArray, setPointsArray] = useState([])

  useEffect(() => {
    number = props.number && props.number !== "" ? parseInt(props.number) : number
    fillColor = props.color && props.color !== "" ? props.color : fillColor
    fromColor = props.fromColor && props.fromColor !== "" ? props.fromColor : fromColor
    toColor = props.toColor && props.toColor !== "" ? props.toColor : toColor
    borderColor = props.borderColor && props.borderColor !== "" ? props.borderColor : borderColor
    itemWidth = props.itemWidth && props.itemWidth !== "" ? parseInt(props.itemWidth) : itemWidth
    space = props.space && props.space !== "" ? parseInt(props.space) : space
    strokeWidth = props.strokeWidth && props.strokeWidth !== "" ? parseInt(props.strokeWidth) : strokeWidth
    speed = props.speed && props.speed !== "" ? props.speed : speed

    creatPoints(width, height, number, space, itemWidth)

    const svg = document.querySelector('.ams-energyBar')
    const resizeObserver = new ResizeObserver(() => {
      let svgW = svg.offsetWidth
      let svgH = svg.offsetHeight
      creatPoints(svgW, svgH, number, space, itemWidth)
    })
    resizeObserver.observe(svg);
  }, [])

  const creatPoints = (svgW, svgH, number, space, itemWidth) => {
    let pointsList = []
    for (let i = 0; i < number; i++) {
      if (i === 0) {
        pointsList.push(svgW + ",0," + (svgW - itemWidth) + "," + svgH + "," +
          (svgW - itemWidth * 2) + "," + svgH + "," + (svgW - itemWidth) + ",0")
      } else {
        pointsList.push((svgW - i * (itemWidth + space)) + ",0," + (svgW - ((i + 1) * itemWidth + i * space)) + "," + svgH + "," +
          (svgW - ((i + 2) * itemWidth + i * space)) + "," + svgH + "," + (svgW - ((i + 1) * itemWidth + i * space)) + ",0")
      }
    }
    setPointsArray(pointsList)
  }

  return (
    <>
      {/* svg标签无法直接使用margin：0 auto */}
      <div id={props.id} className={"ams-energyBar" + (props.className ? " " + props.className : "")} style={{ 'width': props.width ?? width + "px", 'height': props.height ?? height + "px" }}>
        <svg width="100%" height="100%">
          <defs>
            {
              pointsArray.map((item, index) => {
                return (
                  <polygon key={index} id={"ams-energyBar-point" + (index + 1)} points={item}></polygon>
                )
              })
            }
            {/* <polygon id="energyBar-point1" points="255, 0, 240, 16, 225 ,16 , 240 ,0"></polygon>
            <polygon id="energyBar-point2" points="230, 0, 215, 16, 200, 16, 215, 0"></polygon>
            <polygon id="energyBar-point3" points="205, 0, 190, 16, 175, 16, 190, 0"></polygon>
            <polygon id="energyBar-point4" points="180, 0, 165, 16, 150, 16, 165, 0"></polygon>
            <polygon id="energyBar-point5" points="155, 0, 140, 16, 125, 16, 140, 0"></polygon>
            <polygon id="energyBar-point6" points="130, 0, 115, 16, 100, 16, 115, 0"></polygon>
            <polygon id="energyBar-point7" points="105, 0, 90, 16, 75, 16, 90, 0"></polygon>
            <polygon id="energyBar-point8" points="80, 0, 65, 16, 50, 16, 65, 0"></polygon>
            <polygon id="energyBar-point9" points="55, 0, 40, 16, 25, 16, 40, 0"></polygon>
            <polygon id="energyBar-point10" points="30, 0, 15, 16, 0, 16, 15, 0"></polygon> */}
          </defs>

          {
            pointsArray.map((item, index) => {
              return (
                <use key={index} href={"#ams-energyBar-point" + (index + 1)} strokeWidth={strokeWidth} stroke={borderColor} fill={fillColor}>
                  <animate attributeName="fill" from={fromColor} to={toColor} dur={speed + "s"} begin={(0 + index * 0.1) / speed + "s;"} repeatCount="indefinite" ></animate>
                </use>
              )
            })
          }

          {/* <use href="#energyBar-point1" stroke={borderColor} fill={fillColor}>
            <animate attributeName="fill" from={fromColor} to={toColor} dur={speed + "s"} begin="0s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point2" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.1s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point3" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.2s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point4" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.3s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point5" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.4s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point6" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.5s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point7" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.6s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point8" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.7s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point9" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.8s;" repeatCount="indefinite" ></animate>
          </use>
          <use href="#energyBar-point10" stroke="rgb(1,255,255)" fill="rgba(3, 166, 224, 0.1)">
            <animate attributeName="fill" from="rgba(3, 166, 224, 1)" to="rgba(3, 166, 224, 0)" dur={speed + "s"} begin="0.9s;" repeatCount="indefinite" ></animate>
          </use> */}
        </svg>
      </div>
    </>
  )

}
export default EnergyBar;