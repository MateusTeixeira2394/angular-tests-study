import { Injectable } from '@angular/core';
import {v4 as uuidV4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  private generatedIdsQt: number = 0;

  constructor() { };

  public getIdwthPrefix(prefix: string): string {

    if(!prefix) throw Error('Prefix can not be empty.');

    this.generatedIdsQt++;

    return `${prefix}-${this.getuuid()}`;

  };

  public getGeneratedIdsQt(): number {
    return this.generatedIdsQt;
  };

  private getuuid(): string {

    return uuidV4();

  };

};
