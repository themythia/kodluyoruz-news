const formatRSSFeed = (feed) => {
  return {
    items: feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      media: item.description.split('<img src="')[1].split('?width=1200')[0],
      subtitle: item.description.split('<p>')[1].split('</p>')[0],
      description: item.description,
    })),
  };
};
export default formatRSSFeed;
