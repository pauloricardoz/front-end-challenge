export default function apiPost(page = 1) {
  return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`).then((e) =>
    e.json()
  );
}
