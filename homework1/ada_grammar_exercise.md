a. What can you say about the relative precedences of `and` and `or`?
> `and` takes precedence over `or`

b. If possible, give an AST for the expression `X and Y or Z`. (Assume, of course, that an Exp5 can lead to identifiers and numbers, etc.) If this is not possible, prove that it is not possible.
> {Or {And {TermX} {TermY}} {TermZ}}

c. What are the associativities of the additive operators? The relational operators?
> The additive and relational operators' associativity cannot be determined through the syntax, but can probably be determined through the semantics.

d. Is the `not` operator right associative? Why or why not?
> The `not` operator in the expression `"not" Exp5` is not associative because it cannot be chained together with other `not` operators.

e. Why do you think the negation operator was given a lower precedence than multiplication?
> To carry out multiplication operations first, then negate the entire product.

f. Give an abstract syntax tree for the expression `-8 * 5`.
> {Negate {Times {Numlit 8} {Numlit 5}}}

g. Suppose the grammar were changed by dropping the negation from Exp2 and adding `- Exp5` to Exp4. Give the abstract syntax tree for the expression `-8 * 5` according to the new grammar.
> {Times {Negate {Numlit 8}} {Numlit 5}}
