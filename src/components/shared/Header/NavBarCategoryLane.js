import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../utils/hooks/useWindowSize';

const NavBarCategoryLane = (props) => {
  const { width } = useWindowSize();
  const [totalTitle, setTotalTitle] = useState(10);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [isActive, setIsActive] = useState(Array(10)?.fill(false));
  //ekran genişliğine göre kategori sayısı

  const categoryColors = [
    'text-economy',
    'text-textDark',
    'text-red-600',
    'text-sky-900',
    'text-textDark',
    'text-[#bb1818]',
    'text-textDark',
    'text-textDark',
    'text-blue-900',
    'text-[#bb1818]',
  ];
  useEffect(() => {
    if (width < 350) {
      setTotalTitle(3);
    } else if (width < 640) {
      setTotalTitle(4);
    } else if (width < 768) {
      setTotalTitle(5);
    } else if (width < 1000) {
      setTotalTitle(8);
    } else {
      setTotalTitle(10);
    }
  }, [width]);

  const categories = props.categories;
  // Listelenmesini istediğimiz rakam
  // Kategori listesi oluşturuluyor
  useEffect(() => {
    const categoriesList = [];
    if (totalTitle > 0) {
      for (let i = 0; i < totalTitle; i++) {
        categoriesList.push(
          <li
            key={i}
            className={`content-list-items  ${
              isActive[i]
                ? `${categoryColors[i] + ' text-xl'}`
                : 'text-textDark  text-16-19 '
            } }`}
            onClick={() => {
              let newArr = Array(10)?.fill(false);
              newArr[i] = !newArr[i];
              return setIsActive(newArr);
            }}
          >
            <Link to={'/' + Object.keys(categories)[i]}>
              {Object.values(categories)[i].toUpperCase().replace('I', 'İ')}
            </Link>
          </li>
        );
      }
      setCategoriesArray(categoriesList);
    }
  }, [totalTitle, isActive]);

  let moreCategoriesList = Array(Object.keys(categories).length - 10).fill(
    null
  );

  moreCategoriesList = moreCategoriesList.map(function (each, index) {
    return (
      <MenuItem key={index}>
        {Object.values(categories)
          ?.[10 + index].toUpperCase()
          .replace('I', 'İ')}
      </MenuItem>
    );
  });

  const DrawerMenu = () => {
    return (
      <div className='h-6 flex items-center justify-center text-16-19'>
        <Menu
          offsetY={12}
          menuButton={({ open, key }) => (
            <MenuButton key={key}>
              {open ? (
                <svg
                  width='20'
                  height='14'
                  viewBox='0 0 20 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 1L1 13'
                    stroke='#022032'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M1 1L19 13'
                    stroke='#022032'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
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
              )}
            </MenuButton>
          )}
          transition
        >
          {moreCategoriesList}
        </Menu>
      </div>
    );
  };
  return (
    <div className='header-category relative'>
      <div className='container'>
        <div className='content'>
          <DrawerMenu />
          <ul className='content-list'>{categoriesArray}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarCategoryLane;
