Phase 1 Question 

What did you accomplish in this phase? Why is using "use strict"; considered a “safety net” for developers?

In this phase, I enabled 'use strict' to catch common mistakes early. I also created a function that verifies the key and returns the appropriate status. Developers view 'use strict' as a safety net because it transforms subtle issues into explicit errors right away—preventing bugs from slipping into production unnoticed. This can save developers hours of debugging later one. 



Phase 2 Question 

What is the difference between returning a value (like "Access Denied") and throwing an error? Why would a developer prefer throwing a custom error class over a generic Error?

Returning a value means the function completed its task successfully, allowing the program to continue executing normally. While, throwing an error indicates the function cannot complete its job—it immediately halts execution and bubbles up until it finds a try...catch block to handle it. Using targeted custom errors improves debugging visibility and makes the code self-documenting.



Phase 3 Question

How does the finally block behave differently than the catch block? Describe a real-world scenario where a finally block would be critical for a program’s stability.

The finally block is guaranteed to run whether an error occurs or not, whereas the catch block is conditional and only executes if an error is thrown. A real-world scenario where finally is critical is database connection management. If a server opens a connection and fails halfway through, failing to close it can cause connection leaks and crash the server. The finally block ensures resources are safely cleaned up every time.
