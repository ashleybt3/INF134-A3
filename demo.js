// File name: demo.js

import {MyToolkit} from './mytoolkit.js';


// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(50,50);
btn.label('Button');
btn.state(function(e){
	console.log('Button widget state has been changed!')
	console.log(e);
	
});
btn.onclick(function(e){
	console.log('Button has been clicked!')
	console.log(e);
});

// Implement a MyToolkit Check Box
var checkbox = new MyToolkit.CheckBox;
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

// Implement a MyToolkit Radio Button
var radiobtn = new MyToolkit.RadioButton;
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

// Implement a MyToolkit Text Box
var textbox = new MyToolkit.TextBox;
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

var scrollbar = new MyToolkit.ScrollBar;
scrollbar.move(800, 28);
scrollbar.onclick(function(e){
	console.log('Scroll Bar state has been changed!')
	console.log(e);
});

var progressbar = new MyToolkit.ProgressBar;
progressbar.move(450, 200);
