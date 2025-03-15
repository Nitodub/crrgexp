import { Photo } from "@/models/Images"
import Image from "next/image"

type Props = {
    photo: Photo
}

const ImgContainer = ({ photo }: Props) => {
    return (
        <div key={photo.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
            <Image 
                src={photo.src.large}
                alt={photo.alt}
                fill={true}
                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
        </div>
    )
}

export default ImgContainer