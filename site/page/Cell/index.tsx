import React from 'react';
import { Cell } from '@/components';
import './index.less';

function CellDemo() {
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell title='标题' label='带点击反馈' center clickable>
        居中内容
      </Cell>
      <Cell title='标题'>
        <div>个人中心</div>
      </Cell>
      <div className='demo-block__title'>展示箭头</div>
      <Cell title='标题' arrow='right' clickable>
        个人中心
      </Cell>
      <Cell title='标题' arrow='down' clickable>
        个人中心
      </Cell>
      <div className='demo-block__title'>水波纹</div>
      <Cell title='标题' arrow='right' ripple></Cell>
      <Cell title='标题' arrow='right' ripple>
        水波纹好看
      </Cell>
    </div>
  );
}

export default CellDemo;
