import React, { memo } from 'react';
import { Loading } from '@/components/index';
const LoadingDemo = props => {
  return (
    <div>
      <div>
        <Loading color='red' vertical={true}>
          加载中...
        </Loading>
        <Loading color='green' vertical={false} style={{ marginTop: 20 }}>
          加载中...
        </Loading>
      </div>
    </div>
  );
};

export default memo(LoadingDemo);
