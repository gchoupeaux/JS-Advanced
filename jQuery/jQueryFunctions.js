/*
If you don't want to download and host jQuery yourself,
you can include it from a CDN (Content Delivery Network).
Both Google and Microsoft host jQuery.

Google
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

Microsoft
<head>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
</head>
*/

/*
The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:
*/
$(this).hide() //hides the current element.
$("p").hide() //hides all <p> elements.
$(".test").hide() //hides all elements with class="test".
$("#test").hide() //hides the element with id="test".

/*
The Document Ready Event
You might have noticed that all jQuery methods in our examples, are inside a document ready event:
*/
$(document).ready(function(){
   // jQuery methods go here...
});
//Tip: The jQuery team has also created an even shorter method for the document ready event:
$(function(){
   // jQuery methods go here...
});
