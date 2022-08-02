const formatRSSFeed = (feed) => {
  return {
    description: feed.description,
    items: feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      media: item.description.split('<img src="')[1].split('?width=1200')[0],
      description: item.description.split('<p>')[1].split('</p>')[0],
    })),
  };
};
export default formatRSSFeed;
