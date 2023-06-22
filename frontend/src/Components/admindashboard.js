import React from 'react';
import Nav from './adminnav';

const AdminDashboard = () => {
  return (
    <div>
        <div>
            <Nav />
         </div>
         <div style={{width:'100vw'}}>
            <img src='../images/admin.jpg' alt='aly' style={{marginLeft:'16%',marginTop:'-5%'}}/>
         </div>
    </div>
    
  );
};

export default AdminDashboard;
