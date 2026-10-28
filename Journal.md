Phase 1 Question 

What did you accomplish in this phase? Why is using "use strict"; considered a “safety net” for developers?

In this phase, I enabled 'use strict' to catch common mistakes early. I also created a function that verifies the key and returns the appropriate status. Developers view 'use strict' as a safety net because it transforms subtle issues into explicit errors right away—preventing bugs from slipping into production unnoticed. This can save developers hours of debugging later one. 



Phase 2 Question 

What is the difference between returning a value (like "Access Denied") and throwing an error? Why would a developer prefer throwing a custom error class over a generic Error?

Returning a value means the function completed its task successfully, allowing the program to continue executing normally. While, throwing an error indicates the function cannot complete its job—it immediately halts execution and bubbles up until it finds a try...catch block to handle it. Using targeted custom errors improves debugging visibility and makes the code self-documenting.
