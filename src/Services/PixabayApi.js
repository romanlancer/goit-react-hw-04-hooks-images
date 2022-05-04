const BASE_URL = 'https://pixabay.com/api/';

export function fetchPictures(query, page) {
  const searchParams = new URLSearchParams({
    key: '25512826-4fc03a8129b56e35440cc764c',
    q: query,
    image_type: 'photo',
    per_page: 12,
    orientation: 'horizontal',
    page: page,
  });
  const url = `${BASE_URL}?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error('no images found'));
    }
    return response.json();
  });
}
