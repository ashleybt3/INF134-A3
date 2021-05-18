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
// Expose a custom label property to set the text that appears to the right of the check box.
checkbox.label('Check Box');
// Expose an event handler that notifies consuming code when the checked state has changed.
checkbox.onclick(function(e){
	console.log('Checked state has been changed!')
	console.log(e);
});
// Expose an event handler that notifies consuming code when the widget state has changed.
checkbox.state(function(e){
	console.log('Check Box widget state has been changed!')
	console.log(e);
});
// ********************************************



// ***** Implement a MyToolkit Radio Button *****
var radiobtn = new MyToolkit.RadioButton;
// positionable by consuming code
radiobtn.move(450,50);
// Expose a custom label property to set the text that appears to the right of each button.
radiobtn.labelOne('Radio Button 1');
radiobtn.labelTwo('Radio Button 2');
// Expose an event handler that notifies consuming code when the widget state has changed.
radiobtn.state(function(e){
	console.log('Radio Button widget state has been changed!')
	console.log(e);
});
// Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
radiobtn.onclick(function(e){
	console.log('Checked state has been changed:', e.target.id, 'has been selected!');
	console.log(e);
})
// **********************************************


// ***** Implement a MyToolkit Text Box *****
var textbox = new MyToolkit.TextBox;
// positionable by consuming code
textbox.move(50, 200);
// Expose a custom property to get the text entered by the user.
textbox.content(function(text){
	console.log('Current Output:', text);
})
// Expose an event handler that notifies consuming code when the text has changed.
textbox.keyup(function(e){
	console.log('Text content has been changed!')
	console.log(e);
})
// Expose an event handler that notifies consuming code when the widget state has changed.
textbox.state(function(e){
	console.log('Text Box widget state has been changed!')
	console.log(e);
});
// *******************************************


// ***** Implement a MyToolkit Scroll Bar *****
var scrollbar = new MyToolkit.ScrollBar;
// positionable by consuming code
scrollbar.move(750, 50);
// Expose a custom property to set the height of the scroll bar.
scrollbar.setHeight(300);
// Expose a custom property to get the position of the scroll thumb.
scrollbar.position(function(pos){
	console.log("Scroll Thumb Position:", pos);
})
// Expose an event handler that notifies consuming code when the scroll thumb has moved and in which direction.
scrollbar.onclick(function(e){
	console.log('Scroll Bar state has been changed!')
	console.log(e);
});
scrollbar.scrollDirection(function(d){
	console.log("Scroll Bar Direction: ", d);
});
// Expose an event handler that notifies consuming code when the widget state has changed.
scrollbar.state(function(e){
	console.log('Scroll Bar widget state has been changed!')
	console.log(e);
});
// *********************************************



// ***** Implement a MyToolkit Progress Bar *****
var progressbar = new MyToolkit.ProgressBar;
var barWidth = 200;
// positionable by consuming code
progressbar.move(450, barWidth);
// set the width of the progress bar
progressbar.width(200);
// Expose a custom property to set the increment value of the progress bar.
progressbar.setIncrement(20);
// Expose a custom property to get the increment value of the progress bar.
var getInc = progressbar.getIncrement();
// Expose a custom method to increment the value of the progress bar. The method should support an arbitrary numerical value from 0-100.
setInterval(inc, 1000);
var incVal = 0;
function inc(){
	incVal += getInc;
	if( incVal> barWidth){
		incVal = 0
		progressbar.incrementBar(incVal)

	}
	else{
		progressbar.incrementBar(incVal)
	}
}
// Expose an event handler that notifies consuming code when the progress bar has incremented.
progressbar.onIncrement(function(e){
	console.log('Progress Bar has been incremented!')
	console.log(e);
});
// Expose an event handler that notifies consuming code when the widget state has changed.
progressbar.state(function(e){
	console.log('Progress Bar widget state has been changed!')
	console.log(e);
});
// **********************************************


// ***** Implement a MyToolkit Spinner *****
var spinner = new MyToolkit.Spinner;
// positionable by consuming code
spinner.move(450, 300);
spinner.state(function(e){
	console.log("Spinner widget state has changed")
	console.log(e)
})
// ******************************************