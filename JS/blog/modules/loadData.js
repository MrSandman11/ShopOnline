const loadArticles = async (page) => {
  const url = `https://gorest.co.in/public-api/posts?page=${page}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default {
  loadArticles,
};
