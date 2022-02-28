/*
 * @Author: L.柠
 * @Date: 2022-02-27 01:02:16
 */
import React from 'react'
import { Input} from 'antd';

function ClassifyList() {
  const { Search } = Input;

  const onSearch = (value:string) => console.log(value);

  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  )
}

export default ClassifyList