/*
 * @Author: L.柠
 * @Date: 2022-02-27 00:03:30
 */
import React,{useEffect} from 'react'
import { useAccess} from 'umi'
import { useModel } from 'umi';
function Index() {
  const { refresh  } = useModel('@@initialState');
  useEffect(()=>{
    refresh();   //利用该方法重新调用src/app.ts 中 getInitialState刷新数据再次渲染
  }, [])
  const access =useAccess();
  if(access.HOME)

  return (
    <div>
      index
    </div>
  )

}

export default Index