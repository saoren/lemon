/*
 * @Author: L.柠
 * @Date: 2022-02-22 23:03:53
 */
import React from 'react'
import { Spin } from 'antd';

import './loading.less'
function Loading() {
  return (
    <div className='Loading'>
        <Spin tip='Loading...' size='large'/>
    </div>
  )
}

export default Loading