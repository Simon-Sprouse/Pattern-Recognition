import { useRef, useEffect } from 'react';
import hsvToHex from './colorConversions';

function Choices() { 

    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);


    function fillCanvas(canvasRef, color) { 
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function handleClick(event) {

        const choice = event.target.id;

        if (choice == "left") { 
            const h = Math.floor(Math.random() * 360);
            fillCanvas(canvasRef1, hsvToHex(h, 100, 100));
        }
        else if (choice == "right") { 
            const h = Math.floor(Math.random() * 360);
            fillCanvas(canvasRef2, hsvToHex(h, 100, 100));
        }

    }


    useEffect(() => {
        const canvas1 = canvasRef1.current;
        const canvas2 = canvasRef2.current;
        canvas1.addEventListener("click", handleClick);
        canvas2.addEventListener("click", handleClick);

        

        return () => { 
            canvas1.removeEventListener("click", handleClick);
            canvas2.removeEventListener("click", handleClick);
        }
    }, []);

    useEffect(() => { 
        
        fillCanvas(canvasRef1, "#ff00ff");
        fillCanvas(canvasRef2, hsvToHex(200, 100, 100));


    });


    return (
        <>
            <div>
                <canvas id="left"  ref={canvasRef1} width="400" height="400"></canvas>
                <canvas id="right" ref={canvasRef2} width="400" height="400"></canvas>
            </div>
        </>
    )
}

export default Choices;