# Part 1 Answers

1. It will log the last value of i, which will be equal to prices.length, to the dev console. This is because i is declared with var, which has no block scope. Thus, even thought it is declared in the block scope.
2. It will log the last value in discountedPrice. Again, even though it is declared in the for block, var ignores code blocks.
3. It will log the finalPrice of the last element, since finalPrice is still in scope because it is in the same function.
4.  [50, 100, 150] will be returned since for each value in prices, it will simply be multiplied by 
1-0.5=0.5. Be multiplied by 100 and divided by 100. And then be pushed to the array discounted. For example, for the first price, 100, it will be multiplied by 0.5, and the next calculation will have no effect and so 50 will be pushed to discounted. Finally, discounted will be returned.
5. Line 11 will result in an error saying that i is not defined since the scope of i only extends to the for loop because it is declared in the for loop. This is because i is declared with let so code blocks are not ignored.
6. Line 12 will result in an error saying that discountedPrice is not defined since the scope of discountedPrice only extends to the for loop because it is declared in the for loop. This is because discountedPrice is declared with let so code blocks are not ignored.
7. Line 13 will log the last value of finalPrice. This is because finalPrice is declared with let in the same function block at line 2 and is not in a seperate code block so it will still be in scope at line 13.
8. [50, 100, 150] will be returned since for each value in prices, it will simply be multiplied by 
1-0.5=0.5. Be multiplied by 100 and divided by 100. And then be pushed to the array discounted. For example, for the first price, 100, it will be multiplied by 0.5, and the next calculation will have no effect and so 50 will be pushed to discounted. Finally, discounted will be returned since it is still in scope.
9. Line 11 will result in an error saying that i is not defined since the scope of i only extends to the for loop because it is declared in the for loop. This is because i is declared with let so code blocks are not ignored.
10. Line 12 will result in an error saying that discountedPrice is not defined since the scope of discountedPrice only extends to the for loop because it is declared in the for loop. This is because discountedPrice is declared with const so code blocks are not ignored.
11. Line 13 will log the last value of finalPrice. This is because finalPrice is declared with const (which behaves like let with respect to scope) in the same function block at line 2 and is not in a seperate code block so it will still be in scope at line 13. Note this will normally result in an error if we do not assume the const reassignments were successful.
12. The function will return [50, 100, 150], if we assume the reassigninments for the other const variables were successful. If we assume the assignments were not successful though, then the function will not return anything as an error will result.
13. 
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]

14. 
    - A. '32' This is because the + operator when used with string types is used by JS as concatentation and thus strings are not converted to numbers but are instead concatenated.
    -  B. 1 This is because - is a mathematical operator and so it converts both operands to numbers and 3-2 is 1.
    - C. 3 This is because 3 + null is mathematical expression so null is converted to a number, and JS converts null to 0 when converting it to a number.
    - D. 3null This happens because '3', the left operand, is a string. So JS treats the + like concatenation and converts null to a string type and null is simply converted to the string "null".
    - E. 4 This is because true + 3 is a mathematical expression so true, a boolean, will be converted to a number and JS converts true to 1 when converting it to a number and 1 + 3 = 3
    - F.  0 This is because false + null is mathematical expression due to the + operator and thus both false and null are converted to numbers. When converting to a number, JS converts false to 0 and null also to 0 and 0 + 0 = 0.
    - G. 3null This happens because "3", the left operand, is a string. So JS treats the + like concatenation and converts undefined to a string type and undefined is simply converted to the string "undfeined".
    - H. NaN This is because "3" - undefined will be treated as a mathematical expression because of the - and so "3" will be converted to the number 3 but when undefined is converted to a number, JS converts it to NaN and 3 - NaN will result in NaN. 

15. 
    - A. true. Because when you compare values of different types JavaScript converts those values to numbers
    - B. false. Because these are both strings, JS will compare them in lexicographical order and since '1' (the first character of '12') comes before '2' in the ascii table, '2' is not less htan '12'.
    - C. true.  Because when you compare values of different types JavaScript converts those values to numbers, so both are converted to 2 and 2=2.
    - D. false. Because === is a strict equality comparison and thus won't convert values of different types, if the types are different it will simply return false.
    - E. false. Because they are of different types, JS will convert true to a number, and true becomes converted to 1 which is not equal to 2.
    - F. true. This is because the Boolean() conversion function converts any value that is not 0, NaN, undefined, null, or "" into true. So Boolean(2) = true and true === true is true since they are both the same type so strict equality will compare as expected.
16. The == operator is a regular equality check so when operands of different types are compared, they will both be covnerted to numbers and then compared and can thus lead to some unexpected results. Whereas the === operator is a strict equality check and so, unlike ==, it checks the equality of its operands without type conversion. So 0 == false is true because false is converted to 0 but 0 === false is not because they are different types so instead of being type converted, teh expression will just return false.
17. How are you? will be printed. This is because the first condition will be false since it will convert both types to numbers (since they are different types and the comparison is equality) and true will become 1 and 2 == 1 is false. However, the else if condition will type convert 2 to a boolean and 2 will be converted to true. Since the else if condition is true, How are you? will be printed.
18. See part1-question18.js
19. [ 6, 8, 10 ] will be the result. This is because the function modifyArray will first be called. In the for loop, each time a value is pushed to the newArr array, the callback function is called, in this case doSomething which also takes a function as a parameter. doSomething is called with the current array element (1 for example) and is passed a function that is defined in the call to doSomething. When doSomething is called, it calls the callback which is passed the array element plus 2 (in the case of 1 this is 3). This function will multiply the passed in value by 2 and return it (for example 6 for the first array element) and finally doSomething returns this value to modifyArray which then pushes the value to the newArray. Thus, in the end each array element has 2 added to it and then multiplied by 2 so we get [ 6, 8, 10 ].
20. see part1-question20.js
21. 1 4 3 2 This is the output since 1 and 4 will be printed immediately because they do not have to wait for a timeout. Although the timeout to print 3 is 0 milliseconds, console.log(3) must wait until the next event cycle to execute. 2 is printed last because console.log(2) must wait an entire second before executing.