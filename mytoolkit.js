// File name: mytoolkit.js

import {SVG} from './svg.min.js';



var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','100%');
    var Button = function(){
        
        var button = draw.group();
        var rect = button.rect(100,40).fill('#f2e6ff')
        var text = button.text('').move(25,5)
        text.attr('font-family', 'arial')
        
        var currentState = null
        var clickState = null

        rect.attr('rx', 15)
        rect.stroke({color: 'black', opacity: 0.8, width: 3 })

        button.mouseover(function(event){
            rect.fill({ color: '#e5ccff'})
            rect.attr('cursor', 'pointer')
            currentState(event)
        })
        button.mouseout(function(event){
            rect.stroke('black').fill('#f2e6ff')
            rect.attr('cursor', 'auto')
            currentState(event)
        })
        
        button.click(function(event){
            rect.fill({ color: '#ccbddb'})
            rect.attr('cursor', 'auto')
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
    
    var CheckBox = function(){

        
        var currentState = null
        var widgetState = null
        var clickedState = false
        var box = draw.group();
        
        var rect = box.rect(20, 20).fill("white").stroke("grey")
        rect.attr('rx', 3)
        rect.attr('stroke-width', 2)
        
  
        var line1 = box.line(8, 15, 15, 8).stroke({ width: 2, color: "white", linecap: 'round' })
        var line2 = box.line(6, 11, 8, 15).stroke({ width: 2, color: "white" , linecap: 'round'})

        var text = box.text('').move(30,-5);
        text.attr('font-family', 'arial')
        
        rect.mouseover(function(event){
            widgetState(event)
            rect.attr('cursor', 'pointer')
        })
        rect.mouseout(function(event){
            widgetState(event)
            rect.attr('cursor', 'auto')
        })
        rect.click(function(event){
            // make it a clicked state
            if(!clickedState){
                rect.stroke('#b366ff').fill('#b366ff')
                clickedState = true
            }
            // make it an unclicked state
            else{
                rect.stroke('grey').fill('white')
                clickedState = false
            }
            currentState(event)
            box.attr('cursor', 'auto')
            
        })
        line1.mouseover(function(event){
            widgetState(event)
            line1.attr('cursor', 'pointer')
        })
        line1.mouseout(function(event){
            widgetState(event)
            line1.attr('cursor', 'auto')
        })
        line1.click(function(event){
            // make it a clicked state
            if(!clickedState){
                rect.stroke('#b366ff').fill('#b366ff')
                clickedState = true
            }
            // make it an unclicked state
            else{
                rect.stroke('grey').fill('white')
                clickedState = false
            }
            currentState(event)
            line1.attr('cursor', 'auto')
            
        })
        line2.mouseover(function(event){
            widgetState(event)
            line2.attr('cursor', 'pointer')
        })
        line2.mouseout(function(event){
            widgetState(event)
            line2.attr('cursor', 'auto')
        })
        line2.click(function(event){
            // make it a clicked state
            if(!clickedState){
                rect.stroke('#b366ff').fill('#b366ff')
                clickedState = true
            }
            // make it an unclicked state
            else{
                rect.stroke('grey').fill('white')
                clickedState = false
            }
            currentState(event)
            line2.attr('cursor', 'auto')
            
        })
        return {
            move: function(x, y) {
                box.move(x, y);
            },
            label: function(x){
                text.text(x);
            },
            onclick: function(eventHandler){
                currentState =  eventHandler
            },
            state: function(eventHandler){
                widgetState = eventHandler
            }

        }
    }

    var RadioButton = function() {
        var button = draw.group();

        var widgetState = null
        var checkedState = null
        
        var rdiobtn1 = button.circle(20,20).stroke('black').fill('white')

        rdiobtn1.move(10,10)
        rdiobtn1.attr('id', 'buttonOne')
        

        var rdiobtn2 = button.circle(20,20).stroke('black').fill('white')
        rdiobtn2.move(10,40)
        rdiobtn2.attr('id', 'buttonTwo')
        

        var text1 = button.text('').move(40,5);
        var text2 = button.text('').move(40,35);
        text1.attr('font-family', 'arial')
        text2.attr('font-family', 'arial')
        
        rdiobtn1.click(function(event){
            rdiobtn2.fill('white').stroke({color: 'black', width: 1 })
            rdiobtn1.fill('white').stroke({color: '#b366ff', opacity: 0.8, width: 5 })
            widgetState(event)
            checkedState(event)
            rdiobtn1.attr('cursor', 'auto')
        })

        rdiobtn2.click(function(event){       
            rdiobtn1.fill('white').stroke({color: 'black', width: 1 })
            rdiobtn2.fill('white').stroke({color: '#b366ff', opacity: 0.8, width: 5 })
            widgetState(event)
            checkedState(event)
            rdiobtn2.attr('cursor', 'auto')
        })

        rdiobtn1.mouseover(function(event){
            widgetState(event)
            rdiobtn1.attr('cursor', 'pointer')
        })
        rdiobtn1.mouseout(function(event){
            widgetState(event)
            rdiobtn1.attr('cursor', 'auto')
        })
        rdiobtn2.mouseover(function(event){
            widgetState(event)
            rdiobtn2.attr('cursor', 'pointer')
        })
        rdiobtn2.mouseout(function(event){
            widgetState(event)
            rdiobtn2.attr('cursor', 'auto')
        })

        return {
            move: function(x,y){
                button.move(x,y)
            },
            labelOne: function(x){
                text1.text(x)
            },
            labelTwo: function(x){
                text2.text(x)
            },
            state: function(eventHandler){
                widgetState = eventHandler
            },
            onclick: function(eventHandler){
                checkedState = eventHandler
            }
        }
    }
    
    var TextBox = function(){
        var box = draw.group();
        var textContent = null
        var textChanged = null
        var widgetState = null
        box.rect(350,150).stroke('black').fill('#f2e6ff')

        var text = box.text("").move(40,42)
        var caret = box.rect(2,15).move(50,50)

        var runner = caret.animate().width(0)
        runner.loop(10000,1,0)
        box.click(function(event){
            widgetState(event)
        })
        box.mouseover(function(event){
            widgetState(event)
        })
        box.mouseout(function(event){
            widgetState(event)
        })
        SVG.on(window, 'keyup', (event) => {
            if(event.key == "Shift" || event.key == "CapsLock"){}
            else if(event.key == ' '){
                text.text(text.text() + event.key)
                caret.x(text.length() + 100)
                textContent(text.text())
                textChanged(event)
                widgetState(event)
            }
            else if(event.key == 'Backspace'){
                text.text(text.text().slice(0, -1))
                caret.x(text.length() + 90)
                textContent(text.text())
                textChanged(event)
                widgetState(event)
            }
            else{
                text.text(text.text() + event.key)
                caret.x(text.length() + 90)
                textContent(text.text())
                textChanged(event)
                widgetState(event)
            }
        })
        return {
            move: function(x,y){
                box.move(x,y);
            },
            content: function(output){
                textContent = output
            },
            keyup: function(eventHandler){
                textChanged = eventHandler
            },
            state: function(eventHandler){
                widgetState = eventHandler
            }
        }
    }

    var ScrollBar = function(){
        var box = draw.group();
        var bar = box.rect(21, 300).stroke('grey').fill('white')

        var up = draw.group();
        var upBox = up.rect(21, 21).stroke('grey').fill('#ccc9cf')
        // var upArrow = box.text('˄').move(5,-24)
        var upArrow1 = up.line(10, 10, 15, 15).stroke({ width: 2, color: "black", linecap: 'round' })
        var upArrow2 = up.line(5, 15, 10, 10).stroke({ width: 2, color: "black" , linecap: 'round'})
        up.move(800,29)
        

        var down = draw.group();
        var downBox = down.rect(21, 21).stroke('grey').fill('#ccc9cf')
        // var downArrow = box.text('ˬ').move(5,280)
        // var downArrow1 = down.line(10, 315, 15, 305).stroke({ width: 2, color: "black", linecap: 'round' })
        // var downArrow2 = down.line(5, 305, 10, 315).stroke({ width: 2, color: "black" , linecap: 'round'})
        var downArrow1 = down.line(10, 15, 15, 10).stroke({ width: 2, color: "black", linecap: 'round' })
        var downArrow2 = down.line(5, 10, 10, 15).stroke({ width: 2, color: "black" , linecap: 'round'})
        down.move(800, 350)

        var scroll = box.rect(18,21).stroke('#ccc2d6').fill('#ccbade').move(1.5,1)

        var isClicked = null


        scroll.mousedown(function(event){
            console.log('mouse down')

            scroll.mousemove(function(e){
                if(e.y > 50 && e.y < 357){
                    // top of scroll bar
                    if(e.y < 72){
                        scroll.attr('y', 51)
                    }
                    // bottom of scroll bar
                    else if(e.y > 349){
                        scroll.attr('y', 328)
                    }
                    else{
                        scroll.attr('y', e.y - 21)
                    }
                }
            })
        })

        scroll.mouseup(function(evt){
            console.log('mouse stops')
            scroll.off('mousemove')
        })
        scroll.mouseleave(function(evt){
            console.log('mouse stops')
            scroll.off('mousemove')
        })
        
        
        bar.click(function(event){
            console.log('mouse click')

            if(event.y > 50 && event.y < 357){
                // top of scroll bar
                if(event.y < 72){
                    scroll.attr('y', 51)
                }
                // bottom of scroll bar
                else if(event.y > 349){
                    scroll.attr('y', 328)
                }
                else{
                    scroll.attr('y', event.y - 21)
                }
                isClicked(event)
            }
        })

        up.click(function(event){
            console.log('up')
            var currentY = scroll.attr('y')
            console.log(currentY)
            if(currentY > 50){
                if(currentY < 55){
                    scroll.attr('y', 51)
                }
                else{
                    scroll.attr('y', currentY - 5)
                }
                
            }
            
        })
       

        down.click(function(event){
            console.log('down')
            var currentY = scroll.attr('y')
            console.log(currentY)
            if(currentY < 330 ){
                if(currentY > 321){
                    scroll.attr('y', 328)
                }
                else{
                    scroll.attr('y', currentY + 5)
                }
                
            }
        })
       
        return{
            move: function(x,y){
                box.move(x,y);
            },
            onclick: function(eventHandler){
                isClicked = eventHandler
            }
        }
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
        var runner = progress.animate(300, '-').delay(100).animate().size(293,14)

        
        box.add(bar)
        
        return {
            move: function(x,y){
                box.move(x,y);
            },
            width: function(x,y){
                loadbar.size(x,y);
            }
        }
    }

return {Button, RadioButton, CheckBox, TextBox, ScrollBar, ProgressBar}
}());

export{MyToolkit}