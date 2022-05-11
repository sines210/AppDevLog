import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

private percentChange = new BehaviorSubject('salut');
sharedChange = this.percentChange.asObservable();


  constructor() { }

nextKey(percentChange:string){this.percentChange.next(percentChange)}



}
