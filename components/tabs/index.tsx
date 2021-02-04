import React from 'react';
import * as CSS from 'csstype';

export interface TabsProps<T> {
  activeKey?: T;
  defaultActiveKey?: T;
  lineColor?: CSS.Property.Color;
  tabBarActiveTextColor?: CSS.Property.Color;
  tabBarInactiveTextColor?: CSS.Property.Color;
  tabBarPosition?: 'right' | 'left' | 'top' | 'bottom';
  animated?: boolean;
  forceRender?: boolean;
  children?: React.ReactNode;
  onChange?: (name: T, index: number) => unknown;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
}

function Tabs<T>(props: TabsProps<T>) {
  return <div>1</div>;
}

export default Tabs;
