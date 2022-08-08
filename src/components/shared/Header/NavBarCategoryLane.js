import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';

const NavBarCategoryLane = (props) => {
  const categories = props.categories;
  // Listelenmesini istediğimiz rakam
  const totalItemNumber =
    Object.keys(categories).length >= 10 ? 10 : categories.length;

  // Kategori listesi oluşturuluyor
  const categoriesList = [];
  for (let i = 0; i < totalItemNumber; i++) {
    categoriesList.push(
      <li key={i} className='content-list-items'>
        <Link to={'/' + Object.keys(categories)[i]}>
          {Object.values(categories)[i].toUpperCase().replace('I', 'İ')}
        </Link>
      </li>
    );
  }

  let moreCategoriesList = Array(Object.keys(categories).length - 10).fill(
    null
  );

  moreCategoriesList = moreCategoriesList.map(function (each, index) {
    return (
      <MenuItem>
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
          menuButton={({ open }) => (
            <MenuButton>
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
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M1 1L19 13'
                    stroke='#022032'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
          <ul className='content-list'>{categoriesList}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarCategoryLane;
