import React from 'react';
import { Icon, Ripple } from '@/components/index';
import { classnames } from '../_utils/index';
import './index.less';

export interface CellProps {
  title: React.ReactNode;
  label: React.ReactNode;
  arrow: 'left' | 'right' | 'up' | 'down' | 'none'; // 箭头方向
  className: string;
  center: boolean; // 上下居中
  clickable: boolean; // 是否开启点击反馈 点击高亮
  children: React.ReactNode;
  ripple: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style: React.CSSProperties;
}
const Cell: React.FC<Partial<CellProps>> = props => {
  const { title, label, center, style, className, clickable, arrow, children, ripple } = props;

  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.onClick(event);
  }
  return (
    <div
      className={classnames({
        'wei-cell': true,
        [className]: className,
        'wei-cell-center': center,
        'wei-cell-clickable': clickable
      })}
      style={style}
      onClick={onClick}
    >
      <div className={'wei-cell-title'}>
        <div>{title}</div>
        {label !== undefined && <div className={'wei-cell-label'}>{label}</div>}
      </div>
      <div className='wei-cell-value wei-ellipsis'>{children}</div>
      {arrow !== 'none' && <Icon className='arrow-icon' type={`arrow-${arrow}`} />}
      {ripple && <Ripple className='wei-cell-ripple' />}
    </div>
  );
};

Cell.defaultProps = {
  arrow: 'none',
  center: false,
  ripple: false,
  clickable: false,
  onClick: () => undefined
};

export default Cell;
