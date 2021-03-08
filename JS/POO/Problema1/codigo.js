class Celular{
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        }else{
            alert("El celular está apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
           alert("Reiniciando celular"); 
        }else{
            alert("El celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}` )
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}` )
    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria RAM: <b>${this.memoriaRam}</b></br>
    
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estás grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Inicia reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de Camara Extra: ${this.resolucionDeCamaraExtra} `
    }
}

// celular1 = new Celular("Rojo", "150g", "5'", "HD", "1GB")
// celular2 = new Celular("Negro", "155g", "5.4'", "FULL HD", "2GB")
// celular3 = new Celular("Blanco", "146g", "5.9'", "FULL HD", "3GB")

// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()
celular1 = new CelularAltaGama("rojo","130g","5.2'","4K","3GB","FULL HD");
celular2 = new CelularAltaGama("negro","142g","6'","4K","3GB","HD");





document.write(`
${celular1.infoAltaGama()}<br><br>
${celular2.infoAltaGama()}<br><br>

`)