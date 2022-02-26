/*
 * @Author: L.柠
 * @Date: 2022-02-23 17:22:20
 */
import React, { useState } from 'react'
import Footer from 'components/Footer'
import { Button } from 'antd';
import { FireFilled, GithubOutlined, DownOutlined, FieldTimeOutlined, HeartOutlined, MessageOutlined, PushpinOutlined, EllipsisOutlined } from '@ant-design/icons'
import './style-main.less'
function Main() {
  const bokeArr = [{ id: '1', title: '标题1' }, { id: '2', title: '标题1' }, { id: '3', title: '标题1' }, { id: '4', title: '标题1' }, { id: '5', title: '标题1' }, { id: '6', title: '标题1' }, { id: '7', title: '标题1' }, { id: '8', title: '标题1' }, { id: '9', title: '标题1' }, { id: '10', title: '标题1' },]
  const [data, setData] = useState(bokeArr)



  //增加博客列表
  const addItems = () => {
    const bokeArr1 = [{ id: '1', title: '标题1' }, { id: '2', title: '标题1' }, { id: '3', title: '标题1' }, { id: '4', title: '标题1' }, { id: '5', title: '标题1' }, { id: '6', title: '标题1' }, { id: '7', title: '标题1' }, { id: '8', title: '标题1' }, { id: '9', title: '标题1' }, { id: '10', title: '标题1' },]
    setData([...data, ...bokeArr1])
  }
  //滑动到800
  const down = () => {
    window.scrollTo(100, 900)
  }

  return (

    <div className='main-box'>

      {/* 头 */}
      <div className='head'>
        <img src="http://a.vorp.top/lemon/img/touxiang.jpg" alt="" />
      </div>
      {/* 醒目文字 */}
      <div className='title'>
        <h1>LEMON!</h1>
        <div className='my-tgs' style={{ color: 'rgb(165, 147, 224)' }}>音乐迷</div>
        <div className='my-tgs' style={{ color: 'rgb(48, 169, 222)' }}>95后</div>
        <div className='my-tgs' style={{ color: 'rgb(197, 233, 155)' }}>水瓶座</div>
        <div className='my-tgs' style={{ color: 'rgb(250, 177, 206)' }}>前端</div>


      </div>



      <div className='info'>

        <p><img src="http://a.vorp.top/lemon/img/sy.svg" alt="" style={{ width: '40px', marginLeft: '25px' }} />

          <span >Tomorrow may be cruel, but, I want see</span>
          <img src="http://a.vorp.top/lemon/img/sy.svg" alt="" style={{ width: '40px', transform: 'rotate(180deg)' }} />
        </p>

        <ul>
          <li><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTE5NjM3MTQwMzg3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3bC0yMjEuNzA4NDk4LTIyMS43MDk1MjFjLTMyLjY1MjY3Ny0zMi42NTE2NTQtODUuNTkxMzc3LTMyLjY1MTY1NC0xMTguMjQ0MDU1IDAtMzIuNjUyNjc3IDMyLjY1MjY3Ny0zMi42NTI2NzcgODUuNTkxMzc3IDAgMTE4LjI0NDA1NWwyMTAuNjg2NDY3IDIxMC4yNDMzNzVjMTUuMDk1ODEzIDE3LjI3MjM4NSAxNy4yMjk0MDYgNDQuMzMzNzE4IDAgNjEuNDUzNjNMMzE5LjA0NTM4MyA3NTEuMzI0NzE0Yy0zMi42NTI2NzcgMzIuNjUyNjc3LTMyLjY1MjY3NyA4NS41OTAzNTQgMCAxMTguMjQyMDA4IDMyLjY1MjY3NyAzMi42NTI2NzcgODUuNTkxMzc3IDMyLjY1MjY3NyAxMTguMjQ0MDU1IDBMNjU4Ljk5MjgxOSA2NDcuODYyMzE3Qzc1My45MTk4MTggNTUyLjkzNjM0MSA3NTguNTYyNTU5IDQ3MS41MjQxNDcgNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3TDY1OC45OTc5MzUgMzcxLjk2MDU0N3pNNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3IiBwLWlkPSIxMzAxIiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PC9zdmc+" alt="" style={{ width: '25px', transform: 'rotate(180deg)' }} /></li>
          <li><a href="https://github.com/saoren" ><GithubOutlined style={{ fontSize: '25px', marginTop: '4px' }} /></a></li>
          <li className='qq'>
            <img src="http://a.vorp.top/lemon/img/qq_icon.png" alt="" style={{ width: '25px' }} />
            <div className='img-qq-box'>
              <span className='qqsj'></span>
            </div>
          </li>
          <li><a href="https://space.bilibili.com/430828794" ><img src="http://a.vorp.top/lemon/img/bilibili.png" alt="" style={{ width: '25px' }} /></a></li>
          <li><a href="https://blog.csdn.net/qq_35997629" ><img src="http://a.vorp.top/lemon/img/csdn.png" alt="" style={{ width: '25px' }} /></a></li>
          <li><a href="https://weibo.com/u/5196263748" ><img src="http://a.vorp.top/lemon/img/sina.png" alt="" style={{ width: '25px' }} /></a></li>
          <li className='wx'>
            <img src="http://a.vorp.top/lemon/img/wx_icon.png" alt="" style={{ width: '25px' }} />
            <div className='img-box'>
              <span className='sj'></span>
            </div>

          </li>
          <li><img src="http://a.vorp.top/lemon/img/email.svg" alt="" style={{ width: '25px' }} /></li>
          <li><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTE5NjM3MTQwMzg3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3bC0yMjEuNzA4NDk4LTIyMS43MDk1MjFjLTMyLjY1MjY3Ny0zMi42NTE2NTQtODUuNTkxMzc3LTMyLjY1MTY1NC0xMTguMjQ0MDU1IDAtMzIuNjUyNjc3IDMyLjY1MjY3Ny0zMi42NTI2NzcgODUuNTkxMzc3IDAgMTE4LjI0NDA1NWwyMTAuNjg2NDY3IDIxMC4yNDMzNzVjMTUuMDk1ODEzIDE3LjI3MjM4NSAxNy4yMjk0MDYgNDQuMzMzNzE4IDAgNjEuNDUzNjNMMzE5LjA0NTM4MyA3NTEuMzI0NzE0Yy0zMi42NTI2NzcgMzIuNjUyNjc3LTMyLjY1MjY3NyA4NS41OTAzNTQgMCAxMTguMjQyMDA4IDMyLjY1MjY3NyAzMi42NTI2NzcgODUuNTkxMzc3IDMyLjY1MjY3NyAxMTguMjQ0MDU1IDBMNjU4Ljk5MjgxOSA2NDcuODYyMzE3Qzc1My45MTk4MTggNTUyLjkzNjM0MSA3NTguNTYyNTU5IDQ3MS41MjQxNDcgNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3TDY1OC45OTc5MzUgMzcxLjk2MDU0N3pNNjU4Ljk5NzkzNSAzNzEuOTYwNTQ3IiBwLWlkPSIxMzAxIiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PC9zdmc+" alt="" style={{ width: '25px' }} /></li>
        </ul>
      </div>

      <div >
        <div className='down' onClick={down}>
          <DownOutlined className='icon-down' size={60} />
        </div>

      </div>


      {/* 博客列表 */}
      <div className='boke'>
        <div className='boke-box'>
          <div className="start">
            <div className="start-title">
              <h1><FireFilled style={{ color: 'red' }} />QUINTESSENCE</h1>
            </div>

            <div className="box-row">
              <div className="box-1">
                <div className="img-box">
                  <img src="https://cos.nosum.cn/nosum/blog/1/nosum-blog-1%20(44).jpg" alt="" />
                </div>
                <div className="info-e">
                  <h3 className="ellipsis">【Plumemo】使用/部署</h3>
                  <p className="ellipsis-two">本地环境构建 获取所需项目 # 博客后端,基于 SpringBoot 的 JAVA 项目 git clone https://github.com/byteblogs168/hello-blog # 博客后台管理系统，用于管理博客内容 git c...</p>
                </div>



              </div>
              <div className="box-2">
                <div className="img-box">
                  <img src="https://cos.nosum.cn/nosum/blog/1/nosum-blog-1%20(44).jpg" alt="" />
                </div>
                
                <div className="info-e">
                  <h3 className="ellipsis">【Plumemo】使用/部署</h3>
                  <p className="ellipsis-two">本地环境构建 获取所需项目 # 博客后端,基于 SpringBoot 的 JAVA 项目 git clone https://github.com/byteblogs168/hello-blog # 博客后台管理系统，用于管理博客内容 git c...</p>
                </div>
              </div>
              <div className="box-3">
                <div className="img-box">
                  <img src="https://cos.nosum.cn/nosum/blog/1/nosum-blog-1%20(44).jpg" alt="" />
                </div>

               
                <div className="info-e">
                  <h3 className="ellipsis">【Plumemo】使用/部署</h3>
                  <p className="ellipsis-two">本地环境构建 获取所需项目 # 博客后端,基于 SpringBoot 的 JAVA 项目 git clone https://github.com/byteblogs168/hello-blog # 博客后台管理系统，用于管理博客内容 git c...</p>
                </div>
               
              </div>
            </div>
          </div>

          <div className="Discovery">
            <h1><FireFilled style={{ color: 'red' }} />Discover</h1>


            <div className="blog-list">
              {
                data.map((item, index) => {
                  return (
                    index % 2 !== 0
                      ?
                      <div className='blog-items blog-items-left'>

                        <div className="blog-box-left">
                          <div className='boke-content'>
                            <div className='boke-content-restrict'>
                              <div className='boke-time'><FieldTimeOutlined />&nbsp;发布于 2022-2-25 12:00:00&nbsp;&nbsp;&nbsp;Author:ZQ</div>
                              <a href="https://www.baidu.com" className='boke-title'><h3>博客学习</h3></a>
                              <div className='boke-heat'>
                                <HeartOutlined />&nbsp;113 热度&nbsp;&nbsp;&nbsp;&nbsp;<MessageOutlined />   0 评论&nbsp;&nbsp;&nbsp;&nbsp;<PushpinOutlined />  Spring
                              </div>
                              <div className='boke-text'>
                                收到了更好历史的回顾看来是对话框更好的的身高和卢卡斯电话过来开会手动开的时间考虑更换老师的话dklsjfkldhgkdklghlkdhglhgdhglhsdjgsdjklsdgsdgsdgsdg238904750sdjklhgfsdghi说的话覅是单号发给

                              </div>
                              <div className='boke-ellips'><a href="https://www.baidu.com"><EllipsisOutlined /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="blog-box-right">
                          <a href="https://www.baidu.com">
                            <img src="http://42.192.202.143/files/20bdd96374e84a22bde450ccff11e368_2.jpg" alt="" />
                          </a>
                        </div>


                      </div>


                      : <div className='blog-items blog-items-right'>

                        <div className="blog-box-left">
                          <a href="https://www.baidu.com">
                            <img src="http://42.192.202.143/files/20bdd96374e84a22bde450ccff11e368_2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="blog-box-right">
                          <div className='boke-content'>
                            <div className='boke-content-restrict'>
                              <div className='boke-time'><FieldTimeOutlined />&nbsp;发布于 2022-2-25 12:00:00&nbsp;&nbsp;&nbsp;Author:ZQ</div>
                              <a href="https://www.baidu.com" className='boke-title'><h3>博客学习</h3></a>
                              <div className='boke-heat'>
                                <HeartOutlined />&nbsp;113 热度&nbsp;&nbsp;&nbsp;&nbsp;<MessageOutlined />  0 评论&nbsp;&nbsp;&nbsp;&nbsp;<PushpinOutlined />  Spring
                              </div>
                              <div className='boke-text'>
                                收到了更好历史的回顾看来是对话框更好的的身高和卢卡斯电话过来开会手动开的时间考虑更换老师的话dklsjfkldhgkdklghlkdhglhgdhglhsdjgsdjklsdgsdgsdgsdg238904750sdjklhgfsdghi说的话覅是单号发给

                              </div>
                              <div className='boke-ellips'><a href="https://www.baidu.com"><EllipsisOutlined /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>


                  )
                })
              }
            </div>

            <div className="btn">

              <Button onClick={addItems} type="primary" size='large' ghost style={{ borderRadius: '50px', marginBottom: '15vh', marginTop: '10vh' }}>Previous</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>







  )
}

export default Main