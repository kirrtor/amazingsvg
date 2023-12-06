import { ReactNode } from 'react';

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

export function Arrow(props: ArrowProps): JSX.Element;


interface Decoration2Props {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  outColor?: string;
  insideColor?: string;
  lineColor?: string;
}

export function Decoration2(props: Decoration2Props): JSX.Element;


interface Decoration5Props {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export function Decoration5(props: Decoration5Props): JSX.Element;


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

export function EnergyBar(props: EnergyBarProps): JSX.Element;


interface MaskProps {
  id?: ReactNode;
  className?: ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
  isRadius?: boolean;
  lightColor?: string;
}

export function Mask(props: MaskProps): JSX.Element;
