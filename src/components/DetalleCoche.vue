<template>
    <div>
        <div  class="card text-center" style="width: 1000px; margin:0 auto; text-align:center; margin-top:50px;">
            <div class="card-header">
                {{cocheSeleccionado.nombre}}
            </div>
            <img :src="cocheSeleccionado.imagen" style="width:500px; margin:auto;" class="card-img"/>
            <p>{{cocheSeleccionado.descripcion}}</p>
        </div>
        <router-link to="/" class="nav-link btn btn-danger" style="width:100px; margin:0 auto;" >Volver a Home</router-link>
    </div>
</template>
<script>
export default {
    name:"DetalleCoche",
    data(){
        return{
            idcoche:0,
            coches:[
                [                
                    {idCoche:1 ,
                    nombre:"León",
                    imagen:"https://cdn.motor1.com/images/mgl/er9PE/s3/seat-leon-2020-on-location.webp",
                    descripcion:"SEAT ha anunciado a la vez las dos carrocerías que va a poner a la venta. Por un lado está el compacto de cinco puertas y por otra el familiar, que recibe el nombre de SEAT León Sportstourer. Desgraciadamente en esta cuarta generación toca despedirse de la carrocería de tres puertas, el SC, y del familiar con aspecto de SUV, el León Xperience . El mercado ya no demanda ese tipo de vehículos y por lo tanto las marcas ya ni los fabrican.Si hablamos de dimensiones, el nuevo SEAT León crece con respecto a su predecesor. Ahora alcanza los 4,38 metros de largo, 1,8 metros de ancho, 1,45 metros de alto y una batalla de 2,68 metros. A pesar de ello el maletero no cambia su tamaño, que sigue mostrando un mínimo de 380 litros. Por su parte la carrocería Sportstourer llega hasta los 4,64 metros de largo para así disponer de un volumen de maletero mayor, con un mínimo de 617 litros. 30 más que la generación anterior.",
                    idMarca:1},
                    {idCoche:2,
                    nombre:"Ibiza",
                    imagen:"https://periodismodelmotor.com/wp-content/uploads/2021/04/SEAT-Ibiza-2021.jpg",
                    descripcion:"El SEAT Ibiza es un utilitario, del segmento B, fabricado por SEAT desde 1984. Actualmente, se comercializa la quinta generación, presentada en 2017 y actualizada en 2021 con un interior de nueva factura. El SEAT Ibiza se caracteriza por ser un utilitario con una buena relación calidad-precio, y por ser el 'primo' económico del Volkswagen Polo. Se fabrica en la planta de SEAT en Martorell (Barcelona).",
                    idMarca:1},
                    {idCoche:3,
                    nombre:"Arona",
                    imagen:"https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Seat-Arona-2018-C01.jpg?itok=mDZZxxLu",
                    descripcion:"El SEAT Arona es un SUV urbano, del segmento B, fabricado por SEAT. Actualmente se comercializa la primera generación, presentada en 2017, y actualizada en 2021 con un nuevo interior y mejoras en calidad. El SEAT Arona se caracteriza por ser el todocamino más pequeño de la gama SUV de SEAT, con unas dimensiones muy contenidas, buen maletero y enfoque muy urbano. El SEAT Arona está hermanado con el SEAT Ibiza, con quien comparte plataforma, motorizaciones y tecnología. De hecho, ambos se fabrican en la factoría de SEAT en Martorell (Barcelona). Y como es tradición en SEAT, este SUV tiene nombre de ciudad española: Arona es un municipio situado al sur de la isla de Tenerife.",
                    idMarca:1}, 
                ],
                [
                    {idCoche:4,
                    nombre:"Polo",
                    imagen:"https://assets.volkswagen.com/is/image/volkswagenag/turismos_nuevo-polo_galeria1_3_1280x720px?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT00NTAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNjYwMA==",
                    descripcion:"Para el desarrollo de la sexta generación del Polo, Volkswagen ha desarrollado una plataforma nueva denominada MQB-A0. Es la misma que podemos ver en otros productos del conglomerado alemán como es el caso del SEAT Ibiza y el Audi A1. Los tres comparten estructura y muchos elementos, siendo considerados por ello como primos hermanos.En cuanto a sus dimensiones, el Volkswagen Polo presenta unas cotas ideales para el segmento al que se dirige. 4,05 metros de largo, 1,75 metros de ancho y 1,46 metros de alto. Eso supone un crecimiento considerable con respecto a las generaciones anteriores, pero hay que tener en cuenta que para esta edición ha desaparecido la carrocería corta, la de tres puertas.A esas medidas exteriores hay que sumar una distancia entre ejes de 2,55 metros que le permite ofrecer un espacio interior correcto para un máximo de cinco pasajeros. En cuanto a su capacidad de carga, el maletero oficializa un volumen mínimo de 351 litros, ampliable a 1.125 litros cuando se abate por completo la segunda fila de asientos en una proporción 60:40.",
                    idMarca:2},
                    {idCoche:5,
                    nombre:"Golf",
                    imagen:"https://www.coches.com/fotos_historicas/volkswagen/Golf/high_d7c54cb90d38698b34476f04459e8f19.jpg",
                    descripcion:"La plataforma MQB del grupo Volkswagen vuelve a ser la base sobre la que se apoya el Golf. Esta arquitectura escalar ha sido renovada y revisada para hacer frente a una gama mecánica muy diversa y polivalente. Gracias a ello el Volkswagen Golf muestra un abanico de motores nunca antes visto en el segmento, la gama y la marca. Todo ello para adaptarse a las cada vez más restrictivas normativas europeas de emisiones y contaminación.Como ya pasa con el resto de rivales del mercado, el Golf ya no dispondrá de más unidades de tres puertas. Hace ya años que las ventas fueron descendiendo hasta niveles puramente residuales, así que, al igual que el viejo modelo, la octava generación no dispondrá de carrocería de tres puertas. Pero sí de otras formas más funcionales como la esperada carrocería Variant y la más que posible unidad Alltrack con claro aspecto campero.Dado que la plataforma sobre la que se apoya es la misma, las medidas exteriores apenas varían con respecto a su predecesor. El nuevo Golf se queda en los 4,28 metros de largo, tres centímetros más que antes, 1,78 metros de ancho, 1,45 metros de alto. Su batalla tampoco se modifica y se planta una vez más en los 2,68 metros. Eso nos deja con un espacio interior muy óptimo y con unas medidas muy aprovechables tanto para pasajeros como para carga.",
                    idMarca:2},
                    {idCoche:6,
                    nombre:"T-Roc",
                    imagen:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/12/volkswagen-t-roc.jpg?itok=WN1GoGCv",
                    descripcion:"La gama SUV de Volkswagen ofrece un amplio abanico de posibles modelos y diferentes carrocerías. El Volkswagen T-Roc se sitúa como una de las unidades más pequeñas de esta familia, justo por debajo de los Volkswagen Tiguan y Volkswagen Touareg, pero por encima del más pequeño de todos, el Volkswagen T-Cross. Los cuatro modelos conforman una de las gamas más vendidas del mercado.",
                    idMarca:2}
                ],
                [
                     {idCoche:7,
                    nombre:"Audi A3 sportback",
                    imagen:"https://www.autonocion.com/wp-content/uploads/2020/12/Audi-A3-Sportback-45-TFSI-e-4.jpg",
                    descripcion:"Para la cuarta de sus ediciones, el Audi A3 hace uso una vez más de la plataforma MQB del Grupo Volkswagen, esa que comparte con sus hermanos y rivales; el SEAT León y el Volkswagen Golf. Esta plataforma ha sido rediseñada para albergar diferentes soluciones de movilidad. Desde mecánicas térmicas hasta versiones híbridas e híbridas enchufables. Sin olvidar por supuesto de las unidades más prestacionales, el S3 y el RS 3 Sportback.Como ya pasara con el modelo anterior, la nueva generación del A3 no dispone de carrocería de tres puertas. Sin embargo contamos con versiones tradicionales como la carrocería de cinco puertas, o Sportback, además de una carrocería Sedán. La novedad es la desaparición de la carrocería descapotable ante la falta de potenciales compradores. De esta manera el BMW Serie 2 será el único compacto descapotable que quede en el mercado.",
                    idMarca:3},
                    {idCoche:8,
                    nombre:"Audi A1",
                    imagen:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/audi-a1-2019_3.jpg?itok=oOsPOE2u",
                    descripcion:"El Audi A1 es un utilitario, un coche pequeño, un urbano de vocación premium, una alternativa al Volkswagen Polo, al Fiat 500, al DS3, al Alfa Romeo MiTo y sobre todo al MINI. No te pierdas nuestra guía de compra si estás pensando en adquirir un pequeño utilitario como el A1.El Audi A1 se fabrica en España, concretamente en la fábrica de SEAT en Martorell.",
                    idMarca:3},
                    {idCoche:9,
                    nombre:"Audi A7",
                    imagen:"https://d1eip2zddc2vdv.cloudfront.net/dphotos/18375-1528188307.jpg",
                    descripcion:"El Audi A7 es al A6 como el Audi A5 al Audi A4. La casa alemana utiliza la denominación Sportback en parte de su gama para referirse a las carrocerías coupé de modelos convencionales, de ahí que el A7 siempre vaya acompañado de tan conocido apellido. Se trata de un modelo de grandes dimensiones que opta por un cliente diferente, uno que priorice la estética por encima de la funcionalidad, y que busque una conducción más dinámica.",
                    idMarca:3}
                ],
                [
                    {idCoche:10,
                    nombre:"BMW Serie 2 Coupé",
                    imagen:"https://i.blogs.es/2ce356/bmw-serie-2-coupe-2021-15/1366_521.jpeg",
                    descripcion:"El BMW Serie 2 Coupé es un deportivo de tamaño compacto, del segmento C, fabricado por BMW desde 2014. Actualmente se comercializa la segunda generación, un modelo completamente nuevo lanzado en 2021. En la 'Serie 2' existe también una berlina denominada BMW Serie 2 Gran Coupé, pero que no comparte plataforma, ni diseño con la carrocería coupé. El BMW Serie 2 Coupé se fabrica en México, en la factoría de San Luís Potosí.El BMW Serie 2 Coupé es un coche que cuenta con muy distintas alternativas, existiendo a su vez otras opciones que merece la pena considerar para su variante berlina. Entre las opciones más deportivas encontramos a coches como el Toyota Supra o el Jaguar F-Type, pudiendo también considerar otros coches como el Mercedes CLA o el Audi A3 sedán.",
                    idMarca:4},
                    {idCoche:11,
                    nombre:"BMW M135i xDrive",
                    imagen:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90440668-highres-the-bmw-m135i-xdrive-1634717772.jpg",
                    descripcion:"La máxima expresión de deportividad dentro de la Serie 1 de BMW viene dada por la versión M135i xDrive, un compacto deportivo que tiene una importante competencia en su segmento con los Audi S3, Mercedes-AMG A35 y Volkswagen Golf R. Por ello, la marca alemana ha decidido realizar una serie de ajustes en el chasis de su máquina para así beneficiarse de un mayor dinamismo y un placer de conducción mejorado, manteniendo la estética del vehículo inalterada.",
                    idMarca:4},
                    {idCoche:12,
                    nombre:"BMW M4 Cabrio",
                    imagen:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90420232-highres-the-new-bmw-m4-compe-1622020617.jpg?resize=480:*",
                    descripcion:"Una nueva definición de la libertad ilimitada: los BMW M4 Cabrio son la simbiosis perfecta de fuerza y diseño estético, combinada con la deportividad típica de M. Ambas variantes hacen que el pulso del entusiasta del Cabrio deportivo se dispare al instante. El BMW M4 Competition Cabrio con sistema M xDrive impresiona por sus 375 kW (510 CV) y un par de 650 Nm. Equipado con un motor de gasolina de 6 cilindros en línea BMW M TwinPower Turbo de elevadas prestaciones, cambio Steptronic M de 8 velocidades con Drivelogic, sistema M xDrive con diferencial M activo y numerosas tecnologías derivadas del mundo de la competición, ofrece un dinamismo de conducción enormemente ágil, tanto en carretera como en el circuito. El BMW M440i xDrive Cabrio, con 275 kW (374 CV) de potencia, conquista no solo por su diseño progresivo, el diferencial deportivo M y el cambio deportivo Steptronic de 8 velocidades, sino también por una sofisticada combinación de deportividad, eficiencia y excelente aptitud para la vida diaria.",
                    idMarca:4}
                ]
            ],
            cocheSeleccionado:{
                idCoche:0,
                nombre:"",
                imagen:"",
                descripcion:"",
                idMarca:0,
            }
        }
    },methods:{
        cargarCoche(){
            this.idcoche = this.$route.params.idcoche;
            console.log("id coche " + this.idcoche);
            for(var i = 0; i<4; i++){
                for(var k = 0; k<3; k++){
                    if(this.coches[i][k].idCoche  == this.idcoche){
                    this.cocheSeleccionado.idCoche = this.coches[i][k].idCoche;
                    this.cocheSeleccionado.nombre = this.coches[i][k].nombre;
                    this.cocheSeleccionado.imagen = this.coches[i][k].imagen;
                    this.cocheSeleccionado.descripcion = this.coches[i][k].descripcion;
                    this.cocheSeleccionado.idMarca = this.coches[i][k].idMarca;
                    }
                }
            }
            return this.cocheSeleccionado;
        }
    },mounted(){
        this.cargarCoche();
        console.log("hola detalle");
    },watch:{
        '$route.params.idcoche'(nextprop, prevprop){
            if(nextprop != prevprop){
                this.cargarCoche();
            }
        }
    }
}
</script>