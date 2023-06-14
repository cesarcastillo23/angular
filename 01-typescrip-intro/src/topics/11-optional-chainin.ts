
interface Passenger{
  name:string
  children?:string[]
}


const passenger1:Passenger={
  name:'fernado'
}

const passenger2:Passenger={
  name:'Melisa',
  children:['Natalia' , 'Elizabeth']
}

const printChildren=(passenger:Passenger)=>{
  //const howManyChildren=passenger.children.length || 0;
  const howManyChildren=passenger.children!.length || 0;
  console.log(passenger.name,howManyChildren);
  
}
printChildren(passenger2)













export{}