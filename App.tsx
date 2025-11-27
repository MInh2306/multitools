import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MessageToTask from './pages/MessageToTask';
import MailToTask from './pages/MailToTask';
import TodayWorkRecap from './pages/TodayWorkRecap';
import MakeSQLGood from './pages/MakeSQLGood';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message2task" element={<MessageToTask />} />
          <Route path="/mail2task" element={<MailToTask />} />
          <Route path="/today-recap" element={<TodayWorkRecap />} />
          <Route path="/makesqlgood" element={<MakeSQLGood />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;