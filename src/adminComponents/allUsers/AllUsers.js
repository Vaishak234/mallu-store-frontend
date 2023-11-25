import React, { useEffect, useState } from 'react'
import './allUsers.css'
import axios from '../../api/axios'

function AllUsers() {


  const [users,setUsers] = useState([])

  useEffect(() => {

    async function fetchUsers() {
      const res = await axios.get('/admin/all-users')
      console.log(res.data);
      setUsers(res.data)
    }
    fetchUsers()
    
  }, [])
    
  return (
      <div className='allUsers__container'>
      <div className='allUsers'>
          <h2 className='allUsers__title'> All users</h2>
      <table>
        <tr>
            <th>No.</th>
            <th>email</th>
            <th>mobile</th>
          </tr>
          {
            users &&
            users.map((user,i) => {
              return (
                  <tr key={user._i}>
                   <td>{i+1}</td>
                   <td>{user.mobile}</td>
                   <td>{user.email}</td>
                  </tr>
              )
            })
        }
      
       
      </table>
      </div>
      </div>
  )
}

export default AllUsers