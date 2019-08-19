import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

import { ModuleStoreService } from './module-store.service';
import { environment } from '../../environments/environment';
import { Module } from '../models/Module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('ModuleStoreService', () => {
  let fixture: ComponentFixture<ModuleStoreService>;

  let service: ModuleStoreService;
  let httpTestingController: HttpTestingController;
  let baseURL = environment.cms_url;

  beforeEach(() => { 
    
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ToastrModule.forRoot()
    ]});
    service = TestBed.get(ModuleStoreService);
    httpTestingController = TestBed.get(HttpTestingController);
    
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: ModuleStoreService = TestBed.get(ModuleStoreService);
    expect(service).toBeTruthy();
  });

  it('loadModules should be workng correctly', fakeAsync(() => {
    let response = {};

    service.loadModules();
    const req = httpTestingController.expectOne(baseURL + '/module');
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    tick();
  }));

  it('', () => {

  });

});
