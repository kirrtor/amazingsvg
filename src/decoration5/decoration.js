import { useEffect } from "react";
import "./decoration.css"

let point1 = ""
let point2 = ""
let point3 = ""
let point1From = ""
let point1To = ""
let point2From = ""
let point2To = ""
let point3From = ""
let point3To = ""

const Decoration = (props) => {
  useEffect(() => {
    const svg = document.querySelector('.dv-decoration-5');
    if (svg.offsetWidth !== 0) {

      let speed1 = (svg.offsetLeft + svg.offsetWidth / 1.9)
      let speed2 = (svg.offsetLeft + svg.offsetWidth / 2.4)

      let t = (svg.offsetLeft + svg.offsetWidth * 0.6 / 2);
      let f = (svg.offsetLeft + svg.offsetWidth * 1.18 / 2);

      point1 = "0,2.5," + t + ",2.5," + (t + t * 0.1) + "," + (svg.offsetHeight * 0.8) + "," +
        (f + f * 0.12) + "," + (svg.offsetHeight * 0.8) + "," +
        (f + f * 0.18) + ",2.5," +
        (svg.offsetLeft + svg.offsetWidth) + ",2.5"

      point1From = "0," + speed1 + ",0," + speed1
      point1To = "0,0," + speed1 * 2 + ",0"

      point2 = (svg.offsetLeft + svg.offsetWidth * 0.75 / 2) + "," + (svg.offsetHeight - 5.5) + "," + (svg.offsetLeft + svg.offsetWidth * 1.25 / 2) + "," + (svg.offsetHeight - 5.5)
      point2From = "0, " + svg.offsetWidth * 0.25 / 2 + ",0," + svg.offsetWidth * 0.25 / 2
      point2To = "0, 0," + svg.offsetWidth * 0.25 + ", 0"

      point3 = (svg.offsetLeft + svg.offsetWidth * 0.08) + "," + svg.offsetHeight * 0.55 + "," +
        (svg.offsetLeft + svg.offsetWidth * 0.6410 / 2) + "," + svg.offsetHeight * 0.55 + "," +
        (t + t * 0.1) + "," + (svg.offsetHeight * 0.8) + "," +
        (f + f * 0.12) + "," + (svg.offsetHeight * 0.8) + "," +
        (svg.offsetLeft + svg.offsetWidth * 1.345 / 2) + "," + svg.offsetHeight * 0.55 + "," +
        (svg.offsetLeft + svg.offsetWidth * 0.9) + "," + svg.offsetHeight * 0.55

      point3From = "0," + speed2 + ",0," + speed2
      point3To = "0,0," + speed2 * 2 + ",0"

      console.log(svg.offsetWidth, svg.offsetHeight);
    }

  }, [])

  return (
    <>
      <div className="dv-decoration-5" style={{ width: props.width ?? "100vw", height: props.height ?? "80px" }}>
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="decoration5-gradient1">
              <stop offset="10%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.1" />
              <stop offset="20%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.5" />
              <stop offset="40%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.8" />
              <stop offset="90%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="1" />
            </linearGradient>
            <linearGradient id="decoration5-gradient2">
              <stop offset="10%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.1" />
              <stop offset="20%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.4" />
              <stop offset="40%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="0.6" />
              <stop offset="90%" stopColor={props.color ?? "rgb(1,255,255)"} stopOpacity="1" />
            </linearGradient>
          </defs>
          <polyline fill="transparent" stroke="url(#decoration5-gradient1)" strokeWidth="5"
            points={point1}
          >
            <animate attributeName="stroke-dasharray" attributeType="XML" from={point1From} to={point1To} dur="2.2s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines=".4,1,.49,.98" repeatCount="indefinite"></animate>
          </polyline>
          <polyline fill="transparent" stroke="url(#decoration5-gradient2)" strokeWidth="5"
            points={point3}
          >
            <animate attributeName="stroke-dasharray" attributeType="XML" from={point3From} to={point3To} dur="2.2s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines=".4,1,.49,.98" repeatCount="indefinite"></animate>
          </polyline>
          <polyline fill="transparent" stroke={props.color ?? "rgb(1,255,255)"} strokeWidth="3" points={point2} >
            <animate attributeName="stroke-dasharray" attributeType="XML" from={point2From} to={point2To} dur="2.2s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines=".4,1,.49,.98" repeatCount="indefinite"></animate>
          </polyline>
        </svg>
      </div>
    </>
  )
}
export default Decoration;