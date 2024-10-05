import { useState, useRef, useEffect } from 'react';
import hsvToHex from './colorConversions';

function Choices() { 



    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);

    const [color1, setColor1] = useState([0, 100, 100]);
    const [color2, setColor2] = useState([180, 100, 100]);

    const choice0 = useRef(null);
    const choice1 = useRef(null);


    const clicks = useRef(0);




    function fillCanvas(canvasRef, color) { 
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function handleClick(event) {

        const choice = event.target.id;

        


        if (clicks.current == 0) { 

            if (choice == "left") { 
                choice0.current = 0;
            }
            else if (choice == "right") { 
                choice0.current = 180;
            }

            setColor1([90, 100, 100]);
            setColor2([270, 100, 100]);
        }
        else if (clicks.current == 1) { 
            if (choice == "left") { 
                choice1.current = 90;
            }
            else if (choice == "right") { 
                choice1.current = 270;
            }

            if (choice0.current == 0 && choice1.current == 90) { 
                setColor1([0, 100, 100]);
                setColor2([90, 100, 100]);
            }
            else if (choice0.current == 0 && choice1.current == 270) { 
                setColor1([270, 100, 100]);
                setColor2([360, 100, 100]);
            }
            else if (choice0.current == 180 && choice1.current == 90) { 
                setColor1([90, 100, 100]);
                setColor2([180, 100, 100]);
            }
            else if (choice0.current == 180 && choice1.current == 270) { 
                setColor1([180, 100, 100]);
                setColor2([270, 100, 100]);
            }


        }
        else { 
            const leftH = color1[0]; // 180
            const rightH = color2[0]; // 360
            const midPoint = Math.floor((rightH + leftH) / 2); // 270

            if (choice == "left") { 
                // reset right endpoint
                setColor2([midPoint, 100, 100]);
            }
            else if (choice == "right") { 
                // resset left endpoint
                setColor1([midPoint, 100, 100]);
            }
    

        }


        




        
        clicks.current += 1;
        
        

    }


    useEffect(() => { 
        
        fillCanvas(canvasRef1, hsvToHex(...color1));
        fillCanvas(canvasRef2, hsvToHex(...color2));


    }, [color1, color2]);


    return (
        <>
            <div>
                <canvas onClick={handleClick} id="left"  ref={canvasRef1} width="400" height="400"></canvas>
                <canvas onClick={handleClick} id="right" ref={canvasRef2} width="400" height="400"></canvas>
            </div>
        </>
    )
}

export default Choices;





/*


Ok so here's what the fuck is happening: 

I need to get this working along one dimension first. 

The whole idea here is to store the h values of every click. 

We then use these h values to predicta good random spot to guess next.


The first ten guesses are totally random. 

The winner gets remembered, and the loser goes away. 







*/