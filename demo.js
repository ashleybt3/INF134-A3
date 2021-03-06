// File name: demo.js

import {MyToolkit} from './mytoolkit.js';



/** Create A Button Object */
/** @type {Button} */
var btn = new MyToolkit.Button;
/**
 * positionable by consuming code
 * @type {rect}
 */
btn.move(50,50);
/**
 * Expose a custom label property to set the text on the button.
 * @type {rect}
 */
btn.label('Button');
/**  
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
*/
btn.state(function(e){
	console.log('Button widget state has been changed!')
	console.log(e);
});
/**
 * Expose an event handler that notifies consuming code when the button is clicked.
 * @function
 * @name onclick
 * @param {event} e
 */
btn.onclick(function(e){
	console.log('Button has been clicked!')
	console.log(e);
});




/** Implement a MyToolkit Check Box */
/** @type {CheckBox} */
var checkbox = new MyToolkit.CheckBox;
/**
 * positionable by consuming code
 * @type {rect}
 */
checkbox.move(250,60);
/** 
 * Expose a custom label property to set the text that appears to the right of the check box.
 * @type {rect}
 */
checkbox.label('Check Box');
/** 
 * Expose an event handler that notifies consuming code when the checked state has changed.
 * @function
 * @name onclick
 * @param {event} e
 */
checkbox.onclick(function(e){
	console.log('Checked state has been changed!')
	console.log(e);
});
/**
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
 */
checkbox.state(function(e){
	console.log('Check Box widget state has been changed!')
	console.log(e);
});



/** Implement a MyToolkit Radio Button */
/** @type {Button} */
var radiobtn = new MyToolkit.RadioButton;
/**
 * positionable by consuming code
 * @type {circle}
 */
radiobtn.move(450,50);
/**
 * Expose a custom label property to set the text that appears to the right of each button.
 * @type {circle}
 * @type {circle}
 */
radiobtn.labelOne('Radio Button 1');
radiobtn.labelTwo('Radio Button 2');
/**
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
 */
radiobtn.state(function(e){
	console.log('Radio Button widget state has been changed!')
	console.log(e);
});
/**
 * Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
 * @function
 * @name onclick
 * @param {event} e
 */
radiobtn.onclick(function(e){
	console.log('Checked state has been changed:', e.target.id, 'has been selected!');
	console.log(e);
})



/** Implement a MyToolkit Text Box */
/** @type {TextBox} */
var textbox = new MyToolkit.TextBox;
/** 
 * positionable by consuming code
 * @type {rect}
 */
textbox.move(50, 200);
/** 
 * Expose a custom property to get the text entered by the user.
 * @function
 * @name content
 */
textbox.content(function(text){
	console.log('Current Output:', text);
})
/**
 * Expose an event handler that notifies consuming code when the text has changed.
 * @function 
 * @name keyup
 */
textbox.keyup(function(e){
	console.log('Text content has been changed!')
	console.log(e);
})
/** 
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
 */
textbox.state(function(e){
	console.log('Text Box widget state has been changed!')
	console.log(e);
});



/** Implement a MyToolkit Scroll Bar */
/** @type {ScrollBar} */
var scrollbar = new MyToolkit.ScrollBar;
/** 
 * positionable by consuming code
 * @type {rect}
 */
scrollbar.move(750, 50);
/**
 * Expose a custom property to set the height of the scroll bar.
 * @type {rect}
 */
scrollbar.setHeight(300);
/** 
 * Expose a custom property to get the position of the scroll thumb.
 * @function
 * @name position
 * @param {number} pos
 */
scrollbar.position(function(pos){
	console.log("Scroll Thumb Position:", pos);
})
/** 
 * Expose an event handler that notifies consuming code when the scroll thumb has moved and in which direction.
 * @function
 * @name onclick
 * @param {event} e
 */
scrollbar.onclick(function(e){
	console.log('Scroll Bar state has been changed!')
	console.log(e);
});
/**
 * @function
 * @name scrollDirection
 * @param {event} e
 */
scrollbar.scrollDirection(function(d){
	console.log("Scroll Bar Direction: ", d);
});
/**
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
 */
scrollbar.state(function(e){
	console.log('Scroll Bar widget state has been changed!')
	console.log(e);
});
// *********************************************



/** Implement a MyToolkit Progress Bar */
/**  @type {ProgressBar} */
var progressbar = new MyToolkit.ProgressBar;
/** @type {number} */
var barWidth = 200;
/** 
 * positionable by consuming code
 * @type {rect}
 */
progressbar.move(450, barWidth);
/** 
 * set the width of the progress bar
 * @type {rect}
 */
progressbar.width(200);
/** 
 * Expose a custom property to set the increment value of the progress bar.
 * @type {rect}
 */
progressbar.setIncrement(20);
/**
 * Expose a custom property to get the increment value of the progress bar.
 * @type {number}
 */
var getInc = progressbar.getIncrement();
/**
 * Expose a custom method to increment the value of the progress bar. The method should support an arbitrary numerical value from 0-100.
 * @function
 * @name inc
 */
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
/**
 * Expose an event handler that notifies consuming code when the progress bar has incremented.
 * @function
 * @name onIncrement
 * @param {event} e
 */
progressbar.onIncrement(function(e){
	console.log('Progress Bar has been incremented!')
	console.log(e);
});
/**
 * Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state
 * @param {event} e
 */
progressbar.state(function(e){
	console.log('Progress Bar widget state has been changed!')
	console.log(e);
});


/** Implement a MyToolkit Spinner */
/** @type {Spinner} */
var spinner = new MyToolkit.Spinner;
/** 
 * positionable by consuming code
 * @type {rect} 
*/
spinner.move(450, 300);
/** Expose an event handler that notifies consuming code when the widget state has changed.
 * @function
 * @name state 
 * @param {event} e
 */
spinner.state(function(e){
	console.log("Spinner widget state has changed")
	console.log(e)
});
