import React from 'react';
import Home from './page/Home';
import asyncComponent from './page/asyncComponent';
import { RouteConfig } from 'react-router-config';
import { NavBar } from '@/components/index';
import { useHistory } from 'react-router-dom';

const ButtonDemo = asyncComponent(() => import('./page/Button'));

const RippleDemo = asyncComponent(() => import('./page/Ripple'));

const LoadingDemo = asyncComponent(() => import('./page/Loading'));

const CellDemo = asyncComponent(() => import('./page/Cell'));

const IconDemo = asyncComponent(() => import('./page/Icon'));

let routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/button',
    component: ButtonDemo
  },
  {
    path: '/loading',
    component: LoadingDemo
  },
  {
    path: '/ripple',
    component: RippleDemo
  },
  {
    path: '/cell',
    component: CellDemo
  },
  {
    path: '/icon',
    component: IconDemo
  }
];
// 用div将懒加载的代码包裹起来，防止路由动画不起作用
routes = routes.map(i => ({
  ...i,
  component: props => {
    const history = useHistory();
    return (
      <div className='page-box'>
        {i.path !== '/' && (
          <NavBar
            fixed
            placeholder
            leftArrow
            title={(i.path as string).replace('/', '')}
            onClickLeft={history.goBack}
          />
        )}
        <i.component {...props} />
      </div>
    );
  }
}));
export default routes;
