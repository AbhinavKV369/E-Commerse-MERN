import Header from '../Common/Header'
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayot = () => {
  return (
    <div>
      <Header />
       <main>
        <Outlet/>
       </main>
      <Footer/>
    </div>
  );
}

export default UserLayot