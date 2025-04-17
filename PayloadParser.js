function parseUplink(device, payload)
{
	function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),//.toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    env.log(N3uronData);
 
   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
        switch (tag){
            
            case "/Evaporador/fit_201":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("fit_201");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/fit_202":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("fit_202");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break; 

            case "/Evaporador/fit_203":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("fit_203");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/tit_101":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_101");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/tit_102":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_102");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_103":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_103");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_104":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_104");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/tit_105":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_105");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_106":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_106");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_107":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_107");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_108":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_108");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;
                
            case "/Evaporador/tit_109":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_109");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/tit_110":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("tit_110");
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            
            case "/Evaporador/pit_101":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("pit_101");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/pit_102":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("pit_102");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;


            case "/Evaporador/pit_103":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("pit_103");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/pt_101":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("pt_101");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            case "/Evaporador/VapAcuEnTon":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("VapAcuEnTon");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            // default: 
            //	 payload.buildResult = downlinkBuildResult.unsupported; 
                // break; 

            
        }
   }

}
function buildDownlink(device, endpoint, command, payload) { 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}