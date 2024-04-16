import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should have a number property, which the input is bound to', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.number).toBeUndefined();
    const input = fixture.nativeElement.querySelector('.test-class');
    expect(input.value).toEqual('');
  });
  it('should render buttons initially disabled', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const upButton = fixture.nativeElement.querySelector('.up-button');
    expect(upButton).toBeDefined();
    expect(upButton.disabled).toBeTrue();

    const downButton = fixture.nativeElement.querySelector('.down-button');
    expect(downButton).toBeDefined();
    expect(downButton.disabled).toBeTrue();
  });
  it('should increment number on up click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.number = 1;
    fixture.detectChanges();
    const upButton = fixture.nativeElement.querySelector('.up-button');
    expect(upButton).toBeDefined();
    upButton.click();
    fixture.detectChanges();
    expect(app.number).toEqual(2);
  });
  it('should decrement number on down click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.number = 1;
    fixture.detectChanges();
    const downButton = fixture.nativeElement.querySelector('.down-button');
    expect(downButton).toBeDefined();
    downButton.click();
    fixture.detectChanges();
    expect(app.number).toEqual(0);
  });
});
