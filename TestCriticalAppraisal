# My Journey into LambdaNat5: Exploring the Interpreter, Writing Code, and Adding Features

## Introduction
Diving into LambdaNat5's interpreter and programming paradigm has been an eye-opener. In this essay, I'll take you through the interpreter's workings, share my experiences with exercises, compare LambdaNat5 with Haskell, and discuss how I extended LambdaNat5 with a new feature called "isemptyfile."

## Understanding the Interpreter Implementation
The interpreter, residing in `Interpreter.hs`, is crucial for LambdaNat5. It uses a call-by-name approach, meaning functions aren't evaluated until needed. Here's a simple example of how the interpreter handles function application:

```haskell
evalCBN :: Exp -> Exp  
evalCBN (EApp e1 e2) =
    case (evalCBN e1) of
        (EAbs i e3) -> evalCBN (subst i e2 e3)
        e3 -> EApp e3 e2
-- ... other cases ...
evalCBN x = x -- catch-all clause
