import { Card } from "keep-react";

export const CardComponent2 = () => {
 
    return (
        <>
            <Card className="border-2 rounded-lg h-96 w-80 border-black"> 
            
                <Card.Container className="flex items-center justify-center">
                </Card.Container>
                <Card.Container className="text-center">
                    <Card.Description>
                        <p className="flex text-center">Plan individual  <br></br>

2 hora diaria de lunes a viernes de 10:00am a 12:00am<br></br>

 acceso a contenido terapéutico y videos de el modulos ya grabados.<br></br>
 precio $229,990 CLP mensual</p>
                    </Card.Description>
                </Card.Container>
                <Card.Container className="mt-3 flex items-center justify-center">
                 
                </Card.Container>
            </Card>
        </>
    );
};
