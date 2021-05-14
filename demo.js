// File name: demo.js

import {MyToolkit} from './mytoolkit.js';


// ***** Implement a MyToolkit Button *****
var btn = new MyToolkit.Button;
// positionable by consuming code
btn.move(50,50);
// Expose a custom label property to set the text on the button.
btn.label('Button');
// Expose an event handler that notifies consuming code when the widget state has changed.
btn.state(function(e){
	console.log('Button widget state has been changed!')
	console.log(e);
});
// Expose an event handler that notifies consuming code when the button is clicked.
btn.onclick(function(e){
	console.log('Button has been clicked!')
	console.log(e);
});
// *****************************************


// ***** Implement a MyToolkit Check Box *****
var checkbox = new MyToolkit.CheckBox;
// positionable by consuming code
checkbox.move(250,60);
checkbox.label('Check Box');
checkbox.onclick(function(e){
	console.log('Checked state has been changed!')
	console.log(e);
});
checkbox.state(function(e){
	console.log('Check Box widget state has been changed!')
	console.log(e);
});
// ********************************************



// ***** Implement a MyToolkit Radio Button *****
var radiobtn = new MyToolkit.RadioButton;
// positionable by consuming code
radiobtn.move(450,50);
radiobtn.labelOne('Radio Button 1');
radiobtn.labelTwo('Radio Button 2');
radiobtn.state(function(e){
	console.log('Radio Button widget state has been changed!')
	console.log(e);
});
radiobtn.onclick(function(e){
	console.log('Checked state has been changed:', e.target.id, 'has been selected!');
	console.log(e);
})
// **********************************************


// ***** Implement a MyToolkit Text Box *****
var textbox = new MyToolkit.TextBox;
// positionable by consuming code
textbox.move(50, 200);
textbox.content(function(text){
	console.log('Current Output:', text);
})
textbox.keyup(function(e){
	console.log('Text content has been changed!')
	console.log(e);
})
textbox.state(function(e){
	console.log('Text Box widget state has been changed!')
	console.log(e);
});
// *******************************************


// ***** Implement a MyToolkit Scroll Bar *****
var scrollbar = new MyToolkit.ScrollBar;
// scrollbar.setHeight(300);
console.log(scrollbar.position);
scrollbar.onclick(function(e){
	console.log('Scroll Bar state has been changed!')
	console.log(e);
	
	// console.log(scrollbar.position());
});
scrollbar.scrollDirection(function(d){
	console.log("Scroll Bar Direction: ", d);
});
scrollbar.state(function(e){
	console.log('Scroll Bar widget state has been changed!')
	console.log(e);
});
// *********************************************



// ***** Implement a MyToolkit Progress Bar *****
var progressbar = new MyToolkit.ProgressBar;
// set the width of the progress bar
progressbar.width(200);
// get the increment value of the progress bar
console.log(progressbar.getIncrement);
progressbar.incrementBar(100);
// **********************************************


// ***** Implement a MyToolkit Spinner *****
var spinner = new MyToolkit.Spinner;
// positionable by consuming code
spinner.move(50, 400);
// ******************************************