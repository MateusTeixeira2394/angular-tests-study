import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import getMockPhotos from '../utils/tests/getMockPhotos';
import Photo from '../models/photo.interface';
import { of } from 'rxjs';

describe(PhotosService.name, () => {

  let service: PhotosService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new PhotosService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${PhotosService.prototype.getPhotos.name}() should return a list of photos`, (done: DoneFn)=>{

    const SIZE: number = 8;

    const expectedPhotos: Photo[] = getMockPhotos(SIZE);

    httpClientSpy.get.and.returnValue(of(expectedPhotos));

    service.getPhotos().subscribe({
      next: photos => {
        expect(photos).toEqual(expectedPhotos);
        done();
      },
      error: done.fail
    });

  });

});
