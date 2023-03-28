import { Observable } from 'rxjs';
import Photo from './photo.interface';

export default interface IPhotoService{

    getPhotos: () => Observable<Photo[]>;
    
}