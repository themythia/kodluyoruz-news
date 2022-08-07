import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo2 from '../../../assets/logo';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import './styles.css';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
  CloudySnowy,
  CloudySunnyRainy,
  Cloudy,
  FewCloudy,
  MediumStrengthRain,
  NightCloudly,
  NightSnowy,
  NightWindy,
  StormCloudyRainy,
  Sun,
  TorrentialRainyWindy,
  Wind,
  WindySunny,
} from '../../../assets/png';
import NavBarKategoryLane from './NavBarKategoryLane';
import NavBarInfoLane from './NavBarInfoLane';
const Header = ({ name = '', weathers = {} }) => {
  const [getData, setGetData] = useState([]);
  const weatherStates = {
    '01d': Sun,
    '01n': NightWindy,
    '02d': FewCloudy,
    '02n': NightCloudly,
    '03d': WindySunny,
    '03n': NightWindy,
    '04d': Cloudy,
    '04n': NightCloudly,
    '09d': MediumStrengthRain,
    '09n': MediumStrengthRain,
    '10d': TorrentialRainyWindy,
    '10n': CloudySunnyRainy,
    '11d': TorrentialRainyWindy,
    '11n': StormCloudyRainy,
    '13d': CloudySnowy,
    '13n': NightSnowy,
    '50d': Wind,
    '50n': Wind,
    unknown: '',
  };
  // const Testet = () => {
  //   return weatherStates[weathers[0]?.weather[0].icon];
  // };
  // const Testet2 = () => {
  //   return <div>heyt</div>;
  // };
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
  // useEffect(() => {
  //   setGetData(weathers);
  // }, [weathers]);

  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];
  const Test = () => {
    const weatherOfCitiesPng = getData?.map(function (each, index) {
      // console.log("iconları almaya calısıoz: ", each)
      // console.log("iconları almaya calısıoz: ", each)
      return [weatherStates[each.weather[0].icon], Math.floor(each.main.temp)];
    });

    return weatherOfCitiesPng.map(function (each, index) {
      return (
        <MenuItem key={index}>
          <div className='flex items-start gap-1 '>
            <div className='flex'>
              {cities[index]}
              <div className='ml-1'>
                {each[1]}
                {'\xB0'}
              </div>
            </div>
            <img alt={cities[index]} src={each[0]} />
          </div>
        </MenuItem>
      );
    });
  };

  // console.log('🚀 ~ Header ~ weathers', Testet);
  // console.log('🚀 ~ Header ~ weathers', Testet2);
  // console.log('🚀 ~ Header ~ weathers', weathers[3]?.weather[0]);
  // console.log('🚀 ~ Header ~ weathers', weathers[4]?.weather[0]);
  // Tüm kategoriler

  // NavBar ilk alan: logo ve Hava durumu
  const NavBarWeatherLane = () => {
    // const Tag = () => weatherStates[weathers[0]?.weather[0].icon];
    return (
      <div className='header '>
        <div className='container '>
          <div className='content'>
            <ul>
              <li>
                <div>{logo2()}</div>
              </li>
            </ul>
            {/* Hava durumu */}
            <div className='header-weather relative '>
              <div className='flex items-center'>
                <div className='mr-2 text-14-22 items-center box-border'>
                  İstanbul
                </div>
                <div className='mr-2 text-14-22 items-center'>21°</div>
                <img alt={'test'} src={Sun} />
                <div className='h-6 absolute flex items-center justify-end flex-wrap right-12 '>
                  <Menu
                    className='overflow-y-auto h-64 w-40 absolute box-border z-50'
                    menuButton={
                      <MenuButton>
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
                      </MenuButton>
                    }
                    transition
                  >
                    <Test />
                  </Menu>
                </div>
              </div>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='ml-12 '
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <nav>
        {/* NavBar ilk alan: logo ve Hava durumu */}
        <NavBarWeatherLane />
        {/* NavBar ikinci alan: driwer menu ve kategoriler */}
        <NavBarKategoryLane categories={categories} />
        {/* NavBar ikinci alan: Ana sayfaysa NavBar kırmızı çizgi ve bulunduğu kategori başlığı başlık değilse sadece bulunduğu kategori başlığı */}
        <NavBarInfoLane />
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
