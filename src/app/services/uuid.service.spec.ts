import { TestBed } from '@angular/core/testing';

import { UuidService } from './uuid.service';

describe(UuidService.name, () => {
  let service: UuidService;

  const PREFIX: string = 'app';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UuidService);
  });

  describe(`${UuidService.prototype.getIdwthPrefix.name}()`, () => {
    it('Should generate universally unique id when the prefix is passed.', () => {
      const uuid: string = service.getIdwthPrefix(PREFIX);

      const pattern: RegExp = /(.+-)(\w+-){4}(\w+)/g;

      expect(pattern.test(uuid)).toBeTruthy();
    });

    it('Should not generate duplicated ids when the method is called many times.', () => {
      const ids: Set<string> = new Set<string>();

      for (let i = 0; i < 50; i++) {
        ids.add(service.getIdwthPrefix(PREFIX));
      }

      expect(ids.size).toBe(50);
    });

    it('Should throw an error when it is passed a empty value', () => {
      const emptyValues: any[] = [null, undefined, ''];

      emptyValues.forEach((currValue) => {
        expect(() => service.getIdwthPrefix(currValue))
          .withContext(`With empty value: ${currValue}`)
          .toThrow();
      });
    });
  });

  describe(`${UuidService.prototype.getIdwthPrefix.name}()`, () => {
    it('Should return the quantity of uuids generated when this method is called.', () => {
      service.getIdwthPrefix(PREFIX);
      service.getIdwthPrefix(PREFIX);

      expect(service.getGeneratedIdsQt()).toBe(2);
    });
  });
});
