let score = undefined;


let convert = String(score);
console.log(convert);
console.log(typeof(convert));

// while converting from string to Number keep in mind 
// "33" => 33
// "33ab" => NaN not a number 
// null =>  0
// undefined => undefined
// "hjbcb" => not a number NaN
//  true =1 ;  false => 0

// convert to boolean

// all string are converted to true expect if its empty ""
// all number are converted to true expect 0 which give false;
// null and undefined gives false

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
