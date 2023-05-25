//Se pide nombre de usuario y se muestra un mensaje con la promoción por el dia del amigo. Se da la opción de distintos pases al gimnasio por tres meses en Sportclub como máximo a un precio más económico. Las opciones a escoger son entre pase full (acceso completo y todos los dias) o el acceso a una actividad hasta un límite de 4 veces por semana. Se muestra la opcion de pases y sus precios y una vez seleccionada la opcion de pase full o pase personal se agrega al carrito. En el caso de elegir el pase personal, se le da al usuario la posibilidad de elegir un deporte para agregarlo al carrito y para ambos pases se consulta por cuantos meses se regala el pase. Al final se hace una breve encuesta donde el usuario manda una propuesta de actividad para los niños de los socios en el Día del niño.

let usuario = prompt("Ingresa tu nombre");
let amigo = prompt("Ingresa el nombre de tu amigo/a");

//Inicio declaración de funciones:
function promocion(){console.log(usuario+", regalale a tu mejor amigo/a la oportunidad de entrenar en SportClub por un mes con una promoción especial. Por favor, elige si deseas regalarle un pase full con acceso a todas las actividades todos los dias, o un pase personal de hasta 4 veces por semana para un deporte a eleccion: \n- full \n- personal")}
function despedidafull(){console.log("Agredecemos tu compra "+usuario+". Agregaste tu plan "+ OpcionFull+ " al carrito. Por cualquier duda, comunicate con nosotros por Whatsapp y los/as esperamos pronto!");}
function despedidapersonal(){console.log("Agredecemos tu compra "+usuario+". Agregaste tu plan "+ OpcionPersonalizada+ " al carrito. Por cualquier duda, comunicate con nosotros por Whatsapp y los/as esperamos pronto!.");}
function mensajefull(){console.log("Elegiste la opcion de pase full con acceso a todas las actividades disponibles en SportClub.");}
function mensajepersonal(){console.log("Elegiste la opcion personalizada con acceso a una actividad de 1 a 4 veces por semana en SportClub.");}
function mensajeincorrecto(){alert("Plan seleccionado no corresponde con ninguna opción vigente. Por favor, ingresa la opción de plan full o plan personal.")}
//Fin declaración de funciones.


//Inicio nombre del usuario:
alert("Bienvenido/a "+ usuario+" a Sportclub! Tenemos una promoción por el día del amigo para vos y "+amigo+".");
promocion();
//Fin nombre y seleccion del plan:


//Inicio: cuales son los precios?:
const servicios=[
    {id:1,nombre:"Pase full",precio:3499},
    {id:2,nombre:"Pase personal una vez por semana",precio:500},
    {id:3,nombre:"Pase personal dos veces por semana",precio:500*2},
    {id:4,nombre:"Pase personal tres veces por semana",precio:500*3},
    {id:5,nombre:"Pase personal cuatro veces por semana",precio:500*4},
];

const copiaServicios= servicios;
console.log(copiaServicios.sort((a,b)=>b.precio - a.precio));
//Fin: cuales son los precios?:


//Inicio: Condicional para conocer que plan eligió el usuario:
let OpcionFull = "full";
let OpcionPersonalizada = "personal";
let plan=prompt("Ingresa el plan que te gustaría regalar para "+amigo+".")

if(plan.toLowerCase() == OpcionFull){mensajefull();}
    else if(plan.toLowerCase() == OpcionPersonalizada){mensajepersonal();}
    else{mensajeincorrecto()
        for (let i = 0; i >= 0; i++) {
            plan=prompt("Ingresa el plan que te gustaría regalar para ese gran amigo/a.")
            if(plan.toLowerCase() == OpcionFull){
                mensajefull();
            break;}
            else if(plan.toLowerCase() == OpcionPersonalizada){
                mensajepersonal();
                break;
                }
            else {
            mensajeincorrecto();}
        }
    }

//Fin: Condicional para conocer que plan eligió el usuario.


//Inicio: conocer los precios de los planes:
let PrecioPersonal=500;
if (plan.toLowerCase() == OpcionFull){
    console.log("El precio especial por el día del amigo con su pase full es de $3,499 por mes."+amigo+" va a tener acceso a todas las actividades disponibles en Sportclub.");
}
else{
    
    let limite = parseInt(prompt("Ingresa cuantas veces por semana quieres regalar el acceso a SportClub. El máximo es de 4 veces por semana."));
    if(limite==1){
        console.log("Seleccionaste el acceso de "+limite+" vez por semana.");}
    else{console.log("Seleccionaste el acceso de "+limite+" veces por semana.")}
    
    while (limite<=4){
        let resultado = limite*PrecioPersonal;
        if(limite==1){
            console.log("El precio especial por el día del amigo para "+limite+" vez por semana es de $" + resultado+" mensual.");}
        else{console.log("El precio especial por el día del amigo para "+limite+" veces por semana es de $" + resultado+" mensual.");}
        break;
    }
}
//Fin: conocer los precios de los planes:


//Inicio perdiodo del pase a SportClub:
function calcularPeriodo(inicio,fin){
    let fInicio=new Date(inicio).getTime()
    let fFin=new Date(fin).getTime()

    let totalEstadia=((fFin-fInicio)/86400000)/30

    return Math.ceil(totalEstadia);
}

let fechaIngreso=prompt("Ingresa la fecha de inicio del plan","2023-06-21");
let fechaEGRESO=prompt("Ingresa fecha de fin del plan","2023-06-21");

console.log("La cantidad de meses para el plan son de "+(calcularPeriodo(fechaIngreso,fechaEGRESO)));
//Fin perdiodo del pase a SportClub:


//Inicio: conocer actividades que van a contratar para el plan personal:
if (plan.toLowerCase() == OpcionPersonalizada){
    for (let i = 0; i >= 0; i++) {
            let actividad = prompt(
              "Ingresa la actividad principal que deseas incluir en tu regalo.");
            if (actividad.toLowerCase() === "pileta" || actividad.toLowerCase() === "yoga" || actividad.toLowerCase() === "gimnasio" || actividad.toLowerCase() === "hiit" || actividad.toLowerCase() === "spinning" || actividad.toLowerCase() === "boxing" || actividad.toLowerCase() === "running" || actividad.toLowerCase() === "pilates") {
              alert("Optaste por la actividad de "+actividad);
              break;

            } else {
              alert("No es un actividad disponible en Sportclub. Por favor, consulta nuestras actividades en nuestro sitio web e intenta de nuevo.");
            }
          }
    }
//Fin: conocer actividad principal que van a contratar para el plan personal.


//Inicio encuesta propuesta del dia del niño:
let consulta = prompt("¿Responderias una breve consulta para nuestra próxima propuesta?","Si/No");

if(consulta.toLowerCase()=="si"){
    let propuesta = prompt("¿Que nueva actividad te gustaría que ofrezcamos para los socios en el día del niño?");
    const ActividadPropuesta=[" danza, "+" rollers, "+" funcional fun."];
    ActividadPropuesta.unshift(propuesta);
    console.log("Algunas de las propuestas con las que ya contamos incluida la tuya son "+ActividadPropuesta+",")}
//Fin encuesta propuesta del dia del niño;


//Inicio: mensaje del carrito y agradecimiento:
class datos{
    constructor(usuario,amigo,plan) {
        this.usuario= usuario;
        this.amigo= amigo;
        this.plan=plan;}

    compra(){
        console.log("Pronto "+amigo+" va a poder disfrutar de su plan "+plan+" en Sportclub!");
    }    
}

const carrito = new datos (usuario,amigo,plan)
carrito.compra();
//Fin: mensaje del carrito y agradecimiento:


//Inicio agradecimiento:
if(plan.toLowerCase() == OpcionFull){
    despedidafull();
}
else{despedidapersonal();}
//Fin agradecimiento.
