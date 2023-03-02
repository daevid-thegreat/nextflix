import Link from 'next/link'
import Image from 'next/image'


export default function Movie({title, release, poster, id}){
    const imagePath = `https://image.tmdb.org/t/p/original`
    return(
        <div>
            <h1>{title}</h1>
            <h2>Release Date</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster} width={800} height={800} alt={title}>

                </Image>
            </Link>

        </div>
    )
}