let skills:string[]=['bash','conuter','healing']

interface Character{
  name:string;
  hp:number;
  skills:string[];
  hometown?:string
}

const strider:Character={
  name:'Cesar',
  hp:100,
  skills:['Bash','Counter','cocinar']
  
}

strider.hometown='sogamoso'
console.table(strider);





export {}