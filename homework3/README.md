# Homework 3

### 1. (8 pts) Classify the following as a syntax error, semantic error, or not a compile time error. In the case where code is given, assume all identifiers are properly declared and in scope. All items refer to the Java language.

#### a. `x+++-y`
not compile-time error

#### b. `x---+y`
not compile-time error

#### c. incrementing a read-only variable
semantic

#### d. accessing a private field in another class
semantic

#### e. Using an uninitialized variable
semantic

#### f. Dereferencing a null reference
not compile-time error

#### g. `null instanceof C`
not compile-time error

#### h. `!!x`
not compile-time error

### 2. (6 pts) Here’s a code fragment in some generic language:
```
var x = 3;          // line 1
function f() {      // line 2
  print(x);         // line 3
  var x = x + 2;    // line 4
  print(x);         // line 5
}                   // line 6
f();                // line 7
```
### For each of the following outputs, state scope rules that would have caused them:
#### a. `3`
#### `5`

Variable scope begins after it is declared. Nonlocal variables with same name are used until variable is declared locally.

#### b. `undefined NaN`
Variable scope is bounded by the function or block it is declared in, ```undefined``` at beginning of function/block.

#### c. `Error on line 3: x is not declared`
Variable scope is bounded by the function or block it is declared in, but variable can't be accessed until declared.

#### d. `75354253672`
#### `75354253674`
Variable scope is bounded by the function or block it is declared in, but variable is preassigned a nonsensical value before it's declared.

#### e. `3`
#### `-23482937128`
Variable scope begins at the point of declaration, without waiting for the declaration to be complete. But since the identifier can be used right away, it appears as nonsense when used in its own declaration.

#### f. `Error on line 4: x used in its own declaration`
Variable scope is whole function, but compiler rejects use of identifier in its own declaration.

### 3. (5 pts) Describe the semantics of `private` in Ruby and C#. (Hint: they’re quite different.) Write well. You won’t get any points for a poorly written description.
In Ruby a private function may not be called with an explicit receiver, the receiver is implicitly self. In C# a private member of an object is only accessible within the body of the same class.
