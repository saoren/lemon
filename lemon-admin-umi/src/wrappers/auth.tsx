/*
 * @Author: L.柠
 * @Date: 2022-02-28 17:35:20
 */
import { Redirect } from 'umi'

export default (props:any) => {

 const token = localStorage.getItem('cms-token')
 console.log(token)
 if(token !== null) return <div>{ props.children }</div>
  return <Redirect to="/" />;
}


