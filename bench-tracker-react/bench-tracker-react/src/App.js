import logo from './logo.svg';
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
// import 'boxicons';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LeftNavigation from './components/leftnavigation/LeftNavigation';
import Aboutus from './components/aboutus/Aboutus';
// import Footer from './components/footer/Footer';
import EnhancedTable from './components/EnhancedTable';


function App() {
  return (
    <div className="appContainer bg-gradient-cold">
      <LeftNavigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path ="/emptable" element={<Emptable/>}/> */}
          <Route path="enhancedtable" element={<EnhancedTable />} />
          <Route path ="aboutus" element ={<Aboutus/>}/>
        </Routes>
    </div>

  );
}

export default App;


















// import logo from './logo.svg';
// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// // import 'boxicons';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import './App.scss';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/dashboard/Dashboard';
// import LeftNavigation from './components/leftnavigation/LeftNavigation';

// // import Footer from './components/footer/Footer';
// import EnhancedTable from './components/EnhancedTable';
// import Aboutus from './components/aboutus/Aboutus';


// function App() {
//   return (
//     // <div className="full-screen bg-gradient-cold">
//     <div className="appContainer bg-gradient-cold">
//     <div className="App" style={{
//       padding: '50px 0px 0px 370px'
//   }}>
//     </div>
//       <Router>
     
//         <LeftNavigation/>

//       <Routes>

//         <Route path ="/" element={<Dashboard/>}/> 
//         <Route path ="/dashboard" element={<Dashboard/>}/>
//         {/* <Route path ="/emptable" element={<Emptable/>}/> */}
//         <Route path ="enhancedtable" element ={<EnhancedTable/>}/>
//         <Route path ="aboutus" element ={<Aboutus/>}/>

//       </Routes>
      

//       </Router>
      
//     </div>
    
//   );
// }

// export default App;
