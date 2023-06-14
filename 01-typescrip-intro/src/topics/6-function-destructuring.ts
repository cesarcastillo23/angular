export interface Product{
  descripcion:string;
  price:number;
}


// const phone:Product={
//   descripcion:"Nokia A1",
//   price:200

// }

// const tablet:Product={
//   descripcion:"iPad Air",
//   price:250

// }

interface TaxCalculationOpcion{
    tax:number
    product:Product[]
}



export function taxCalculation( options:TaxCalculationOpcion ):[number,number] {
    let total=0;
    const{product:producto,tax:impuesto}=options
    producto.forEach(product =>{
      const {price:precio}=product
      total +=precio
    });
    
    return [total,total*impuesto]
}

// const shoppingCart=[phone,tablet];
// //const tax=0.16;


// const [total,taxTotal]=taxCalculation({
//   product:shoppingCart,
//   tax:0.15
// })


// console.log('Total',total);
// console.log('Tax',taxTotal);



