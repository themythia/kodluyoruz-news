import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import group3 from '../../assets/group_3.png';
import sun from '../../assets/sun.png';

const Header = ({ name = '' }) => {
  // Tüm kategoriler
  const [currentNews, setCurrentNews] = useState(
    "Gürcistan'da Helikopter kazası"
  );
  const [currentNewIndex, setCurrentNewIndex] = useState(0);

  const categories = {
    Economy: 'Ekonomi',
    Health: 'Sağlık',
    Astrology: 'Astroloji',
    Sport: 'Spor',
    Car: 'Otomobil',
    Art: 'Sanat',
    Turkey: 'Türkiye',
    Life: 'Yaşam',
    Technology: 'Teknoloji',
    Magazine: 'Magazin',
    Tourism: 'Turizm',
    Education: 'Eğitim',
    World: 'Dünya',
  };

  //Güncel haber başlıkları
  const allCurrentNews = [
    "Gürcistan'da Helikopter kazası",
    "Balıkesir'de orman yangını",
    'Teknolojide son gelişmeler',
  ];

  const categoriesNewsTitle = ' Haberleri';
  // ******************************** */
  // Detaylar sayfasındaki active olayı
  // Güncel haberler nasıl alınsın direkt gönderdiği kategorinin RSS'inden mi

  // Listelenmesini istediğimiz rakam
  const totalItemNumber =
    Object.keys(categories).length >= 10 ? 10 : categories.length;

  // Kategoriler oluşturuluyor
  const categoriesList = [];
  for (let i = 0; i < totalItemNumber; i++) {
    categoriesList.push(
      <li key={i} className='content-list-items'>
        <Link to={'/' + Object.keys(categories)[i]}>
          {Object.values(categories)[i]}
        </Link>
      </li>
    );
  }

  // Güncel haber sayfası bir sonraki başlık
  function IncrementNewsItem() {
    if (currentNewIndex < 2) {
      setCurrentNewIndex(currentNewIndex + 1);
      setCurrentNews(allCurrentNews[currentNewIndex + 1]);
    } else {
      setCurrentNewIndex(0);
      setCurrentNews(allCurrentNews[0]);
    }
  }
  //Güncel haber sayfası bir önceki başlık
  function DecreaseNewsItem() {
    if (currentNewIndex > 0) {
      setCurrentNewIndex(currentNewIndex - 1);
      setCurrentNews(allCurrentNews[currentNewIndex - 1]);
    } else {
      setCurrentNewIndex(allCurrentNews.length - 1);
      setCurrentNews(allCurrentNews[allCurrentNews.length - 1]);
    }
  }

  // NavBar ilk alan: logo ve Hava durumu
  const NavBarWeatherLane = () => {
    return (
      <div className='header '>
        <div className='container '>
          <div className='content'>
            <ul>
              <li>
                <img src={group3} alt='' />
              </li>
            </ul>
            {/* Hava durumu */}
            <div className='header-weather'>
              <div className='mr-2 text-14-22 items-center box-border'>
                İstanbul
              </div>
              <div className='mr-2 text-14-22 items-center'>21°</div>
              <img src={sun} alt='' />
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 15L12.7071 15.7071L12 16.4142L11.2929 15.7071L12 15ZM18.7071 9.70711L12.7071 15.7071L11.2929 14.2929L17.2929 8.29289L18.7071 9.70711ZM11.2929 15.7071L5.29289 9.70711L6.70711 8.29289L12.7071 14.2929L11.2929 15.7071Z'
                  fill='white'
                />
              </svg>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='ml-8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='11' cy='11' r='7' stroke='white' strokeWidth='2' />
                <path
                  d='M20 20L17 17'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>

              <div>{/*  zaman kalırsa scroll edilebilen hava durumu */}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // NavBar ikinci alan: driwer menu ve kategoriler
  const NavBarKategoryLane = () => {
    return (
      <div className=' header-category'>
        <div className='container'>
          <div className='content'>
            <div>
              <svg
                width='24'
                height='16'
                viewBox='0 0 24 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z'
                  fill='black'
                />
              </svg>
            </div>
            <ul className='content-list'>{categoriesList}</ul>
          </div>
        </div>
      </div>
    );
  };
  // NavBar ikinci alan: Ana sayfaysa NavBar kırmızı çizgi ve bulunduğu kategori başlığı başlık değilse sadece bulunduğu kategori başlığı
  const NavBarInfoLane = () => {
    if (name === 'SON HABERLER') {
      return (
        <div className='header-sub-category'>
          <div className='container'>
            <div className='content'>
              <h4>{name}</h4>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='ml-4'
                onClick={() => IncrementNewsItem(currentNewIndex + 1)}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.3536 7.82826L10 7.47471L9.64645 7.82826L6.01008 11.4646L6.71719 12.1717L10 8.88892L13.2828 12.1717L13.9899 11.4646L10.3536 7.82826Z'
                  fill='white'
                />
              </svg>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='ml-1'
                onClick={() => DecreaseNewsItem(currentNewIndex - 1)}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM9.64645 12.1717L10 12.5253L10.3536 12.1717L13.9899 8.53537L13.2828 7.82827L10 11.1111L6.71719 7.82827L6.01008 8.53537L9.64645 12.1717Z'
                  fill='white'
                />
              </svg>
              <div className='text-white ml-4 text-18-28 font-bold '>
                {currentNews}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (name.indexOf('details') === -1) {
      return (
        <>
          {/* Kırmızı başlık alanı */}
          <div className='header-sub-category'>
            <div className='container'>
              <div className='content'>
                <h4>
                  {categories[name]
                    ? categories[name] + categoriesNewsTitle
                    : name === ''
                    ? categoriesNewsTitle.substring(
                        1,
                        categoriesNewsTitle.length - 1
                      )
                    : name + categoriesNewsTitle}
                </h4>
              </div>
            </div>
          </div>
          {/* Başlık alanı */}
          <ul className='page-title-info'>
            <li className='title-item '>
              {categoriesNewsTitle.substring(1, categoriesNewsTitle.length - 1)}
            </li>
            <li className='title-item-active'>
              {categories[name]
                ? categories[name] + categoriesNewsTitle
                : 'Sayfa Bulunamadı'}
            </li>
          </ul>
        </>
      );
    } else if (name.indexOf('details') > 0) {
      return (
        <>
          <ul className='page-title-info'>
            <li className='title-item'>
              {categoriesNewsTitle.substring(1, categoriesNewsTitle.length - 1)}
            </li>
            <li className='title-item ml-1'>
              {`/ ${
                categories[name.substring(0, name.indexOf(' '))] +
                categoriesNewsTitle
              }`}
            </li>
            <li className='title-item-active'>{currentNews}</li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      {/* Header */}
      <nav>
        {/* NavBar ilk alan: logo ve Hava durumu */}
        <NavBarWeatherLane />
        {/* NavBar ikinci alan: driwer menu ve kategoriler */}
        <NavBarKategoryLane />
        {/* NavBar ikinci alan: Ana sayfaysa NavBar kırmızı çizgi ve bulunduğu kategori başlığı başlık değilse sadece bulunduğu kategori başlığı */}
        <NavBarInfoLane />
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
