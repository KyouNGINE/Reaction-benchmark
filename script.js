let start = new Date().getTime();

        function getRandomColor() {
        
            let letters = '0123456789ABCDEF';
        
            let color = '#';
        
            for (let i = 0; i < 6; i++) {
        
                color += letters[Math.floor(Math.random() * 16)];
        
            }
        
            return color;
        
        }

        function makeShapeAppear() {

            let top = Math.random() * 400;

            let left = Math.random() * 800;

            let width = (Math.random() * 200) + 50;
            
            if (Math.random() > 0.5) {

                document.getElementByClassName("shape").style.borderRadius = "50%";

            } else {
                
                document.getElementByClassName("shape").style.borderRadius = "";

            }

            document.getElementByClassName("shape").style.backgroundColor = getRandomColor();

            document.getElementByClassName("shape").style.top = top + "px";

            document.getElementByClassName("shape").style.left = left + "px";

            document.getElementByClassName("shape").style.width = width + "px";

            document.getElementByClassName("shape").style.height = width + "px";

            document.getElementByClassName("shape").style.display = "block";

            start = new Date().getTime();

        }

        function appearAfterDelay() {

            setTimeout(makeShapeAppear, Math.random() + 2000);

        }

        appearAfterDelay();

        document.getElementByClassName("shape").onclick = function() {

            document.getElementByClassName("shape").style.display = "none";
            
            let end = new Date().getTime(); 

            let timeTaken = (end - start) / 1000;
            
            document.getElementByClassName("timeTaken").innerHTML = timeTaken + "s"

            appearAfterDelay();
            
        };
