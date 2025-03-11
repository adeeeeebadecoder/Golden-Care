// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NotFound from './Screens/NotFound';
// import Home from './Screens/Home';

// function App() {
//   return (
//     <Router>

//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home/*" element={<Home />} />
//           <Route path="*" element={<NotFound />} /> {/* Add a catch-all route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Screens/NotFound';
import Home from './Screens/Home';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/home/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
