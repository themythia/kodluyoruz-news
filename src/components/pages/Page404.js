import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

export default function Page404() {
  return (
    <div>
      <Header />
      <h1>Sayfa bulunamadı</h1>
      <div className='m-4 h-10 w-36 bg-blue-500 items-center rounded-br-3xl rounded-tl-3xl'>
        <div className='p-2 h-8  '>
          <Link className='text-blue-500 p-1 bg-yellow-100 rounded-md' to='/'>
            Ana sayfaya dön
            <Outlet />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
