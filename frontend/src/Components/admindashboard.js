// import React from 'react';
// import Nav from './adminnav';

// const AdminDashboard = () => {
//   return (
//     <div>
//         <div>
//             <Nav />
//          </div>
//          <div style={{width:'100vw'}}>
//             <img src='../images/admin.jpg' alt='aly' style={{marginLeft:'16%',marginTop:'-5%'}}/>
//          </div>
//     </div>
    
//   );
// };

// export default AdminDashboard;

import React from 'react';
import Nav from './adminnav';

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div style={{ position: 'relative' }}>
        <img src='../images/admin.jpg' alt='aly' style={{ width: '100%', height: '700px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 1.0)' }}>Welcome to the admin page</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

