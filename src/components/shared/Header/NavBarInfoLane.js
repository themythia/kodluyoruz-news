import React from 'react';

const NavBarInfoLane = (props) => {
  const categoriesNewsTitle = ' Haberleri';
  const name = props.name;
  const categories = props.categories;
  if (name.indexOf('details') === -1 && props.name !== '') {
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
          <li className='title-item-active'>
            {props.newsDetail !== '' ? props.newsDetail : ''}
          </li>
        </ul>
      </>
    );
  }
};

export default NavBarInfoLane;
