const API_KEY = '5b012b3696135a5e9cd0e47651572767'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const input = document.querySelector('input')
const movie_list = document.querySelector('.movie-list')

button.addEventListener('click', async () => {
  let movie = input.value
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query= ${movie}&api_key=5b012b3696135a5e9cd0e47651572767`
  )
  console.log(response)
  const renderList = response.data.results

  renderList.forEach((movie) => {
    const movieItem = document.createElement('li')

    const moviePoster = document.createElement('img')
    moviePoster.setAttribute('src', IMAGE_BASE_PATH + movie.poster_path)
    movieItem.innerHTML = movie.title
    movie_list.append(movieItem)
    movie_list.append(moviePoster)

    const details = document.createElement('button')
    details.innerHTML = 'View Details'
    details.addEventListener('click', () => {
      console.log('done')
    })
    movieItem.append(details)
  })
})
