const formatRSSFeed = (feed) => {
  return {
    items: feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      media: item.description.split('<img src="')[1].split('?width=1200')[0],
      subtitle: item.description.split('<p>')[1].split('</p>')[0],
      description: item.description,
      id: item.link.split('com.tr/')?.[1].split('/')[1],
      category: item.link.split('com.tr/')?.[1].split('/')[0],
    })),
  };
};
export default formatRSSFeed;
