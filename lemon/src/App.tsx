/*
 * @Author: L.柠
 * @Date: 2022-02-23 12:14:53
 */
import React from 'react'
import 'style.less'
import Header from 'components/Header'

import Main from 'components/Main'
function App() {





  return (
    <div className='main'>
      <div className='box'>
        <div className='header'>
          <Header />
        </div>

        <div className="z">
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop"></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" ></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom"></div>
            </div>
          </div>
        </div>

        <div className='con'>
          <Main />
        </div>
      </div>

    </div>
  )
}

export default App