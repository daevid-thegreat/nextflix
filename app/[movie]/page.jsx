import Image from 'next/image'
export default async function moviedetail({params}){
    const {movie} = params
    const imagePath = `https://image.tmdb.org/t/p/original`
    const data = await fetch(`http://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_key}&language=en-US&page=1`, {
        next :{revalidate: 60}})
    const res = await data.json()
     return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2 className="">Runtime : {res.runtime}</h2>
                <h2 className=" text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
                <Image className='my-12' src={imagePath + res.backdrop_path} width={1000} height={1000} priority />
                <p>{res.overview}</p>
            </div>
        </div>
     )
}