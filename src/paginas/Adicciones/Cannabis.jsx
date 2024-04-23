import { Typography } from "keep-react";
import React from "react";

const NAME = "Shasam expertos en la adicción al cannabis";
const parrafo1 ="El cannabis es la droga más fumada después del tabaco y la sustancia ilegal más consumida por los jóvenes.";
const parrafo2 ="Fumar porros genera rápidamente dependencia y es causa de brotes psicóticos y daños cerebrales, entre otros. Consideramos al cannabis como una droga alucinógena o con la capacidad de alterar la percepción, con muchos efectos negativos tanto a corto como a largo plazo. Con esfuerzo es posible liberarse de la dependencia que crea."
const NAME1 ="RECUERDA"
const parrafo3 ="No finalizar tu relación con los porros te genera depresión, apatía y desilusión por el futuro. No ser capaz de dejar los porros puede llevarte a sufrir daños cerebrales, pérdidas de memoria y alucinaciones. No acabar con tu adicción al cannabis supone un malgasto económico.";

export const Cannabis = () => {

    return (
      <div>
       <div className="flex justify-center mx-32 items-center mt-8">
        <div className="flex-1">
          <Typography className="text-sky-400 text-5xl font-medium">
            {NAME}
          </Typography>
          <Typography className="text-justify space-y-4 text-xl m-5">
            <Typography>{parrafo1}</Typography>
            </Typography>
 
            <Typography className="text-justify space-y-4 text-xl m-5">
            <Typography>{parrafo2}</Typography>
            </Typography>
            <Typography className="text-sky-400 text-5xl font-medium">
            {NAME1}
          </Typography>
          <Typography className="text-justify space-y-4 text-xl m-5">
            <Typography>{parrafo3}</Typography>
            </Typography>
</div></div>
      </div>    
    );
  }
