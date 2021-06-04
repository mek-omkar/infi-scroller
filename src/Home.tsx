import './App.css'

import React, { useState } from 'react';
import List, { Data} from './List';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom'


const listData = {
  titles: ['S.No', 'Username', 'Created Time', 'Credit', 'Updated Count'],
  values: [{sno:1, username:"User0", time: new Date().toLocaleString(), value:130, updatedCount:0}],
}

export const Home = () => {

  const [data, setData] = useState<Data>(listData)
  const [count, setCount] = useState<number>(0)
  const history = useHistory()

  let curr_length = Object.values(listData.values).length 
  for (let index = curr_length+1; index < curr_length + 10; index++) {
    listData.values.push({
      sno:index, username:"User-"+index, time: new Date().toLocaleString(), 
      value:Math.floor(Math.random() * 10000), updatedCount:count
    })
  }

  const onScrollFn = (e:any) => {
    e.preventDefault();
    const bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
    if (bottom <= 15) {
      setCount(count+1)
      let curr_length = Object.values(listData.values).length 
      for (let index = curr_length+1; index < curr_length + 5; index++) {
        listData.values.push({
          sno:index, 
          username:"User-"+index,
          time: new Date().toLocaleString(), 
          value:Math.floor(Math.random() * 10000), 
          updatedCount:count
        })
      }
      setData({titles:listData.titles, values: listData.values})
    }
  }

  const logOutFn = () => {
    history.push('/logout')
  }

  return <div>
        <div className="appLogout"> 
            <Button block size="sm" type="click" onClick={logOutFn}>
                Logout
            </Button>
        </div>
        <div className="app-header">  
          <h2>Users</h2>
        </div>
        <div><List data={data} onScrollFn={onScrollFn}/></div>
    </div>
}

export default Home;