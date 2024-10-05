import { useRef, useEffect } from 'react';


function Choices() { 

    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);


    useEffect(() => { 
        const canvas1 = canvasRef1.current;
        const ctx1 = canvas1.getContext("2d");
        ctx1.fillStyle = "red";
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);


        const canvas2 = canvasRef2.current;
        const ctx2 = canvas2.getContext("2d");
        ctx2.fillStyle = "blue";
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);





    }, []);


    return (
        <>
            <div>
                <canvas ref={canvasRef1} width="400" height="400"></canvas>
                <canvas ref={canvasRef2} width="400" height="400"></canvas>
            </div>
        </>
    )
}

export default Choices;