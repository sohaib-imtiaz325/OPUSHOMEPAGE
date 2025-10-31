import React from "react";
import { Routes, Route } from "react-router-dom";

// ----------- Public Pages -----------
import LoginPage from "./Login/LoginPage";
import CreatePassword from "./Login/CreatePassword";

// ----------- Referral Dashboard -----------
import Home from "./Ref-Dashboard/Home";
import ReferalAccount from "./Ref-Dashboard/ReferalAccount";
import DashboardLayout from "./Ref-Dashboard/DashboardLayout";

// ----------- Admin Dashboard -----------
import DashboardLayout1 from "./Dashboard/DasboardLayout1";
import Users from "./Dashboard/Users";
import Home1 from "./Dashboard/Home1";

// ----------- (Separate Import) -----------
import Navbar from "./Home/Navbar";
import Productions from "./Home/Productions";
import InvestmentPackages from "./Home/InvestmentPackages";
import OurServices from "./Home/OurServices";
import WelcomeToOpus from "./Home/Welcome-to-Opus";
import AboutUs from "./Home/Aboutus";
import ReadySection from "./Home/Footer";
import AccountHistory from "./AccountHistroy";



const App = () => {
  return (
    <Routes>
      {/* ----------- Public Routes ----------- */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/create-password" element={<CreatePassword />} />

      {/* ----------- User Dashboard Routes ----------- */}
      <Route path="/user-dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="refAcc" element={<ReferalAccount />} />
      </Route>

      {/* ----------- Admin Dashboard Routes ----------- */}
      <Route path="/admin-dashboard" element={<DashboardLayout1 />}>
        <Route index element={<Home1 />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* ----------- All as a Separate Page ----------- */}
      <Route path="/navbar" element={<Navbar/>} /> {/* 👈 Opens Navbar alone */}
      <Route path="productions"   element={<Productions/>}/>
      <Route path="/Investment" element={<InvestmentPackages/>} />
      <Route path="/ourservices" element={<OurServices/>}/>
      <Route path="/welcometoOpus" element={<WelcomeToOpus/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/footer" element={<ReadySection />} />
      <Route path="/Account" element={<AccountHistory/>} />
  
    </Routes>
  );
};

export default App;
