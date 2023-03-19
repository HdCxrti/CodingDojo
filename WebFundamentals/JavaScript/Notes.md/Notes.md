### String

**Strings** are simply characters that are grouped together and surrounded by quotation marks. Strings can have any amount of characters inside of them, and can hold numbers and special characters.

```js
var myStringVariable = "My name is Jeff!";
var password = "Password1234!";
console.log(myStringVariable); //My name is Jeff!
```

### Number

**Numbers** are exactly what you think they are: numbers! In Javascript, whole numbers and floating point numbers (decimals) are all considered "numbers." You can perform mathematical operations using variables when numbers are assigned to them.

```js
var myNum = 5;
var myOtherNum = 10;
console.log(myNum + myOtherNum); //15
```

### Undefined

A variable that has not yet been assigned a value takes on the value of **undefined.** See the following code snippet:

```js
var myVar;
console.log(myVar); //undefined would be printed to your console!
```

### Null

**Null** and **undefined** are sometimes incorrectly used interchangeably. They are very different! As you read above, undefined is the value that is given to a variable that has not yet explicitly been assigned a value. **Null** is a value that is explicitly assigned, and often used when wanting to explicitly state that nothing is currently being held in this variable.

### Boolean

**Boolean** is a very fancy way of saying **true** or **false**!

# Math Operations

While we don't dive too deep into math when programming, we do still use some of the fundamentals. We can use any of the basic mathematics operations you might expect like addition(+), subtraction(-), division(/), and multiplication(\*). However, there are a few options we have that might not be so intuitive:

### Modulus(%)

This is also known as calculating the **remainder**. Basically, we can see if 2 numbers were to be divided, would anything remain.

```js
console.log(5 % 2); //This would print 1
console.log(6 % 2); //This would print 0
console.log(8 % 3); //This would print 2copy
```

This is especially useful to see if some number is divisible by another. In the example above, since there was a remainder of 1 with 5%2, it means that 5 is not evenly divisible by 2. However, since 6%2 gives a remainder of 0, we can say that 6 is divisible by 2.

### Removing Decimal Places

When dividing numbers we often find ourselves with some decimal. However, many times we don't want a decimal on our resulting number. JavaScript gives us quite a few ways to remove the decimal and get back to a whole integer.

### **Math.round(num)**

This rounds a number like we are used to. If the decimal is .5 or up it will round up to the next number, where if the number is .49 or below it will round down:

```js
var num1 = Math.round(2.5); //num1 is 3
var num2 = Math.round(2.4); //num2 is 2
var num3 = Math.round(-2.9); //num3 is -3
var num4 = Math.round(-2.1); //num4 is -2copy
```

### **Math.floor(num)**

This always rounds a number down:

```js
var num1 = Math.floor(2.5); //num1 is 2
var num2 = Math.floor(2.4); //num2 is 2
var num3 = Math.floor(-2.9); //num3 is -3
var num4 = Math.floor(-2.1); //num4 is -3copy
```

### **Math.ceil(num)**

This always rounds a number up:

```js
var num1 = Math.ceil(2.5); //num1 is 3
var num2 = Math.ceil(2.4); //num2 is 3
var num3 = Math.ceil(-2.9); //num3 is -2
var num4 = Math.ceil(-2.1); //num4 is -2copy
```

### **Math.trunc(num)**

This always truncates the number, chopping off the decimal regardless of what the number is:

```js
var num1 = Math.trunc(2.5); //num1 is 2
var num2 = Math.trunc(2.4); //num2 is 2
var num3 = Math.trunc(-2.9); //num3 is -2
var num4 = Math.trunc(-2.1); //num4 is -2
```

### A for loop is usually used when you want to repeat a process a known number of times.

```js
for (var i = 0; i < 10; i++) {
  console.log("Scott is a dookie butt");
}
```

### A while loop is usually used when you want to repeat a process until some condition is met.

```js
var num = 0;
while(num < 10;) {
    console.log("Scott is a dookie butt");
    i++;
}
```

### Loops are cool!

```js
for (var count = 0; count < 10; count++) {
  console.log(count);
}
```

### Iterators

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value
The next value in the iteration sequence.

done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

Once created, an iterator object can be iterated explicitly by repeatedly calling next(). Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to next() should continue to return {done: true}.

The most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.

While it is easy to imagine that all iterators could be expressed as arrays, this is not true. Arrays must be allocated in their entirety, but iterators are consumed only as necessary. Because of this, iterators can express sequences of unlimited size, such as the range of integers between 0 and Infinity.

Here is an example which can do just that. It allows creation of a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart. Its final return value is the size of the sequence it created, tracked by the variable iterationCount.

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
```
