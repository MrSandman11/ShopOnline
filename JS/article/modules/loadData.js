const loadArticle = async (id) => {
  const url = `https://gorest.co.in/public-api/posts/${id}`;
  const result = await fetch(url);
  const data = await result.json();

  return data;
};

export default {
  loadArticle,
};
