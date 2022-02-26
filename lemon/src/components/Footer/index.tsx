/*
 * @Author: L.柠
 * @Date: 2022-02-23 16:42:03
 */
import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import './style-footer.less'
function Footer() {
  return (
    <div className='footer'>
      <div className="author">© 2022 Lemon</div>
      <div ><a href="https://beian.miit.gov.cn/#/Integrated/index">浙ICP备2021001096号-1</a></div>
      <div className="theme">Hard work can change everything!!!</div>
    </div>
  )
}

export default Footer