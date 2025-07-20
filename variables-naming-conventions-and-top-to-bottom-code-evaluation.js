/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);
/*
I find that the variable names in the first project are far too vague, and they do not 
follow the best practice naming convention of camelCase. While the code works, it is so
unclear what purpose each variable serves until the output is printed. Before then, it 
is very unclear what the purpose of the code or the nature of the message it is displaying.

I think it is important to avoid using variable names that are too short and that lack 
description, or cause the code to be confusing or unclear. I think you want to avoid 
using variable names that do not indicate at least somewhat the purpose of the code. This
way, other developers who are working on the same project are able to quickly and easily
understand the purpose and goal of the code, and have a better grasp on what they need 
to work on or what their goal needs to be with the code. 
*/

/* Project with updated naming conventions */
let customerName = "Alice";
let numApples = 5;
let priceOfApples = 20;
let storeName = "Walmart";
let dayOfWeek = "Thursday";
let purchaseMessage = customerName + " bought " + numApples + " items for $" + 
  priceOfApples + " at " + storeName + " on " + dayOfWeek + ".";

console.log(purchaseMessage);