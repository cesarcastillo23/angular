import { Product,taxCalculation } from './6-function-destructuring'





const shoppingCart:Product[]=[
  {
    descripcion:'Nokia A1',
    price:10
  },
  {
    descripcion:'Iphone 14',
    price:10
  },
  {
    descripcion:'Xiaomi poco',
    price:10
  },
];

const [total,taxTotal]=taxCalculation({
  product:shoppingCart,
  tax:0.15
})


console.log('Total',total);
console.log('Tax',taxTotal);