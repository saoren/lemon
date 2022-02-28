/*
 * @Author: L.柠
 * @Date: 2022-02-27 01:00:15
 */
import React,{useState,useRef} from 'react'
import { Input, Button, Table , Modal,message } from 'antd';
import './article.less'


interface Idata{
  id:number,
  name:string,
  clickNum:number,
  xuhao:number,
  createTime:string,
  updateTime:string,
  action:any
}

function LableList() {
   const { Search } = Input;



  const[isModalVisible,setModalVisible] =useState(false)



  const getTabelName =useRef() as any
  const getTabelXu =useRef() as any


  //自定义action
  const ActionBtn=()=>(
    <>
      <Button type='primary' style={{marginRight:'20px'}}>编辑</Button>
      <Button type='primary' danger>删除</Button>
    </>
  )
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      width:'5%'
    },
    {
      title: '标签名',
      dataIndex: 'name',
      width:'20%'
    },
    {
      title: '点击数',
      dataIndex: 'clickNum',
      width:'10%'
    },
    {
      title: '排序',
      dataIndex: 'xuhao',
      sorter:(a: { xuhao: number; }, b:{xuhao:number}) => a.xuhao - b.xuhao,
      width:'15%'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width:'15%'
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width:'15%'
    },
    {
      title: '操作',
      dataIndex: 'action',
    },
  ]
  const data:Idata[] =[]
  for (let i = 0; i < 10; i++) {
    data.push({
      id: i,
      name: `Edward King ${i}`,
      clickNum:i,
      xuhao:i,
      createTime:'2022-1-28 12:30:30',
      updateTime:'2022-1-28 12:30:30',
      action: <ActionBtn/>,
    });
  }
  const [itemsData,setData] =useState(data)



  //添加标签
  const addTable =()=>{
    setModalVisible(true);
  }
  const handleOk=()=>{
    getTabelName.current.state.value !== undefined && getTabelXu.current.state.value !== undefined
    ?
    (
      //缺少放数据库
      //setData([{key:10,name:getTabelName.current.state.value,age:25,address:getTabelXu.current.state.value},...itemsData]),
      setModalVisible(false)

    )
    :
    message.warning('请输入完整！',1);
  


    
    
  }
  const handleCancel=()=>{
    setModalVisible(false)
  }




  const onSearch = (value:string) => console.log(value);

  return (
    <div style={{margin:'20px'}}>
      
      <Search placeholder="请输入标签名" onSearch={onSearch} style={{ width: 200 }} />
      <Button className='addBtn' type="primary"  onClick={addTable}>添加标签</Button>
      <Button className='addBtn' type="primary" danger>删除标签</Button>
      <Table pagination={{position:[ 'bottomCenter'],showQuickJumper:true,showSizeChanger:true}}  columns={columns} dataSource={itemsData} rowSelection={{type:'checkbox'}} rowKey={record => record.id}/>
      <Modal title="增加标签" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input ref={getTabelName} className='tabelIpt' placeholder="请输入标签名" />
        <Input ref={getTabelXu} className='tabelIpt'  placeholder="请输入序号" />
      </Modal>

    </div>
  )
}

export default LableList