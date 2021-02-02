import React from 'react';
import { Ripple, Icon, Loading } from '../index';
import { classnames } from '../_utils/index';
import './index.less';

export interface ButtonProps {
  disabled?: boolean;
  inline?: boolean; // 是否是行内按钮
  loading?: boolean;
  ripple?: boolean;
  round?: boolean;
  icon?: string;
  type?: 'primary' | 'warning' | 'ghost' | 'default';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Button(props: ButtonProps) {
  const {
    disabled,
    inline,
    loading,
    ripple,
    round,
    icon,
    type,
    className,
    style,
    children
  } = props;

  const cls = {
    'wei-button': true,
    [className]: className,
    [`wei-button-${type}`]: type,
    'wei-button-disabled': disabled,
    'wei-button-inline': inline,
    'wei-button-round': round
  };
  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (loading || disabled) {
      return;
    }
    props.onClick(event);
  }
  return (
    <div className={classnames(cls)} style={style} onClick={onClick}>
      {!disabled && !loading && ripple && <Ripple className={'wei-button-ripple'} />}
      {loading && <Loading size={24} className={'wei-button-loading'} />}
      {icon && <Icon className={'wei-button-icon'} type={icon} />}
      {children && <span className={'wei-button-text'}>{children}</span>}
    </div>
  );
}

Button.defaultProps = {
  ripple: false,
  type: 'default',
  onClick: () => undefined
};

export default Button;
