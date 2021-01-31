#  Part 3 Answers

## Part 1
1. The bug is that num1 and num2 are both typed as strings when their value is read. Therefore, when result is calculated by adding num1 and num2, it concatenates both strings rather than adding the numbers as numbers. We see this when debugging because in the watchlist it tells us that the type of result is string.
2. To fix the issue, I simply wrapped the document,getElementById() call with the Number() function to convert the read inputs to numbers before they are stored in num1 and num2. I used the Number() function so the user can calculate both floating point numbers and integers.

## Part 2
1. citylots.json is the name of the file.
2. part2.js intiated the download of the new file.
3. 11.7 MB is the size
4. It took 66ms to download
5. The user agent was Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.53
6. Apache  
7. It was last modified on Tue, 26 Jan 2021 at 22:14:13 GMT
8. The content type is application/json
9. fetchData is the method inside the initiating file that made the request.
 