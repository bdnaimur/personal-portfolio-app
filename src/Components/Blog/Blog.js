import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';

const Blog = () => {

    function toggleText() {
        console.log("clicked");
        // Get all the elements from the page
        var points =
            document.getElementById("points");

        var showMoreText =
            document.getElementById("moreText");

        var buttonText =
            document.getElementById("textButton");

        // If the display property of the dots 
        // to be displayed is already set to 
        // 'none' (that is hidden) then this 
        // section of code triggers
        if (points.style.display === "none") {

            // Hide the text between the span
            // elements
            showMoreText.style.display = "none";

            // Show the dots after the text
            points.style.display = "inline";

            // Change the text on button to 
            // 'Show More'
            buttonText.innerHTML = "Show More";
        }

        // If the hidden portion is revealed,
        // we will change it back to be hidden
        else {

            // Show the text between the
            // span elements
            showMoreText.style.display = "inline";

            // Hide the dots after the text
            points.style.display = "none";

            // Change the text on button
            // to 'Show Less'
            buttonText.innerHTML = "Show Less";
        }
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-6">
                        <h3 style={{ marginTop: "200px", textAlign: "center" }}>
                            endsWith() :
                        </h3>
                    </div> */}
                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The endsWith() method</h5>
                                <p class="card-text">The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
                                let str = 'To be, or not to be, that is the question.';
                                <span id="points">...</span>
                                    <span id="moreText">
                                        console.log (str.endsWith('question.'))  // true;
                                        console.log (str.endsWith('to be'))  // true
                                        console.log (str.endsWith('to be', 19)) // true
                                        This method lets you determine whether or not a string ends with another string. This method is case-sensitive.
                                </span>
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <h3>
                            indexOf():
                        </h3>
                    </div> */}
                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The indexOf() method</h5>
                                <p class="card-text">indexOf(searchElement, fromIndex)
                                    <br />
                                    searchElement:
                                    Element to locate in the array.
                                    fromIndex: is Optional
                                    The index to start the search at. If the index is greater 
                                    <span id="points">...</span>
                                    <span id="moreText">
                                    than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
                                    The first index of the element in the array; -1 if not found.
                                    </span>
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The lastIndexOf() method</h5>
                                <p class="card-text">The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
                                <span id="points">...</span>
                                    <span id="moreText">
                                                                            searchElement
                                        Element to locate in the array.
                                        fromIndex Optional
                                        The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
                                        The first index of the element in the array; -1 if not found.
                                </span>
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The slice() method</h5>
                                    <p class="card-text">The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
                                        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
                                        console.log(animals.slice(2));
                                        // expected output: Array ["camel", "duck", "elephant"]
                                        console.log(animals.slice(2, 4));
                                        // expected output: Array ["camel", "duck"]
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The split() method</h5>
                                    <p class="card-text">The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. separator Optional The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.
                                    •	The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
                                    •	If separator contains multiple characters, that entire character sequence must be found in order to split.                           
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The sort() method</h5>
                                    <p class="card-text">The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array.
                                    By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.
                                    The sort() method casts elements to strings and compares the strings to determine the orders.
                                    let scores = [  9, 80, 10, 20, 5, 70];
                                    // sort numbers in ascending order
                                    scores.sort((a, b) => a - b);
                                    console.log(scores);
                                    Code language: JavaScript (javascript)
                                    Output: [ 5, 9, 10, 20, 70, 80 ]           
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The Join() method</h5>
                                    <p class="card-text">Join joins elements of an array into a string separated by whatever you pass in as an argument to join. This argument is frequently referred to as a delimiter. Here are a couple of examples:
                                    let arr = ["Hello", "World"];
                                    arr.join(" "); // "Hello World"
                                    let arr2 = ["I", "have", "a", "big", "announcement"];
                                    arr2.join("! ") + "!"; // "I! have! a! big! announcement!"
                                    Number:
                                    Besides the primitive number type, JavaScript also provides the Number reference type for numeric values.

                                    To create a Number object, you use the Number constructor and pass in a number value as follows:

                                    var numberObject = new Number(100);
                                    Code language: JavaScript (javascript)
                                    This example defined a numberObject with a numeric value of 100.
   
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">The Substring() method</h5>
                                    <p class="card-text">The JavaScript String.prototype.substring() returns the part of the string between the start and end indexes:
                                    str.substring(startIndex [, endIndex])
                                    Code language: JavaScript (javascript)
                                    The substring() method accepts two parameters: startIndexand endIndex:
                                    The startIndex specifies the index of the first character to include in the returned substring.
                                    The endIndex determines the first character to exclude from the returned substring. In other words, the returned substring doesn’t include the character at the endIndex.
                                    If you omit the endIndex, the substring() returns the substring to the end of the string.
 
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">JavaScript trim() method</h5>
                                    <p class="card-text">To remove whitespace characters from the beginning or from the end of a string only, you use the trimStart() or trimEnd() method.
                                    JavaScript trim() example
                                    The following example shows how to use the trim() to remove whitespace from both sides of a string:
                                    let str = '  JS trim  ';
                                    let result = str.trim();
                                    console.log(result);
                                    Code language: JavaScript (javascript)
                                    Output: "JS trim"
                                    Code language: JSON / JSON with Comments (json)
                                    Summary
                                    Use the trim() to remove whitespace characters from both ends of a string.
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3 mb-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">JavaScript concat() method</h5>
                                    <p class="card-text">String.prototype.concat() method accepts a list of strings and returns a new string that contains the combined strings:
                                    string.concat(str1, [...strN]);
                                    Code language: JavaScript (javascript)
                                    If the arguments are not strings, the concat() converts them to strings before carrying the concatenation.
                                    It’s recommended that you use the + or += operator for string concatenation to get better performance.
                                    JavaScript String concat() examples
                                    Let’s take some examples of using the concat() method.
                                    1) Concatenating strings
                                    The following example uses the concat() method to concatenate strings:
                                    let greeting = 'Hi';
                                    let message = greeting.concat(' ', 'John');
                                    console.log(message);
                                    Code language: JavaScript (javascript)
                                    Output: Hi John.
                                </p>
                                <button onClick={toggleText} id="textButton">Show More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <h1 >
                GeeksforGeeks
            </h1>

            <h3>Show More and Show Less Example</h3>

            <p>
                GeeksforGeeks was born out of necessity-
                a need to provide a convenient and
                one-stop educational portal to all the
                students of Computer Science.
                <span id="points">...</span>


                <span id="moreText"> This necessity was
                as personal to me as it was universal.
                This need combined with my passion for
                teaching resulted in GeeksforGeeks as
                we know today. My message to you, in
                our inaugural edition of Geeks Digest,
                would be that if you are looking for
                a problem to work on, you don’t need
                to look very far for it. All you should
                do is to look around yourself.
                </span>
            </p> */}


            <Footer />
        </div>
    );
};

export default Blog;