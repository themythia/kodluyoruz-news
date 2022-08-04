import Share from './share/Share';
import Title from './Tltle';

const News = ({ news }) => {
  return (
    <div className='basis-2/3 px-2.5'>
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
