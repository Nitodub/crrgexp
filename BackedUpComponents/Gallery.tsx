import fetchImages from "@/lib/fetchImages"
import type { ImagesResults } from "@/models/Images"
import ImgContainer from "./ImgContainer"

const Gallery = async () => {
    const url = 'https://api.pexels.com/v1/curated'
    const images: ImagesResults | undefined = await fetchImages(url)

    if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>
    return (
        <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            {images.photos.map(photo => (
                <ImgContainer key={photo.id} photo={photo} />
            ))}
        </section>
    )
}

export default Gallery