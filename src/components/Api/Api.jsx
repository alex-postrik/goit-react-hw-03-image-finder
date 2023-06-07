const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34871467-f144c0dca622e0cd08d0dd1ad';

function fetchPictures(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(response => response.json());
}

const api = { fetchQuery };

export default api;
