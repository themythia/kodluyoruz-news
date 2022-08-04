import Breadcrumb from './Breadcrumb';
import Share from './share/Share';
import Title from './Tltle';

const News = ({ news, category }) => {
  return (
    <div className='w-full px-2.5'>
      <Breadcrumb type={category} newsTitle={news.title} />

      <Title type='title' text={news.title} />
      <Title type='subtitle' text={news.subtitle} />
      <Share />
      <div
        dangerouslySetInnerHTML={{ __html: news.description }}
        className='news-detail__innerContainer'
      ></div>
    </div>
  );
};
export default News;
