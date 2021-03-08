class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;  
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada = false && this.instalada == true){
            this.iniciada == true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false
            alert("App cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");  
         }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");  
         }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}


app = new App("16.000", "5 Estrellas", "900 MB");
app2 = new App("22.000", "7 Estrellas", "200 MB");
app3 = new App("1.000", "8 Estrellas", "1900 MB");
app4 = new App("33.000", "8 Estrellas", "200 MB");
app5 = new App("43.000", "7 Estrellas", "40 MB");
app6 = new App("3.000", "10 Estrellas", "120 MB");
app7 = new App("1.000", "3 Estrellas", "300 MB");

document.write(
`
${app.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`
)