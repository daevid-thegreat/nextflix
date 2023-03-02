import Movie from './movie'
export default async function Home() {
  const data = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_key}&language=en-US&page=1`)
  const res = await data.json()
  return (
    <main>
      <h1 className=''>NextFlix</h1>
      <div className='grid gap-16 grid-cols-fluid'>
      {res.results.map((movie) => (
        <Movie key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          release={movie.release_date}
                />
      ))}
      </div>
    </main>
  )
}
