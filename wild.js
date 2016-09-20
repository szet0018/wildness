window.onload = function () {
            //Get the Object by ID     
            var a = document.getElementById("wildness");
             
            //Get the SVG document inside the Object tag
            var svgDoc = a.contentDocument;
                         
            //Get one of the SVG items by ID;
            var svgBottomMicrophone = svgDoc.getElementById("stand"); //bottom part of microphone  
            var svgTopMicrophone = svgDoc.getElementById("microphone"); //top part of microphone
            
            var svgTopWiFi = svgDoc.getElementById("topCurve"); //top wi-fi line
            var svgMiddleWiFi = svgDoc.getElementById("midCurve"); //middle wi-fi line
            var svgBottomWiFi = svgDoc.getElementById("bottomCurve"); //bottom wi-fi line
            
            var svgCrossLine = svgDoc.getElementById("bigLine"); //the thick line that goes across
            
            var svgCircle = svgDoc.getElementById("CircleColour"); //cannot get this to work!
            
            var lines = svgDoc.getElementById("lines");

            svgTopWiFi.style.display = "none"; // this hides the top wi-fi line
            svgMiddleWiFi.style.display = "none"; // this hides the middle wi-fi line
            svgBottomWiFi.style.display = "none"; // this hides the bottom wi-fi line    
            

            var trigger = svgDoc.getElementById("stand");
            trigger.addEventListener("click", toggle);
            
            function toggle() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger.setAttribute("fill", "darkgreen");

            } else {

                delete clicked;

                trigger.setAttribute("fill", "maroon");
            }
                
            }
            
            var trigger2 = svgDoc.getElementById("microphone");
            trigger2.addEventListener("click", toggle2);
            
            function toggle2() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger2.setAttribute("fill", "yellow");

            } else {

                delete clicked;

                trigger2.setAttribute("fill", "beige");
            }
                
            }
            
            var trigger3 = svgDoc.getElementById("bigLine");
            trigger3.addEventListener("click", toggle3);
            
            function toggle3() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger3.setAttribute("fill", "darkseagreen");

            } else {

                delete clicked;

                trigger3.setAttribute("fill", "deeppink");
            }
                
            }
            
            var trigger4 = svgDoc.getElementById("CircleColour");
            trigger4.addEventListener("click", toggle4);
            
            function toggle4() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger4.setAttribute("fill", "lightgreen");
                lines.setAttribute("fill", "lightgreen");
                svgCrossLine.style.display = "none";
                svgTopWiFi.style.display = "block"; // this shows the top wi-fi line               
                svgMiddleWiFi.style.display = "block"; // this shows the middle wi-fi line
                svgBottomWiFi.style.display = "block"; // this shows the bottom wi-fi line
                svgTopWiFi.setAttribute("fill", "green");
                svgMiddleWiFi.setAttribute("fill", "darkgreen");
                svgBottomWiFi.setAttribute("fill", "green");
                    

            } else {

                delete clicked;

                trigger4.setAttribute("fill", "red");
                lines.setAttribute("fill", "red");
                svgTopWiFi.style.display = "none"; // this shows the top wi-fi line               
                svgMiddleWiFi.style.display = "none"; // this shows the middle wi-fi line
                svgBottomWiFi.style.display = "none";
                svgCrossLine.style.display = "block";
                
            }
                
            }
            
            var trigger5 = svgDoc.getElementById("C1R1");
            trigger5.addEventListener("click", toggle5);
            
            function toggle5() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger5.setAttribute("fill", "red");
                    

            } else {

                delete clicked;

                trigger5.setAttribute("fill", "lawngreen");
                }
                
            }
            
            var trigger6 = svgDoc.getElementById("C2R1");
            trigger6.addEventListener("click", toggle6);
            
            function toggle6() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger6.setAttribute("fill", "orange");
                    

            } else {

                delete clicked;

                trigger6.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger7 = svgDoc.getElementById("C3R1");
            trigger7.addEventListener("click", toggle7);
            
            function toggle7() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger7.setAttribute("fill", "yellow");
                    

            } else {

                delete clicked;

                trigger7.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger8 = svgDoc.getElementById("C1R2");
            trigger8.addEventListener("click", toggle8);
            
            function toggle8() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger8.setAttribute("fill", "lightgreen");
                    

            } else {

                delete clicked;

                trigger8.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger9 = svgDoc.getElementById("C2R2");
            trigger9.addEventListener("click", toggle9);
            
            function toggle9() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger9.setAttribute("fill", "green");
                    

            } else {

                delete clicked;

                trigger9.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            
            var trigger10 = svgDoc.getElementById("C3R2");
            trigger10.addEventListener("click", toggle10);
            
            function toggle10() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger10.setAttribute("fill", "lightblue");
                    

            } else {

                delete clicked;

                trigger10.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger11 = svgDoc.getElementById("C1R3");
            trigger11.addEventListener("click", toggle11);
            
            function toggle11() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger11.setAttribute("fill", "blue");
                    

            } else {

                delete clicked;

                trigger11.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger12 = svgDoc.getElementById("C2R3");
            trigger12.addEventListener("click", toggle12);
            
            function toggle12() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger12.setAttribute("fill", "purple");
                    

            } else {

                delete clicked;

                trigger12.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger13 = svgDoc.getElementById("C3R3");
            trigger13.addEventListener("click", toggle13);
            
            function toggle13() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger13.setAttribute("fill", "hotpink");
                    

            } else {

                delete clicked;

                trigger13.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger14 = svgDoc.getElementById("C1R4");
            trigger14.addEventListener("click", toggle14);
            
            function toggle14() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger14.setAttribute("fill", "darkgreen");
                    

            } else {

                delete clicked;

                trigger14.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger15 = svgDoc.getElementById("C2R4");
            trigger15.addEventListener("click", toggle15);
            
            function toggle15() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger15.setAttribute("fill", "gold");
                    

            } else {

                delete clicked;

                trigger15.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger16 = svgDoc.getElementById("C3R4");
            trigger16.addEventListener("click", toggle16);
            
            function toggle16() {
                if(typeof clicked === 'undefined') {

                clicked = true;

                trigger16.setAttribute("fill", "grey");
                    

            } else {

                delete clicked;

                trigger16.setAttribute("fill", "lawngreen");
                
            }
                
            }
            
            var trigger17 = svgDoc.getElementById("C1R3");
            trigger17.addEventListener("mouseover", toggle17);

            function toggle17() {
                if(typeof clicked === 'undefined') {

                    clicked = true;

                    trigger17.setAttribute("fill", "magenta");


            } else {

                delete clicked;

                trigger17.setAttribute("fill", "lawngreen");

            }

            }
            
            var trigger18 = svgDoc.getElementById("C2R3");
            trigger18.addEventListener("mouseover", toggle18);
            
            function toggle18() {   
                if(typeof clicked === 'undefined') {

                    clicked = true;

                    trigger18.setAttribute("fill", "mediumvioletred");


            } else {

                delete clicked;

                trigger18.setAttribute("fill", "lawngreen");

                }

            }
    
            var trigger19 = svgDoc.getElementById("C3R3");
                trigger19.addEventListener("mouseover", toggle19);

                function toggle19() {   
                    if(typeof clicked === 'undefined') {

                        clicked = true;

                        trigger19.setAttribute("fill", "powderblue");


                } else {

                    delete clicked;

                    trigger19.setAttribute("fill", "lawngreen");

                    }

            }
    
    
