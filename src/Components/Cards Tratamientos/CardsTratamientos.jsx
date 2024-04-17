export const CardsTratamiento = () => {
  return (
    <div className="overflow-x-auto font-medium ml-28 mt-10 text-sky-600 text-5xl">
      Tratamientos
      <div className="flex space-x-11 text-2xl text-center text-gray-600 mx-6 mt-6">
        <div>
          <img
            src="/alcohol.png"
            className="bg-gray-600 w-24 rounded-full "
            alt="alcohol"
          />
          <p>Alcohol</p>
        </div>
        <div>
          <img
            src="/tabaco.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="tabaco"
          />
          <p>Tabaco</p>
        </div>
        <div>
          <img
            src="/cannabis.png"
            className="bg-gray-600 w-24  rounded-full "
            alt="cannabis"
          />
          <p>Cannabis</p>
        </div>
        <div>
          <img
            src="/cocaina.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="cocaina"
          />
          <p>Cocaína</p>
        </div>
        <div>
          <img
            src="/pastillas.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="pastillas"
          />
          <p>Pastillas</p>
        </div>
        <div>
          <img
            src="/tecnologia.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="tecnologia"
          />
          <p>Tecnología</p>
        </div>
        <div>
          <img
            src="/sexo.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="sexo"
          />
          <p>Sexo</p>
        </div>
        {/* <div>
          <img
            src="/ludopatia.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="ludopatia"
          />
          <p>Ludopatía</p>
        </div> */}
        <div>
          <img
            src="/pasta_base.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="pasta_base"
          />
          <p>Pasta Base</p>
        </div>
      </div>
    </div>
  );
};
