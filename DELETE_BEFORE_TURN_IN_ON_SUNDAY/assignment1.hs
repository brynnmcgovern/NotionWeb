-----------------------
-- Data types of the VM
-----------------------

-- Natural numbers
data NN = O | S NN
  deriving (Eq,Show) -- for equality and printing

-- Integers
data II = II NN NN
  deriving Show -- for printing

-- Positive integers (to avoid dividing by 0)
data PP = I | T PP
  deriving (Show, Eq)

-- Rational numbers
data QQ =  QQ II PP
  deriving Show

------------------------
-- Arithmetic on the  VM
------------------------


----------------
-- PP Arithmetic
----------------

--add positive numbers
addP :: PP -> PP -> PP
addP I I = T I
addP I (T p) = T (T p)
addP (T p) q = T (addP p q)

--multiply positive numbers
multP :: PP -> PP -> PP
multP I p = p
multP p I = p
multP (T p1) p2 = addP p2 (multP p1 p2)


---------------
-- TYPECASTINGS
---------------
--cast numbers of type PP as numbers of type NN
nn_pp :: PP -> NN
nn_pp I = S O
nn_pp (T p) = S (nn_pp p)

--cast numbers of type NN to numbers of type II
ii_nn :: NN -> II
ii_nn n = II n O

--cast numbers of type PP to numbers of type II
ii_pp :: PP -> II
ii_pp p = II (nn_pp p) O

----------------
-- NN Arithmetic
----------------

-- add natural numbers
-- 0 + m = m, (n+1) + m = (n+m)+1

addN :: NN -> NN -> NN
addN O m = m
addN (S n) m = S (addN n m)

-- multiply natural numbers
multN :: NN -> NN -> NN
multN O m = O
multN (S n) m = addN (multN n m) m

-- division, eg 13 divided by 5 is 2 
divN :: NN -> PP -> NN
divN O _ = O
divN n I = n
divN n p
  | n == (nn_pp) = (S O)
  | n `subN` (nn_pp) == O = O
  | otherwise = ((n `subN`(nn_pp)) `divN` p) `addN` (S O)

subN :: NN -> NN -> NN
subN O _ = O
subN n O = n
subN (S n1) (S n2) = subN n1 n2

  
-- remainder, eg 13 modulo by 5 is 3
modN :: NN -> PP -> NN
modN n I = O  
modN O _ = O  
modN n d = modNRecurssive n d O

modNRecurssive :: NN -> PP -> NN -> NN
modNRecurssive n d result
    | n < nn_pp d     = result  
    | otherwise = modNRecurssive (subN n (nn_pp d)) d (addN result ((nn_pp I)) 

-- greatest common divisor, eg gcd 9 33 is 3
gcdP :: PP -> PP -> PP
gcdP I I = I  -- GCD of two equal positive numbers is the number itself
gcdP a I = a
gcdP I b = b
gcdP a b = gcdP b (modN (nn_pp a) b)

----------------
-- II Arithmetic
----------------

--addition
addI :: II -> II -> II
addI (II a b)(II c d) = II (addN a c)(addN b d)

--multiplication
multI :: II -> II -> II
multI (II a b)(II c d) = II (addN (multN a c)(multN b d))(addN (multN a d)(multN b c))

--negation
negI :: II -> II
negI (II a b) = II b a


--equality of Integers
instance Eq II where
  (II a b) == (II c d) = a == b && c == d
  --doesnt work


----------------
-- QQ Arithmetic
----------------

--Addition
-- Addition for rational numbers
addQ :: QQ -> QQ -> QQ
addQ (QQ a1 b1) (QQ a2 b2) = QQ (( a `multI`(ii_pp d)) `addI` ((ii_pp b) `multI` c)) (b `multP` d)


-- Multiplication for rational numbers
multQ :: QQ -> QQ -> QQ
multQ (QQ a b) (QQ c d) = QQ (a `multI` c)(b `multP` d)
    



--equality of fractions
instance Eq QQ where
  (QQ a b) == (QQ c d) = (a b) == (c d)
  --doesnt work
  
----------------
-- Normalisation
----------------

-- Normalization function for II
normalizeI :: II -> II
normalizeI (II O b) = II O b  -- 0 should have no sign
normalizeI (II (S a) b) = case normalizeI (II a b) of
  II O _ -> II O (S b)  -- Remove leading zeros and keep the sign
  normalized -> normalized

----------------------------------------------------
-- Converting between VM-numbers and Haskell-numbers
----------------------------------------------------

--precondition: Inputs are non-negative
nn_int :: Integer -> NN
nn_int n
  | n < 0 = error "Input must be non-negative"
  | n == 0 = O
  | otherwise = S (nn_int (n - 1))

int_nn :: NN -> Integer
int_nn O = 0
int_nn (S n) = 1 + int_nn n


-- Conversion from Integer to II
ii_int :: Integer -> II
ii_int n
  | n == 0 = II O O
  | n > 0  = II (nn_int n) O
  | n < 0  = let (II a _) = ii_int (-n) in II a (S O)

-- Conversion from II to Integer
int_ii :: II -> Integer
int_ii (II O O) = 0
int_ii (II (S a) O) = int_nn (S a)
int_ii (II (S a) (S _)) = -(int_nn (S a))


--precondition: Inputs are positive
pp_int :: Integer -> PP
pp_int n
  | n < 1     = error "Input must be a positive integer"
  | n == 1    = I
  | otherwise = T (pp_int (n - 1))

int_pp :: PP -> Integer
int_pp I = 1
int_pp (T p) = 1 + 2 * int_pp p

--float_qq :: QQ -> Float
float_qq (QQ ii pp) = fromIntegral (int_ii ii)/ fromIntegral (int_pp pp)
--use fromIntegral to convert from Integer to Float

-----------------------------
--Normalisation by Evaluation
-----------------------------

nbe :: II -> II
nbe (II a b) = normalizeI (II a b)

----------
-- Testing
----------
main = do
    print $ addN (S (S O)) (S O) -- S (S (S O))
    print $ multN (S (S O)) (S (S (S O))) -- S (S (S (S (S (S O)))))

    putStr "addN:  "; print $ int_nn (addN (nn_int 3) (nn_int 4)) -- 7
    putStr "multN: "; print $ int_nn (multN (nn_int 3) (nn_int 4)) -- 12


    -- Test nn_pp function
    let test_pp1 = I
    let test_pp2 = T (T I)
    let test_pp3 = T (T (T (T I)))
    putStrLn "Test cases for nn_pp:"
    putStr "nn_pp I:    "; print (nn_pp test_pp1) -- S O
    putStr "nn_pp (T T I): "; print (nn_pp test_pp2) -- S (S O)
    putStr "nn_pp (T T T T I): "; print (nn_pp test_pp3) -- S (S (S (S O)))

    -- Test ii_nn function
    let test_nn1 = O
    let test_nn2 = S (S O)
    let test_nn3 = S (S (S (S O)))
    putStrLn "\nTest cases for ii_nn:"
    putStr "ii_nn O: "; print (ii_nn test_nn1) -- II O O
    putStr "ii_nn (S (S O)): "; print (ii_nn test_nn2) -- II (S (S O)) O
    putStr "ii_nn (S (S (S (S O)))): "; print (ii_nn test_nn3) -- II (S (S (S (S O)))) O

    -- Test ii_pp function
    let test_pp4 = I
    let test_pp5 = T (T I)
    let test_pp6 = T (T (T (T I)))
    putStrLn "\nTest cases for ii_pp:"
    putStr "ii_pp I: "; print (ii_pp test_pp4) -- II (S O) O
    putStr "ii_pp (T T I): "; print (ii_pp test_pp5) -- II (S (S O)) O
    putStr "ii_pp (T T T T I): "; print (ii_pp test_pp6) -- II (S (S (S (S O)))) O

    -- Test addP function
    let test_add1 = addP I (T (T I))
    let test_add2 = addP (T (T I)) I
    let test_add3 = addP (T (T (T I))) (T (T (T I)))

    putStrLn "Test cases for addP:"
    putStr "addP I (T (T I)): "; print test_add1 -- T (T (T I))
    putStr "addP (T (T I)) I: "; print test_add2 -- T (T (T I))
    putStr "addP (T (T (T I))) (T (T (T I))): "; print test_add3 -- T (T (T (T (T (T (T (T I)))))))

-- Test multP function
    let test_mult1 = multP I (T (T I))
    let test_mult2 = multP (T (T I)) I
    let test_mult3 = multP (T (T (T I))) (T (T (T I)))

    putStrLn "\nTest cases for multP:"
    putStr "multP I (T (T I)): "; print test_mult1 -- T (T (T I))
    putStr "multP (T (T I)) I: "; print test_mult2 -- T (T (T I))
    putStr "multP (T (T (T I))) (T (T (T I))): "; print test_mult3 -- T (T (T (T (T (T (T (T I)))))))
    
    -- Test addI function
    let num1 = II (S (S (S O))) (S O)
    let num2 = II (S (S O)) (S (S O))
    let resultAdd = addI num1 num2
    putStrLn "Test cases for addI:"
    putStr "addI (II (S (S (S O))) (S O)) (II (S (S O)) (S (S O))): "
    print resultAdd -- II (S (S (S (S (S O))))) (S (S (S (S O))))


    -- Test negI function
    let num3 = II (S (S O)) (S (S (S O)))
    let resultNeg = negI num3
    putStrLn "\nTest cases for negI:"
    putStr "negI (II (S (S O)) (S (S (S O)))): "
    print resultNeg -- II (S (S (S (S O)))) (S (S O))


    -- Test multI function
    let num4 = II (S (S (S O))) (S O)
    let num5 = II (S (S (S O))) (S (S O))
    let resultMult = multI num4 num5
    putStrLn "\nTest cases for multI:"
    putStr "multI (II (S (S (S O))) (S O)) (II (S (S (S O))) (S (S O))): "
    print resultMult -- II (S (S (S (S (S (S (S (S O)))))))) (S (S (S (S (S (S O))))))))
