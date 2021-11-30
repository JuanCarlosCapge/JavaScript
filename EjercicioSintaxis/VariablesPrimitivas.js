/* Javascript tiene seis tipos primitivos: Sin definir (undefined), Nulo (null),
 Lógicos (boolean), Numérico (number), Cadena (string), Símbolo (symbol). 
 Todos los demás tipos son objetos (Object):
 Array, Date, Promise, etc.*/

 //undefined
console.assert( typeof undefined === 'undefined' );
console.assert( undefined instanceof Object === false );
console.assert( Object.prototype.toString.call(undefined) === '[object Undefined]' );


//null
var testNull = null;
console.assert( (testNull === null) );

//symbol
var mySymbol = Symbol();
console.assert( typeof mySymbol === 'symbol' );
console.assert( mySymbol instanceof Object === false );
console.assert( Object.prototype.toString.call(mySymbol) === '[object Symbol]' );
console.assert( mySymbol.constructor.name === 'Symbol' );

//boolean primitivo
var testBoolean = true;
console.assert( typeof testBoolean === 'boolean' );
console.assert( testBoolean instanceof Object === false );
console.assert( testBoolean instanceof Boolean === false );
console.assert( Object.prototype.toString.call(testBoolean) === '[object Boolean]' );
console.assert( testBoolean.constructor.name === 'Boolean' );

//boolean objeto
// Object Boolean
var testBooleanObject = new Boolean(true);
console.assert( typeof testBooleanObject === 'object' );
console.assert( testBooleanObject instanceof Object === true );
console.assert( testBooleanObject instanceof Boolean === true );
console.assert( Object.prototype.toString.call(testBooleanObject) === '[object Boolean]' );
console.assert( testBooleanObject.constructor.name === 'Boolean' );


// Object Number
var testNumberObject = new Number(10);
console.assert( typeof testNumberObject === 'object' );
console.assert( testNumberObject instanceof Object === true );
console.assert( testNumberObject instanceof Number === true );
console.assert( Object.prototype.toString.call(testNumberObject) === '[object Number]' );
console.assert( testNumberObject.constructor.name === 'Number' );

// Primitive type string
var testString = 'text';
console.assert( typeof testString === 'string' );
console.assert( testString instanceof Object === false );
console.assert( testString instanceof String === false );
console.assert( Object.prototype.toString.call(testString) === '[object String]' );
console.assert( testString.constructor.name === 'String' );

//mensaje por consola
console.log(obj1 [ obj2, objN]);
console.log(msg [ subst1,substN]);