//tipos de variables//
// #const valores fijos//
const pi=3.1416;
console.log(pi);
// #var para variables globales
var color="red";
console.log(color);
// #let para variables locales o para bloques
let contador=1;
console.log(contador);
//gtres formas de mostrar resultados
//alert
alert("hola bienvenido");
// console
console.log("hola bienvenido");
//pantalla
document.write("HOLA BIENVENIDO")
document.getElementById("text_one").innerHTML="<h1>hola bienvenido</h1>"
document.getElementById("text_two").innerText="hola bienvenido"
//librerias
var nombre="yohan perez";
var profecion=" Es estudiante de la ufpso";
Swal.fire(
    nombre,
    profecion,
    'SUCCESS'
  )
  // personalzado
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: nombre,
    folder:profecion,
    showConfirmButton: false,
    timer: 1500
  })
  //### tipos de datos
  //numerico
  let number_one=10;
  let number_two=5;
  let number_trhee=2.5;//decimal //string
   let text="hello ; i am text"
   //booleanos
   let boolean= false//true
   //array
   let array=[1,2,3,4,5,6]
   let array_two=["lunes", " martes" , "miercoles" , "jueves" ,"viernes","sabado", "domingo"]
   let array_trhee=["yohan", 20 , " andres" , "miercoles" ,10,2.5,15];
   let array_multi=[
    {name:"yohan",last_name:"perez",age:17 },
    {name:"andres",last_name:"paez",age:18 },
    {name:"adriana",last_name:"jimenez",age:19 },
    {name:"camila",last_name:"torres",age:16 }
   ];


// ########## OPERADORES BASICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta - 
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion * 
var multi = number_one * number_two;
console.log("Multi = " + multi);
// division / 
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("Division = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);

console.log(
    "Suma = " + suma + "\n" +
    "Resta = " + resta + "\n" +
    "Multi = " + multi + "\n" +
    "Division = " + divi.toFixed(2) + "\n" +
    "Modulo = " + modulo
    )

var respuesta =     "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multi = " + multi + "<br>" + "Division = " + divi.toFixed(2) + "<br>" + "Modulo = " + modulo;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
});


//##### operadores logicos y estructuras condicionales (iverse, incremento, etc...)
var count;
var bool =true ;
var numeric = 5;
if(!bool && numeric==5){
  console.log(bool);
  count++;
}
else{
console.log(bool);
count--;
}
// = es para asignar valores
// == comparar contenido
// === comparar contenido y tipo de dato
console.log(count)


// or ||

var age =21;
if(age==21 || numeric==5){
  console.log("una o dos variables aceptadas")

}

else{
  console.log("ninguna variable aceptada");

}

//for
for(let i=0; i<array_two.length;i++){
  console.log(array_two[(i)]+(i+1));
}
//while
let j =  0;
while(j<array_two.length){
  console.log(array_two[(j)]+(j+1));
  j++
}
//do.while
let h=0;
do{
  console.log(array_two[(h)]+(h+1));
  h++
}while(h<array_two.length);


//eventos
function enviar(){
  document.body.style.backgroundColor= "red";
  document.body.style.color = "#fff";
}

const btn_limpiar = document.querySelector("#limpiar");

btn_limpiar.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
});

// ejercicio

const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_even => {
    name_even.preventDefault();
    let info = "";
    if(nombres.value.length <=2 || apellidos.value.length <3){
        info += "Nombres Y Apellidos deben ser mayores o igual a 3 carecteres";
        information.style.color = "red";
    }
    else{
        alert("INFORMACION CORRECTAMENTE");
    }
    information.innerText = info;
});
function action(){
    let action = document.getElementById("action");
    if(action.value.length == 0){
        action.style.backgroundColor = "red";
    }else{
            action.style.backgroundColor = "green";
        }
    }