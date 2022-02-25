/*
 * @Author: L.柠
 * @Date: 2022-02-23 12:35:31
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import App from 'App'
import Loading from 'pages/Loading'
const router_arr = [
  { path: '/', component: App },
  { path: '/about', component: lazy(() => import('../pages/About')) },
  { path: '/archived', component: lazy(() => import('../pages/Archived')) },
  { path: '/classify', component: lazy(() => import('../pages/Classify')) },
  { path: '/message', component: lazy(() => import('../pages/Message')) },

]

const MyRoter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          router_arr.map((item,index)=>(
            <Route key={index} path={item.path} element={< item.component />}></Route>
          ))
        }
        



      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default MyRoter
