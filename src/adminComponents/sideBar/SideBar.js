import React from 'react'
import './sideBar.css'
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';

function SideBar() {

  return (
      <div className='sideBar'>
          <div className="sideBar__header">
              <h1>RentX</h1>
          </div>
          <ul className="sideBar__links">
              <li className="sideBar__link">
                 <DashboardIcon />
                 <span>Dashboard</span>
              </li>  
              <Link to={'/admin/addCars'} style={{color:'black',textDecoration:'none'}} >
                 <li className="sideBar__link">
                   <AddIcon />
                   <span>Add cars</span>
                 </li>  
              </Link>
              <Link to={'/admin/allCars'} style={{color:'black',textDecoration:'none'}} >
                 <li className="sideBar__link">
                  <DirectionsCarIcon />
                  <span>All cars</span>
                  </li>  
                </Link>
                 <Link to={'/admin/allUsers'} style={{color:'black',textDecoration:'none'}}>
                   <li className="sideBar__link">
                    <PersonIcon />
                    <span>All users</span>
                  </li>  
                </Link>
              <li className="sideBar__link" style={{color:'black',textDecoration:'none'}}>
                  <SettingsIcon />
                  <span>Settings</span>
              </li>  
          </ul>
      </div>
  )
}

export default SideBar