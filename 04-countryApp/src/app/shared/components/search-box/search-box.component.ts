import { Component, Input, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject,Subscription,debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy{
  // demora en la carga de la query
  private debouncer:Subject<string>=new Subject<string>()
  private deboncerSuscription?:Subscription

  @Output()
  public onValue = new EventEmitter<string>();


  @Output()
  public onDebounce = new EventEmitter<string>();


  @Input()
  public placeholder:string=''
  @Input()
  public initialValue:string=''

  ngOnInit(): void {
    this.deboncerSuscription=this.debouncer
    .pipe(
      // demora de escritura
      debounceTime(300)
      )
      .subscribe(value=>{
        this.onDebounce.emit(value)

      })
    }


    ngOnDestroy(): void {
    this.deboncerSuscription?.unsubscribe()
    }



    emitValue(value:string):void{
    this.onValue.emit( value )
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)


  }
}
