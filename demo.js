// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(50,50);
btn.label('Button');
btn.state(function(e){
	console.log('State has been changed!')
	console.log(e);
	
});
btn.onclick(function(e){
	console.log('Button has been cicked!')
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
	console.log('Widget state has been changed!')
	console.log(e);
});

// Implement a MyToolkit Radio Button
var rdiobtn = new MyToolkit.RadioButton;
rdiobtn.move(450,50);


// Implement a MyToolkit Text Box
var textbox = new MyToolkit.TextBox;
textbox.move(50, 200);

var progressbar = new MyToolkit.ProgressBar;
progressbar.move(450, 200);
