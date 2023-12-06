import React, { ReactNode } from 'react';

interface ArrowProps {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  itemHeight?: number | string;
  number?: number | string;
  fillColor?: string;
  borderColor?: string;
  dep?: number | string;
}

// 声明函数组件类型
declare module 'Arrow' {
  const Arrow: React.FC<ArrowProps>;
  export default Arrow;
}
// // 声明组件的类型
// declare module 'Component1' {
//   export default class Component1 extends React.Component<Component1Props> {}
// }


interface Decoration2Props {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  outColor?: string;
  insideColor?: string;
  lineColor?: string;
}

declare module 'Decoration2' {
  const Decoration2: React.FC<Decoration2Props>;
  export default Decoration2;
}


interface Decoration5Props {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
}

declare module 'Decoration5' {
  const Decoration5: React.FC<Decoration5Props>;
  export default Decoration5;
}


interface EnergyBarProps {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  number?: number | string;
  strokeWidth?: number | string;
  fillColor?: string;
  fromColor?: string;
  toColor?: string;
  borderColor?: string;
  itemWidth?: number | string;
  space?: number | string;
  speed?: number | string;
}

declare module 'EnergyBar' {
  const EnergyBar: React.FC<EnergyBarProps>;
  export default EnergyBar;
}


interface MaskProps {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
  isRadius?: boolean;
  lightColor?: string;
}

declare module 'Mask' {
  const Mask: React.FC<MaskProps>;
  export default Mask;
}


interface MapPathProps {
  id?: ReactNode;
  className?: ReactNode;
  gradientColor?: string;
  dur?: number | string;
  r?: number | string;
  color?: string;
  strokeWidth?: number | string;
  from?: string;
  to?: string;
  isPathAnimate?: boolean;
  isMask?: boolean;
  isPath?: boolean;
}

declare module 'MapPath' {
  const MapPath: React.FC<MapPathProps>;
  export default MapPath;
}
