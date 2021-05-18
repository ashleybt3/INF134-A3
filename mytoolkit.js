// File name: mytoolkit.js

import {SVG} from './svg.min.js';


/**
 * Represents a Toolkit Class
 * @constructor
 * @return {Button} - Returns a Button type object
 * @return {CheckBox} - Returns a Check Box type object
 * @return {RadioButton} - Returns a Radio Button type object
 * @return {TextBox} - Returns a Text Box type object
 * @return {ScrollBar} - Returns a Scroll Bar type object
 * @return {ProgressBar} - Returns a Progress Bar type object
 * @return {Spinner} - Returns a Spinner type object
 */
var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','100%');
    /** 
     * Create a Button Widget 
     * @return {itself} - Returns the button object's move attribute
     * @return {event handler} - Returns the event handler when the button object's widget state has changed
     * @return {event handler} - Returns the event handler when the button object has been clicked
     * @return {string} - Returns the button object's text attribute 
     */
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
    
     /** 
     * Create a Check Box Widget 
     * @return {itself} - Returns the box object's move attribute
     * @return {string} - Returns the text object's text attribute 
     * @return {event handler} - Returns the event handler when the box object has been clicked
     * @return {event handler} - Returns the event handler when the box object's widget state has changed
     */

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

    /**
     * Create a Radio Button Widget
     * @return {itself} - Returns the button object's move attribute
     * @return {string} - Returns the text 1 object's text attribute 
     * @return {string} - Returns the text 2 object's text attribute 
     * @return {event handler} - Returns the event handler when the button object's widget state has changed
     * @return {event handler} - Returns the event handler when the button object has been clicked
     */
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
    

    /**
     * Create a Text Box Widget
     * @return {itself} - Returns the box object's move attribute
     * @return {string} - Returns the box object's text content
     * @return {event handler} - Returns the event handler when the box object's text content has changed
     * @return {event handler} - Returns the event handler when the box object' widgets state has changed
     */
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

    /**
     * Create a Scroll Bar Widget
     * @return {itself} - Returns the box object's move attribute
     * @return {event handler} - Returns the event handler when the box object has been clicked
     * @return {itself} - Returns the box object's height attribute
     * @return {number} - Returns the scroll thumb's position
     * @return {string} - Returns the scroll thumb's direction (up or down)
     * @return {event handler} - Returns the event handler when box object's widget state has changed
     */
    var ScrollBar = function(){
        var box = draw.group();
        var bar = box.rect(21, 300).stroke('grey').fill('white')
        bar.move(0,21)

        var up = draw.group();
        var upBox = up.rect(21, 21).stroke('grey').fill('#ccc9cf')
        

        var upArrow1 = up.line(10, 10, 15, 15).stroke({ width: 2, color: "black", linecap: 'round' })
        var upArrow2 = up.line(5, 15, 10, 10).stroke({ width: 2, color: "black" , linecap: 'round'})

    
        var down = draw.group();
        var downBox = down.rect(21, 21).stroke('grey').fill('#ccc9cf')

        var downArrow1 = down.line(10, 15, 15, 10).stroke({ width: 2, color: "black", linecap: 'round' })
        var downArrow2 = down.line(5, 10, 10, 15).stroke({ width: 2, color: "black" , linecap: 'round'})
        down.move(0, 321)

        var scroll = box.rect(18,21).stroke('#ccc2d6').fill('#ccbade').move(1.5,21)

        var isClicked = null
        var currentLocation = scroll.attr('y')
        var direction = null
        var widgetState = null
        var scrollThumb = null

        box.add(up)
        box.add(down)

        scroll.mousedown(function(event){

            scroll.mousemove(function(e){
                scroll.attr('y', e.clientY)
                var distance = currentLocation - e.clientY
                if(distance > 0){
                    direction('up')
                }
                else{
                    direction('down')
                }
                currentLocation = e.clientY
                widgetState(e)
                isClicked(e)
                scrollThumb(e.clientY)
            })
        })

        scroll.mouseup(function(event){
            scroll.off('mousemove')
            widgetState(event)
        })
        scroll.mouseleave(function(event){
            scroll.off('mousemove')
            widgetState(event)
        })
        
        
        bar.click(function(event){           
            scroll.attr('y', event.clientY)

            isClicked(event)
            widgetState(event)
            scrollThumb(event.clientY)
            var distance = currentLocation - event.clientY
            if(distance > 0){
                direction('up')
            }
            else{
                direction('down')
            }
            currentLocation = event.clientY
        })
        up.click(function(event){
            var currentY = scroll.attr('y')
            scroll.attr('y', currentY - 5)
            isClicked(event)
            widgetState(event)
            scrollThumb(event.clientY)
            direction('up')

            currentLocation = event.clientY
        })

        down.click(function(event){
            var currentY = scroll.attr('y')
            scroll.attr('y', currentY + 5)

            isClicked(event)
            widgetState(event)
            scrollThumb(event.clientY)
            direction('down')
            currentLocation = event.clientY

        })

        box.mouseover(function(event){
            widgetState(event)
        })
        return{
            move: function(x,y){
                box.move(x,y);
            },
            onclick: function(eventHandler){
                isClicked = eventHandler
            },
            setHeight: function(x){
                box.height(x)
            },
            position: function(pos){
                scrollThumb = pos
            },
            scrollDirection: function(d){
                direction = d
            },
            state: function(eventHandler){
                widgetState = eventHandler
            }

        }
    }


    /**
     * Create a Progress Bar Widget
     * @return {itself} - Returns the bar object's move attribute
     * @return {itself} - Returns the bar object's width attribute
     * @return {itself} - Returns the progress object's remember attribute to access the increment value
     * @return {event handler} - Returns the event handler when the progress bar has incremented
     * @return {number} - Returns the increment value from the progress object's remember attribute
     * @return {event handler} - Returns the event handler when the widget state has changed
     */
    var ProgressBar = function(){
        var bar = draw.group();
        var barWidth = 200
        var barHeight = 15
        var incVal = null
        var incrementState = null
        var widgetState = null
        var hasIncremented = null
    
        

        var loadbar = bar.rect(barWidth, barHeight).stroke('black').fill('white').move(3,3)
        loadbar.attr('rx', 8)
        var progress = bar.rect(0, barHeight).stroke('black').fill('#ce99ff').move(3,3)
        progress.attr('rx', 8)

        progress.on('increment', function(event){
            hasIncremented(event)
        })

        function whenIncremented(){
            progress.fire('increment')
        }

        bar.mouseover(function(event){
            widgetState(event)
        })
        bar.mouseout(function(event){
            widgetState(event)
        })
        bar.click(function(event){
            widgetState(event)
        })
            
        return {
            move: function(x,y){
                bar.move(x,y)
            },
            width: function(w){
                bar.width(w);
            },
            setIncrement: function(inc){
                progress.remember('val', inc)
            },
            onIncrement: function(eventHandler){
                hasIncremented = eventHandler
            },
            incrementBar: function(inc){
                progress.size(inc, barHeight)
                whenIncremented()
            },
            getIncrement: function(){
                return progress.remember('val')
            },
            incremented: function(eventHandler){
                incrementState = eventHandler
            },
            state: function(eventHandler){
                widgetState = eventHandler
            }
        }
    }

    /**
     * Create a Custom Widget: Spinner
     * @return {itself} - Returns the bar object's move attribute
     */
    var Spinner = function() {
        var box = draw.group();
        var rect = box.rect(80,30).fill('white').stroke('grey')
        var text = box.text('0').move(35,5)
        var widgetState = null

        var upClicker = draw.group();
        var upButton = upClicker.rect(15,15).fill('#ccb8e0').stroke('grey')

        var downClicker = draw.group();
        var downButton = downClicker.rect(15,15).fill('#ccb8e0').stroke('grey')


        var up = draw.group();
        var upArrow1 = up.line(10, 10, 15, 15).stroke({ width: 2, color: "black", linecap: 'round' })
        var upArrow2 = up.line(5, 15, 10, 10).stroke({ width: 2, color: "black" , linecap: 'round'})
        up.move(3,5)

        var down = draw.group();
        var downArrow1 = down.line(10, 15, 15, 10).stroke({ width: 2, color: "black", linecap: 'round' })
        var downArrow2 = down.line(5, 10, 10, 15).stroke({ width: 2, color: "black" , linecap: 'round'})
        down.move(3,5)

        upClicker.add(up)
        upClicker.move(80,0)

        downClicker.add(down)
        downClicker.move(80,15)
    
        box.add(upClicker)
        box.add(downClicker)
        


        upClicker.click(function(event){
            var val = parseInt(text.text()) + 1
            text.text(val.toString())
            upClicker.attr('cursor', 'auto')
            widgetState(event)
        })
        downClicker.click(function(event){
            var val = parseInt(text.text()) - 1
            text.text(val.toString())
            downClicker.attr('cursor', 'auto')
            widgetState(event)
        })

        upClicker.mouseover(function(event){
            upClicker.attr('cursor', 'pointer')
            widgetState(event)
        })
        downClicker.mouseover(function(event){
            downClicker.attr('cursor', 'pointer')
            widgetState(event)
        })
        upClicker.mouseup(function(event){
            upClicker.attr('cursor', 'auto')
            widgetState(event)
        })
        downClicker.mouseup(function(event){
            downClicker.attr('cursor', 'auto')
            widgetState(event)
        })

        return{
            move: function(x,y){
                box.move(x,y)
            },
            state: function(eventHandler){
                widgetState = eventHandler
            }
        }

    }

return {Button, RadioButton, CheckBox, TextBox, ScrollBar, ProgressBar, Spinner}
}());

export{MyToolkit}