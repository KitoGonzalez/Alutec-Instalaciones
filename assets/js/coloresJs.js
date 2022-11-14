console.log("Racing Campeon 1968")


class Colores{
    constructor(_name, _desc, _imgUrl){
        if (!_desc) throw new Error("Error, no desc!");
        if (!_name) throw new Error("Error, no name!");
        if (!_imgUrl) throw new Error("Error, no imgUrl!");

        this.desc = _desc;
        this.name = _name;
        this.imgUrl = _imgUrl;   
    }
};

let _ColorBlanco = new Colores("Blanco","desc","images/imgArray/blanco.png")
let _ColorGoldenOak = new Colores("Golden Oak","desc","images/imgArray/goldenoak.png")
let _ColorNegro = new Colores("Negro","desc","images/imgArray/negro.png")
let _ColorNogal = new Colores("Nogal","desc","images/imgArray/nogal.png")

let todoslosColores  = [_ColorBlanco,_ColorGoldenOak,_ColorNegro,_ColorNogal];


function cambiarImagen(color,todoslosColores){
    let colorSolicitado = todoslosColores.filter((colorseleccionado)=>{
        if(colorseleccionado.name  === color)
        return(colorseleccionado)
    })
    let printColor = colorSolicitado.map(function(colorseleccionado){
        return`
        <div id="centrado">
                <h2 id="centrado">${colorseleccionado.name}</h2>
                <img src=${colorseleccionado.imgUrl} class="card-img-top" alt="...">
                
        </div>
        
         `
    })
    document.getElementById("colorElegido").innerHTML = printColor;
}
cambiarImagen("Nogal",todoslosColores);
