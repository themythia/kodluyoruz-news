import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ news }) => {
  const [id, setId] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (news) {
      console.log('news:', news);
      const newsSplit = news?.link?.split('com.tr/')?.[1]?.split('/');
      setId(newsSplit[1]);
      setCategory(newsSplit[0]);
    }
  }, [news]);

  return (
    // <a
    //   href={news?.link}
    //   className='md:text-14-16 md:h-[42px] lg:h-[50px] flex items-center'
    //   target='_blank'
    //   rel='noreferrer'
    //   data-testid='slider-item'
    //
    <Link
      to={`/news/${id}}`}
      state={{
        category,
        news: news,
      }}
      className='md:text-14-16 md:h-[42px] lg:h-[50px] flex items-center'
      data-testid='slider-item'
    >
      {news?.title}
    </Link>
    // </a>
  );
};
export default SliderItem;

// "<img src="https://cdn1.ntv.com.tr/gorsel/O8XiTUPfykmsbAVqfG7cFA.jpg?width=1200&mode=crop&scale=both&v=20200921101503905" class="type:primaryImage" alt="Hindistan net sıfır karbon hedefine onay verdi" /><p>Hindistan hükümeti, 'net sıfır' karbon emisyonu hedefine yönelik iklim planını onayladı. Dünyanın en kalabalık 2. ülkesi Hindistan sıfır emisyon için 2070 yılını hedef seçti.</p><strong>Hindistan</strong> hükümeti, 2021'de İskoçya’nın <strong>Glasgow</strong> şehrinde gerçekleştirilen 26.<strong> Birleşmiş Milletler</strong> (BM) İklim Değişikliği Konferansı’nda (<strong>COP26</strong>) ilan ettiği karbon emisyonunu azaltmaya ilişkin hedeflerine yönelik eylem planını hayata geçirdi.<br><br>Kabinenin onayladığı iklim planı kapsamında Hindistan karbon emisyonunu 2030'a kadar yüzde 45 azaltmayı ve 2070'e kadar da “net sıfır” karbon hedefini gerçekleştirmeyi amaçlıyor.<br><br>Net sıfır emisyon, insan faaliyeti nedeniyle atmosfere salınan karbondioksit, metan, azot gibi gazların miktarının yeryüzü tarafından doğal olarak emilen sera gazı miktarıyla dengelenmesi ve karbonun nötr olması anlamına geliyor.<br><br>"Net sıfır emisyon" kavramı ilk olarak 2015’te imzalanan Paris Anlaşması’nda kullanılırken, bu kapsamda küresel sıcaklık artışını 1,5 dereceyle sınırlandırmak için verilen taahhütler kapsamında net sıfır emisyona ulaşmayı hedefleyen ülke sayısı giderek artış gösterdi."
