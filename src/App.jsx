import './assets/css/reset.css'
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import DotoriStore from './pages/DotoriStore';
import BgmStore from './pages/BgmStore';
import Theme from './pages/Theme';
import MiniHome from './pages/MiniHome';
import MiniMain from './pages/MiniMain';
import Profile from './pages/Profile';
import Diary from './pages/Diary';
import DiaryAdd from './pages/DiaryAdd';
import DiaryEdit from './pages/DiaryEdit';
import Gallery from './pages/Gallery';
import GuestBook from './pages/GuestBook';
import Jukebox from './pages/Jukebox';
import Manager from './pages/Manager';

const App = () => {
  return (
    <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />

            <Route path="/dotori_store"  >
              <Route index element={<DotoriStore />}/>
              <Route path="bgm" element={<BgmStore />}/>
              <Route path="theme" element={<Theme />}/>
            </Route>
          </Route>
              
          <Route path="/:userID" element={<MiniHome />}>
            <Route index element={<MiniMain />} />
            <Route path="profile" element={<Profile />} />
            <Route path="diary"> 
              <Route index element={<Diary />}/>
              <Route path="add" element={<DiaryAdd />}/>
              <Route path="edit" element={<DiaryEdit />}/>
            </Route>
            <Route path="gallery" element={<Gallery />} />
            <Route path="guest_book" element={<GuestBook />} />
            <Route path="jukebox" element={<Jukebox />} />
            <Route path="manager" element={<Manager />} />
          </Route>

        </Routes>
    </Router>
  );
};

export default App;