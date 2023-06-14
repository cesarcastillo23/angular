
export class Person {
  // public name: string;
  // private address: string;

  constructor(
    public firstName:string,
    public lastName:string,
    private address:string='No definido',

    ) {}
}

// export class Hero extends Person{
  
  
  //     constructor(
    //       public alterego:string,
    //       public  age:number,
    //       public realName:string
//     ){
//       super(realName,'New york')
//     }
// }
// const iroman= new Person('iroman','New york');
// console.log(iroman);

export class Hero {

    constructor(
      public alterego:string,
      public  age:number,
      public realName:string,
      public person:Person

    ){
       // this.person=new Person(realName)
    }
}

const tony=new Person('Tony','Stark','New York')
const Iroman= new Hero('Iroman',45,'Tony',tony);
console.log(Iroman);

