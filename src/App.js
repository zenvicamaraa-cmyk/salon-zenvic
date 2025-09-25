import logo from './logo.svg';
import './App.css';


import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
// import PromoPage from './components/PromoPage';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';
import SalonChallenges from './components/ShallonChallenges';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <EmailForm></EmailForm>
      <Services />
      <HowItWorks />
      <Testimonials />
      {/* <PromoPage></PromoPage> */}
      <SalonChallenges></SalonChallenges>
      
      <Footer></Footer>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
