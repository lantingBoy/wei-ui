import React from 'react';
import { classnames } from '../_utils/index';
import './index.less';

export interface CellProps {
  title: React.ReactNode;
  label: React.ReactNode;
  arrow: 'left' | 'right' | 'top' | 'none';
  className: string;
  center: boolean;
  clickable: boolean;
}
const Cell: React.FC<Partial<CellProps>> = props => {
  const { title, label, center, className, clickable, arrow } = props;
  console.log('arrow', arrow);
  return (
    <div
      className={classnames({
        'wei-cell': true,
        [className]: className,
        'wei-cell-center': center,
        'wei-cell-clickable': clickable
      })}
    >
      <div className={'wei-cell-title'}>
        <div>{title}</div>
        {label !== undefined && <div className={'wei-cell-label'}>{label}</div>}
      </div>
    </div>
  );
};

Cell.defaultProps = {
  arrow: 'none'
};

export default Cell;
