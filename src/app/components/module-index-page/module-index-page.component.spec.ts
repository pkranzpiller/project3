import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { MatProgressSpinnerModule} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

import { ModuleIndexPageComponent } from './module-index-page.component';
import { Module } from 'src/app/models/Module';
import { Content } from 'src/app/models/Content';
import { Link } from 'src/app/models/Link'

describe('ModuleIndexPageComponent', () => {
  let component: ModuleIndexPageComponent;
  let fixture: ComponentFixture<ModuleIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleIndexPageComponent ],
      imports: [ 
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have delete content popup', () =>{
    expect(document.getElementById('deleteContent')).toBeTruthy;
  });

  
  it('should have delete module popup', () =>{
    expect(document.getElementById('deleteModule')).toBeTruthy;
  });

  it('should populate table based on Modules Service Response', () =>{

  let Mod1: Module = new Module(1, "", 1, []);
  let Mod2: Module = new Module(2, "", 1, []);

  component.ms.response = [Mod1,Mod2];

  expect(document.getElementById('1')).toBeTruthy;
  expect(document.getElementById('2')).toBeTruthy;
  expect(document.getElementById('3')).toBeFalsy;

  });

  it('should show flag on modules with no links', () =>{
    let Mod1: Module = new Module(1, "", 1, []);

    component.ms.response = [Mod1];
    expect(document.getElementById('flag-1')).toBeTruthy;
  });

  it('should not show flag on modules with links', () =>{
    let Link1: Link = new Link(1, 0, 0, '')
    let Mod1: Module = new Module(1, "", 1, [Link1]);
  
    component.ms.response = [Mod1];
    expect(document.getElementById('flag-1')).toBeFalsy;

  })

  it('should have default values for selCon and selModule', () =>{
    expect(component.selCon.id).toEqual(0);
    expect(component.selModule.id).toEqual(0);
  });

  
  it('should update selCon and selMod with selectedLinkForRemoval()', () =>{
    let Con1: Content = new Content(1, "", "", "", "", []);
    let Mod1: Module = new Module(1, "", 1, []);

    component.selectedLinkForRemoval(Con1,Mod1)
    expect(component.selCon.id).toEqual(1);
    expect(component.selModule.id).toEqual(1);
    
    let Con2: Content = new Content(2, "", "", "", "", []);
    let Mod2: Module = new Module(2, "", 1, []);
  
    component.selectedLinkForRemoval(Con2,Mod2)
    expect(component.selCon.id).toEqual(2);
    expect(component.selModule.id).toEqual(2);
  });

  it('should update selMod with selectedModuleForRemoval()', () =>{
    let Mod1: Module = new Module(1, "", 1, []);
    component.selectedModuleForRemoval(Mod1)
    expect(component.selModule.id).toEqual(1);
    
    let Mod2: Module = new Module(2, "", 1, []);
    component.selectedModuleForRemoval(Mod2)
    expect(component.selModule.id).toEqual(2);
  });





});
