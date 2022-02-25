/*
 * @Author: L.柠
 * @Date: 2022-02-23 13:18:26
 */
import React,{useEffect,useState} from 'react'
import {SearchOutlined,UserOutlined,GithubOutlined,FormOutlined,HomeOutlined,LinkOutlined,BarsOutlined,FolderAddOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

import './style-header.less'
function Header() {
  const [bg,setBg]=useState(0)
  const handleScroll =(e:any)=>{
    if(e.srcElement.scrollingElement.scrollTop>0){
      setBg(1)
    }else if (e.srcElement.scrollingElement.scrollTop===0){
      
      setBg(0)
    }

   }
   window.addEventListener('scroll',handleScroll)
    useEffect(()=>{
      

      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    },[bg])



  return (
    <div className='header' style={{background:`rgba(255,255,255,${bg})`}}>
       <div className='left-box'>
         <a className='a-title' href="/">清夏柠檬</a>
       </div>
       <div className='right-box'>
         <ul>
           <li><Link to='/main' className='link'><HomeOutlined />&nbsp;&nbsp;首页</Link></li>
           <li><Link to='/classify' className='link'><BarsOutlined />&nbsp;&nbsp;分类</Link></li>
           <li><Link to='/archived' className='link'><FolderAddOutlined />&nbsp;&nbsp;归档</Link></li>
           <li><Link to='/message' className='link'><FormOutlined />&nbsp;&nbsp;留言</Link></li>
           <li><Link to='/about' className='link'><LinkOutlined />&nbsp;&nbsp;关于</Link></li>
           <li><a href="https://www.baidu.com " target='_blank"' className='link'><GithubOutlined />&nbsp;&nbsp;Git</a></li>
          
           <UserOutlined className='userOut' />
           <SearchOutlined className='searchOut' />
         </ul>
         
         
       </div>
    </div>
  )
}

export default Header