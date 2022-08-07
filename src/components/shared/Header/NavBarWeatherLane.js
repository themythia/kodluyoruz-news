import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
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
import { Link } from 'react-router-dom';

// NavBar ilk alan: logo ve Hava durumu
const NavBarWeatherLane = (props) => {
  const [getData, setGetData] = useState([]);
  const [changeCity, setChangeCity] = useState(0);

  const weathers = props.weathers;
  useEffect(() => {
    setGetData(weathers);
  }, [weathers]);

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

  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];
  const WeatherList = () => {
    const weatherOfCitiesPng = getData?.map(function (each, index) {
      // console.log("iconları almaya calısıoz: ", each)
      // console.log("iconları almaya calısıoz: ", each)
      return [weatherStates[each.weather[0].icon], Math.floor(each.main.temp)];
    });

    return weatherOfCitiesPng.map(function (each, index) {
      return (
        <MenuItem onClick={() => setChangeCity(index)} key={index}>
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

  const WeatherContainer = () => {
    return (
      <div className='header-weather relative '>
        <div className='flex items-center'>
          <div className='mr-2 text-14-22 items-center box-border'>
            {cities[changeCity]}
          </div>
          <div className='mr-2 text-14-22 items-center'>
            {Math.floor(getData[changeCity]?.main?.temp)}
            {'\xB0'}
          </div>
          <img
            alt={'test'}
            src={weatherStates[getData[changeCity]?.weather[0]?.icon]}
          />
          <div className='h-6 absolute flex items-center justify-end flex-wrap right-12 '>
            <Menu
              className='overflow-y-auto h-64 w-40 absolute box-border z-50 '
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
              <WeatherList />
            </Menu>
          </div>
        </div>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='ml-12 cursor-pointer'
          onClick={() =>
            alert('Veri tabanını düzenlemek biraz zaman istiyor...')
          }
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
    );
  };
  return (
    <div className='header '>
      <div className='container '>
        <div className='content'>
          <ul>
            <li>
              <Link to={'/'}>
                <div className={'cursor-pointer'}>{logo()}</div>
              </Link>
            </li>
          </ul>
          {/* Hava durumu */}
          <WeatherContainer />
        </div>
      </div>
    </div>
  );
};

export default NavBarWeatherLane;
