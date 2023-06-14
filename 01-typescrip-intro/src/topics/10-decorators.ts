function classDecoration(
  constructor:any
  ){
    return class extends constructor{
      newProperty='New Property';
      hello='override'
    }
}


//@classDecoration
export class SuperClass{
  public myProperty:string='abc123'

  print(){
    console.log('Hola Mundo');
    
  }
}

console.log(SuperClass);
const myClass =new SuperClass();
console.log(myClass);
