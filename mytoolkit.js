// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','100%');
    var Button = function(){
        
        var button = draw.group();
        var rect = button.rect(100,40).fill('#f2e6ff')
        var text = button.text('').move(25,5)
        var currentState = null
        var clickState = null

        rect.attr('rx', 15)
        rect.stroke({color: 'black', opacity: 0.8, width: 3 })

        button.mouseover(function(event){
            rect.fill({ color: '#e5ccff'})
            currentState(event)
        })
        button.mouseout(function(event){
            rect.stroke('black').fill('#f2e6ff')
            currentState(event)
        })
        
        button.click(function(event){
            rect.fill({ color: '#ccbddb'})
            currentState(event)
            clickState(event)
        })
        return {
            move: function(x, y) {
                button.move(x, y);
            },
            state: function(eventHandler){
                currentState = eventHandler
            },
            onclick: function(eventHandler){
                clickState = eventHandler
            },
            label: function(x){
                text.text(x)
            }
        }
    }
    
    var RadioButton = function() {
        var window = draw.group();
        window.rect(150,100).stroke('black').fill('white')

        var button = draw.group();

        var selectedButton = null

        
        var rdiobtn1 = button.circle(20,20).stroke('black').fill('white')

        rdiobtn1.move(10,10)
        rdiobtn1.attr('id', 'buttonOne')

        var rdiobtn2 = button.circle(20,20).stroke('black').fill('white')
        rdiobtn2.move(10,40)
        rdiobtn2.attr('id', 'buttonTwo')

        var rdiobtn3 = button.circle(20,20).stroke('black').fill('white')
        rdiobtn3.move(10,70)
        rdiobtn3.attr('id', 'buttonThree')

        var label = draw.group();
        var text1 = label.text('Radio Button 1').move(40,10);
        var text2 = label.text('Radio Button 2').move(40,40);
        var text3 = label.text('Radio Button 3').move(40,70);
        
        

        window.add(button)
        window.add(label)
        rdiobtn1.click(function(id){
            // console.log(id['srcElement']['id']);
            if(selectedButton == 'buttonThree'){
                rdiobtn3.fill('white').stroke({color: 'black', width: 1 })
            }
            else if(selectedButton == 'buttonTwo'){
                rdiobtn2.fill('white').stroke({color: 'black', width: 1 })
                
            }
            selectedButton = 'buttonOne'
            rdiobtn1.fill('white').stroke({color: '#b366ff', opacity: 0.8, width: 5 })
        })

        rdiobtn2.click(function(id){
            // console.log(id['srcElement']['id']);           
            if(selectedButton == 'buttonThree'){
                rdiobtn3.fill('white').stroke({color: 'black', width: 1 })
            }
            else if(selectedButton == 'buttonOne'){
                rdiobtn1.fill('white').stroke({color: 'black', width: 1 })

            }
            selectedButton = 'buttonTwo'
            rdiobtn2.fill('white').stroke({color: '#b366ff', opacity: 0.8, width: 5 })

        })

        rdiobtn3.click(function(id){
            // console.log(id['srcElement']['id']);           
            if(selectedButton == 'buttonTwo'){
                rdiobtn2.fill('white').stroke({color: 'black', width: 1 })
            }
            else if(selectedButton == 'buttonOne'){
                rdiobtn1.fill('white').stroke({color: 'black', width: 1 })

            }
            selectedButton = 'buttonThree'
            rdiobtn3.fill('white').stroke({color: '#b366ff', opacity: 0.8, width: 5 })

        })

        return {
            move: function(x,y){
                window.move(x,y)
            }
        }


    }
    

    var CheckBox = function(){
        // var window = draw.group();
        // window.rect(150,75).stroke('black').fill('white')
        
        var currentState = null
        var clickedState = false
        var box = draw.group();
        
        var rect = box.rect(20, 20).fill("white").stroke("grey")
        rect.attr('rx', 3)
        rect.attr('stroke-width', 2)
  
        var line1 = box.line(8, 15, 15, 8).stroke({ width: 2, color: "white", linecap: 'round' })
        var line2 = box.line(6, 11, 8, 15).stroke({ width: 2, color: "white" , linecap: 'round'})

        // var label = draw.group();
        var text = box.text('').move(30,-5);
        box.move(10,20);
        // window.add(label)
        // window.add(box)
        // box.click(function(event){
        //     currentState(event)
        // })
        
        
        box.click(function(event){
            // make it a clicked state
            if(!clickedState){
                rect.stroke('#b366ff').fill('#b366ff')
                currentState(event)
                clickedState = true
            }
            // make it an unclicked state
            else{
                rect.stroke('grey').fill('white')
                clickedState = false
                // console.log(event)
            }
            // currentState(event)
        })
        // line1.click(function(event){
        //     if(clickEvent == null){
        //         rect.stroke('#b366ff').fill('#b366ff')
                
        //         clickEvent = event
        //     }
        //     else{
        //         rect.stroke('grey').fill('white')
        //         clickEvent = null
        //     }
        // })
        // line2.click(function(event){
        //     if(clickEvent == null){
        //         rect.stroke('#b366ff').fill('#b366ff')
                
        //         clickEvent = event
        //     }
        //     else{
        //         rect.stroke('grey').fill('white')
        //         clickEvent = null
        //     }
        // })
        
        return {
            move: function(x, y) {
                box.move(x, y);
            },
            label: function(x){
                text.text(x);
            },
            state: function(eventHandler){
                currentState =  eventHandler
            }
        }
    }
    var TextBox = function(){
        var box = draw.group();
        box.rect(350,200).stroke('black').fill('white')

        var text = box.text("").move(40,42)
        var caret = box.rect(2,15).move(50,50)
        var runner = caret.animate().width(0)
        runner.loop(10000,1,0)
        SVG.on(window, 'keyup', (event) => {
            if(event.key == ' '){
                text.text(text.text() + event.key)
                caret.x(text.length() + 100)
            }
            else if(event.key == 'Backspace'){
                text.text(text.text().slice(0, -1))
                caret.x(text.length() + 90)
            }
            else if(event.key == "Shift" || event.key == "CapsLock"){
            }
            else{
                text.text(text.text() + event.key)
                caret.x(text.length() + 90)
            }
        })
        return {
            move: function(x,y){
                box.move(x,y);
            }
        }
    }

    var ScrollBar = function(){

    }

    var ProgressBar = function(){
        var box = draw.group();
        var rect = box.rect(300, 21).stroke('black').fill('white')
        rect.attr('rx', 8)

        var bar = draw.group();
        // Expose a custom property to set the width of the progress bar.
        var loadbar = bar.rect(293, 14).stroke('black').fill('white').move(3,3)
        loadbar.attr('rx', 8)
        var progress = bar.rect(0, 14).stroke('black').fill('#ce99ff').move(3,3)
        progress.attr('rx', 8)
        var runner = progress.animate().delay(100).animate().size(293,14)

        
        box.add(bar)
        
        return {
            move: function(x,y){
                box.move(x,y);
            },
            width: function(x,y){
                loadbar.size(x,y)
            }
        }
    }

return {Button, RadioButton, CheckBox, TextBox, ScrollBar, ProgressBar}
}());

export{MyToolkit}