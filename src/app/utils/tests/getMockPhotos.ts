import Photo from "src/app/models/photo.interface";

export default function getMockPhotos(size: number): Photo[] {

    let photos: Photo[] = [];

    for (let i = 0; i < size; i++) {

        photos.push({ id: i + 1, description: '', url: '' });

    };

    return photos;

};