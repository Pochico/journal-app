import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log(`Category en gifgrid: ${category}`);

    return (
        <>
        {
        isLoading ? <h1>Loading...</h1>
            : <>
                <h2 className="category-title">{category}</h2>
                    <ul className="gif-card-grid">
                        {images.map(({ id, title, url }) =>
                            <GifCard key={id} image={url} title={title} />
                        )}
                </ul>
            </>
            
                }
        </>
    );


}