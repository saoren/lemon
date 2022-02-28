/*
 * @Author: L.柠
 * @Date: 2022-02-27 00:32:26
 */
import React from 'react'
import { Table, Tag, Space, Button } from 'antd';




function ArticleList() {
  //文章标题/副标题
  const TitleComp=()=>(
    <>
      <a href="!#">标题</a>
      <p style={{color:'#999'}}>副标题副标题副标题副标题副标题副标题副标题副标题副标题</p>
    </>
  )
  const ActionBtn=()=>(
    <>
      <Button type='primary' style={{marginRight:'20px'}}>编辑</Button>
      <Button type='primary' danger>删除</Button>
    </>
  )

  const columns= [
    {
      title: '文章标题',
      dataIndex: 'title',
    },
    {
      title: '分类',
      dataIndex: 'classify',
    },
    {
      title: '发布时间',
      dataIndex: 'time',
    },
    {
      title: '热度',
      dataIndex: 'redu',
    },
    {
      title: '点赞',
      dataIndex: 'zan',
    },
    {
      title: '评论',
      dataIndex: 'remark',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      render: (tags:string[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      dataIndex: 'action',
    },
  ];
  const data = [];

  for(let i =0;i<46;i++){
    data.push(
      {
        key: i,
        title: <TitleComp/>,
        classify:'分类',
        time: '2021-12-24 12:30:00',
        redu: 100,
        zan:1000,
        remark:10,
        tags: ['nice', 'developer','loser',],
        action:<ActionBtn/>,
      },
    )
  }



  return (
    <div>
      <Table pagination={{position:[ 'bottomCenter'],showQuickJumper:true,showSizeChanger:true}} columns={columns} dataSource={data} />
    </div>
  )
}

export default ArticleList