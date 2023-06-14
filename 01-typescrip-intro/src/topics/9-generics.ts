export function whatsMyType<T>(argument:T):T{
    return argument

}

const IamString=whatsMyType<string>('Hola Mundo');
const IamNumber=whatsMyType<number>(100);
const IamArray=whatsMyType<number[]>([1,2,3]);

console.log(IamString.split(' '));
console.log(IamNumber.toFixed());
console.log(IamArray.join('-'));






