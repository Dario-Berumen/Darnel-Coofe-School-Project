const close_button = document.getElementById("close_bt");
const sub_window = document.getElementById("window");
const dark_found = document.getElementById("fondo_obscuro");

/*Window Elements Components*/
const image = document.getElementById("img");
const title = document.getElementById("title");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

close_button.addEventListener('click', function()
{
    sub_window.style.display = "none";
    dark_found.style.display = "none";
});

function abrir (product)
{
    dark_found.style.display = "block";
    sub_window.style.display = "block";

    switch(product)
    {
        //Desayunos
        case "Chilaquiles Verdes":
            image.src = "./imagenes/chilaquilesVerdes.jpg"
            title.textContent = "Chilaquiles Verdes"
            p1.textContent = "Un plato clásico de la cocina mexicana que combina la suavidad de los totopos de maíz bañados en una salsa verde vibrante, con la frescura de la cebolla crujiente, la cremosidad del queso fresco, el toque ácido de la crema y el aroma del cilantro fresco.";
            p2.textContent = "En la elaboración de nuestros Chilaquiles Verdes, utilizamos totopos de maíz crujientes, salsa verde casera, cebolla blanca fresca cortada en rodajas finas, queso fresco desmenuzado, crema mexicana y cilantro fresco picado.";
            break;        
        case "Chilaquiles Rojos": 
            image.src = "./imagenes/chilaquitesRojos.jpg"; 
            title.textContent = "Chilaquiles Rojos"
            p1.textContent = "Una deliciosa opción de la cocina mexicana que combina la textura crujiente de los totopos de maíz bañados en una salsa roja ligeramente picante, con la dulzura de la cebolla caramelizada, la cremosidad del queso fresco, el toque ácido de la crema y el aroma del cilantro fresco.";
            p2.textContent = "En la preparación de nuestros Chilaquiles Rojos, utilizamos totopos de maíz crujientes, salsa roja casera ligeramente picante, cebolla blanca caramelizada, queso fresco desmenuzado, crema mexicana y cilantro fresco picado.";
            break;
        case "Huevos Estrellados": 
            image.src = "./imagenes/huevosEstrellados.jpg"; 
            title.textContent = "Estrellados"
            p1.textContent = "Una combinación irresistible que fusiona la cremosidad de los huevos estrellados con la textura crujiente de los totopos de maíz bañados en una salsa roja o verde, acompañados de cebolla caramelizada, queso fresco, crema mexicana y cilantro fresco.";
            p2.textContent = "En la preparación de nuestros Huevos Estrellados con Chilaquiles, utilizamos huevos frescos de granja, totopos de maíz crujientes bañados en salsa roja o verde casera, cebolla blanca caramelizada, queso fresco desmenuzado, crema mexicana y cilantro fresco picado.";
            break;
        case "Huevos Revueltos": 
            image.src = "./imagenes/huevosRevueltos.jpg"; 
            title.textContent = "Revueltos"
            p1.textContent = "Una opción clásica y reconfortante que combina la suavidad de los huevos revueltos con ingredientes frescos y sabrosos, perfectos para comenzar el día con energía. Disfruta de la textura cremosa de los huevos acompañados de cebolla caramelizada, tomate fresco, chiles serranos picados, queso fresco desmenuzado y cilantro fresco.";
            p2.textContent = "En la preparación de nuestros Huevos Revueltos, utilizamos huevos frescos de granja batidos con cuidado para lograr una textura suave y esponjosa. Acompañados de cebolla blanca caramelizada, tomate fresco picado, chiles serranos para un toque de picante, queso fresco desmenuzado y cilantro fresco picado.";
            break;
        case "Molletes Salados": 
            image.src = "./imagenes/molletes.jpg"; 
            title.textContent = "M.Salados"
            p1.textContent = "Una deliciosa opción de la cocina mexicana que combina la suavidad de los frijoles refritos con la textura crujiente del pan bolillo, todo cubierto con una capa generosa de queso derretido y acompañado de ingredientes frescos y sabrosos.";
            p2.textContent = "En la elaboración de nuestros Molletes Salados, utilizamos pan bolillo recién horneado, frijoles refritos untados con cuidado sobre el pan, una capa generosa de queso derretido sobre los frijoles y acompañados de cebolla blanca fresca picada, tomate fresco en cubitos, chiles jalapeños en rodajas y cilantro fresco picado.";
            break;
        case "Molletes Dulces": 
            image.src = "./imagenes/molletesDulces.jpg"; 
            title.textContent = "M.Dulces"
            p1.textContent = "Una deliciosa versión dulce de los molletes, perfecta para satisfacer tu antojo de algo dulce en cualquier momento del día. Disfruta de la suavidad del pan bolillo recién horneado, untado con mantequilla y espolvoreado con una generosa cantidad de azúcar y canela, todo ello acompañado de ingredientes que deleitarán tu paladar.";
            p2.textContent = "En nuestros Molletes Dulces, utilizamos pan bolillo fresco, suavemente untado con mantequilla y luego espolvoreado con una mezcla de azúcar y canela para darle un toque dulce y aromático. Como acompañamiento, puedes disfrutarlos con una bola de helado de vainilla cremoso, fresas frescas en rodajas y un toque final de miel o jarabe de arce.";
            break;
        case "Omelette": 
            image.src = "./imagenes/omelettepng.png"; 
            title.textContent = "Omelette"
            p1.textContent = "Un plato versátil y sabroso que combina la suavidad de los huevos batidos con una variedad de ingredientes frescos y sabrosos, cocidos a la perfección y doblados en una forma elegante. Disfruta de la textura esponjosa de los huevos con el relleno de tu elección, desde vegetales frescos hasta deliciosos quesos y sabrosas carnes.";
            p2.textContent = "En la preparación de nuestro Omelette, utilizamos huevos frescos de granja batidos con cuidado para obtener una textura suave y esponjosa. Puedes personalizar tu omelette con una variedad de ingredientes, como champiñones, espinacas, tomates, cebollas, pimientos, jamón, tocino, queso cheddar, queso suizo, entre otros.";
            break;
        case "Waffles": 
            image.src = "./imagenes/waffles.jpg"; 
            title.textContent = "Waffles"
            p1.textContent = "Un manjar dulce y esponjoso que combina la ligereza de los waffles recién horneados con una variedad de deliciosos acompañamientos, perfectos para satisfacer tu antojo de algo dulce. Disfruta de la textura crujiente por fuera y suave por dentro de nuestros waffles, acompañados de ingredientes que harán que cada bocado sea una experiencia inolvidable.";
            p2.textContent = "En la preparación de nuestros Waffles, utilizamos una receta especial que garantiza su esponjosidad y sabor inigualables. Puedes disfrutarlos con una variedad de acompañamientos, como frutas frescas como fresas, plátanos o arándanos, crema batida esponjosa, sirope de arce o miel dorada, e incluso un toque de chocolate derretido o nueces crujientes.";
            break;
        case "Pan Francés": 
            image.src = "./imagenes/panFrances.jpg"; 
            title.textContent = "Waffles"
            p1.textContent = "Una delicia reconfortante que combina la suavidad del pan recién horneado con la dulzura de la mezcla de huevo y canela, todo ello dorado a la perfección en la sartén. Disfruta de la textura esponjosa por dentro y crujiente por fuera de nuestro pan francés, acompañado de una variedad de sabrosos ingredientes que realzarán su sabor.";
            p2.textContent = "En la preparación de nuestro Pan Francés, utilizamos rebanadas de pan fresco sumergidas en una mezcla de huevo batido con un toque de canela y vainilla, luego doradas en la sartén hasta que estén doradas y crujientes por fuera. Puedes disfrutarlo con una variedad de acompañamientos, como frutas frescas como plátanos, moras o manzanas caramelizadas, una generosa cantidad de sirope de arce o miel, e incluso una pizca de azúcar glas espolvoreada por encima.";
            break;
        case "Avena de manzana": 
            image.src = "./imagenes/manzana-canela.jpg"; 
            title.textContent = "Avena de manzana";
            p1.textContent = "Un desayuno reconfortante que combina la cremosidad de la avena cocida con la dulzura natural de las manzanas, realzado con especias cálidas que te harán sentir como en casa. Disfruta de la textura suave y reconfortante de la avena, con trozos tiernos de manzana y un toque de canela y nuez moscada.";
            p2.textContent = "En la preparación de nuestra Avena de Manzana, utilizamos avena integral cocida a fuego lento en leche o agua, junto con trozos frescos de manzana cortados en cubitos. Añadimos una pizca de canela molida y nuez moscada para realzar el sabor, y endulzamos al gusto con miel, azúcar o sirope de arce.";
            break;
        //Comidas
        case "paninis": 
            image.src = "./imagenes/Panini.jpeg"; 
            title.textContent = "Paninis";
            p1.textContent = "Un desayuno reconfortante que combina la cremosidad de la avena cocida con la dulzura natural de las manzanas, realzado con especias cálidas que te harán sentir como en casa. Disfruta de la textura suave y reconfortante de la avena, con trozos tiernos de manzana y un toque de canela y nuez moscada.";
            p2.textContent = "En la preparación de nuestra Avena de Manzana, utilizamos avena integral cocida a fuego lento en leche o agua, junto con trozos frescos de manzana cortados en cubitos. Añadimos una pizca de canela molida y nuez moscada para realzar el sabor, y endulzamos al gusto con miel, azúcar o sirope de arce.";
            break;
        case "lasaña": 
            image.src = "./imagenes/lasana-t.jpg.webp"; 
            title.textContent = "Lasaña al Horno";
            p1.textContent = "Una opción sabrosa y versátil que combina la frescura del pan recién horneado con una variedad de ingredientes deliciosos, todo ello prensado y dorado a la perfección para crear un sándwich caliente y reconfortante. Disfruta de la combinación de sabores y texturas en cada bocado de nuestros paninis, desde la suavidad del pan hasta la fusión de los ingredientes en su interior.";
            p2.textContent = "En la preparación de nuestros Paninis, utilizamos panes artesanales recién horneados, rellenos con una variedad de ingredientes frescos y sabrosos, como jamón, queso, pollo a la parrilla, tomate, espinacas, aguacate, cebolla caramelizada, pimientos asados, y más. Cada panini se prensa y dora en una parrilla caliente hasta que el queso se derrite y el pan esté crujiente por fuera.";
            break;
        case "lonches": 
            image.src = "./imagenes/lonche.jpg"; 
            title.textContent = "Lonches";
            p1.textContent = "Una opción clásica de la comida callejera mexicana que combina la frescura de los bolillos recién horneados con una variedad de rellenos sabrosos y condimentos tradicionales, todo ello envuelto en papel encerado para disfrutar sobre la marcha. Disfruta de la combinación de sabores y texturas en cada bocado de nuestros lonches, desde la suavidad del pan hasta la explosión de sabor de los rellenos.";
            p2.textContent = "En la preparación de nuestros Lonches, utilizamos bolillos frescos de panadería, rellenos con una variedad de opciones, como carnitas de cerdo jugosas, carne asada marinada, pollo deshebrado sazonado, chorizo picante, o incluso opciones vegetarianas como frijoles refritos con queso. Añadimos ingredientes frescos como lechuga, tomate, cebolla y aguacate, y condimentamos con salsa picante al gusto.";
            break;
        case "enchiladasVerdes": 
            image.src = "./imagenes/enchiladasVerdes.webp"; 
            title.textContent = "Enchiladas Verdes";
            p1.textContent = "Un plato clásico de la cocina mexicana que combina la suavidad de las tortillas de maíz rellenas de pollo deshebrado, bañadas en una salsa verde vibrante y cubiertas con queso derretido, cebolla fresca y crema, todo ello horneado para crear una explosión de sabores. Disfruta de la combinación perfecta entre la frescura de los ingredientes y la intensidad de los sabores en cada bocado de nuestras enchiladas verdes.";
            p2.textContent = "En la preparación de nuestras Enchiladas Verdes, utilizamos tortillas de maíz suaves y flexibles, rellenas con pollo deshebrado y enrolladas cuidadosamente. Las cubrimos con una salsa verde casera, elaborada con tomatillos, chiles verdes, cilantro y especias, y las horneamos hasta que estén calientes y burbujeantes. Antes de servir, añadimos una capa generosa de queso derretido, cebolla blanca fresca picada y crema mexicana.";
            break;
        case "enchiladasRojas": 
            image.src = "./imagenes/enchiladasRojas.jpg"; 
            title.textContent = "Enchiladas Rojas";
            p1.textContent = "Un platillo tradicional de la cocina mexicana que combina la suavidad de las tortillas de maíz rellenas de pollo deshebrado, bañadas en una salsa roja ligeramente picante y cubiertas con queso derretido, cebolla fresca y crema, todo ello horneado para crear una experiencia gastronómica inolvidable. Disfruta de la armonía entre la cremosidad, la frescura y el picante en cada bocado de nuestras enchiladas rojas.";
            p2.textContent = "En la preparación de nuestras Enchiladas Rojas, utilizamos tortillas de maíz rellenas con pollo deshebrado y enrolladas con precisión. Las bañamos con una salsa roja casera, elaborada con chiles secos, tomates, cebolla y especias, que le confiere un sabor ahumado y ligeramente picante. Horneamos las enchiladas hasta que estén calientes y el queso derretido se derrame sobre ellas. Finalmente, las servimos con una guarnición de cebolla blanca fresca picada y crema mexicana.";
            break;
        case "ordSand": 
            image.src = "./imagenes/sandwichOrden.jpg"; 
            title.textContent = "Sandwiches";
            p1.textContent = "Una selección variada de sandwiches preparados con ingredientes frescos y sabrosos, perfectos para satisfacer cualquier antojo y compartir con amigos o familiares. Disfruta de la combinación de pan recién horneado, rellenos deliciosos y condimentos irresistibles en cada uno de nuestros sandwiches.";
            p2.textContent = "";
            break;
        case "sandQueso": 
            image.src = "./imagenes/sandwichQuesojpg.jpg"; 
            title.textContent = "Sand Queso";
            p1.textContent = "Un clásico reconfortante que combina la cremosidad del queso derretido con la textura crujiente del pan tostado, todo ello gratinado para crear una capa dorada y deliciosa. Disfruta de la indulgencia de cada bocado de nuestro sandwich de queso gratinado, perfecto para los amantes del queso.";
            p2.textContent = "En la preparación de nuestro Sandwich de Queso Gratinado, utilizamos una mezcla de quesos suizos y cheddar de alta calidad, colocada entre dos rebanadas de pan de molde ligeramente tostado. Luego, gratinamos el sandwich en el horno hasta que el queso se derrite y se forme una capa dorada y crujiente en la parte superior.";
            break;
        case "pechuga": 
            image.src = "./imagenes/oechugaPolloEm.webp"; 
            title.textContent = "Pechuga Pollo";
            p1.textContent = "Una deliciosa y jugosa pechuga de pollo, recubierta con una mezcla crujiente de pan rallado y especias, luego dorada a la perfección para crear una capa exterior dorada y crujiente, manteniendo el interior tierno y jugoso. Disfruta de cada bocado de nuestra pechuga de pollo empanizada, una opción clásica y reconfortante que complacerá a todos los amantes del pollo.";
            p2.textContent = "En la preparación de nuestra Pechuga de Pollo Empanizada, comenzamos con pechugas de pollo de alta calidad, las sazonamos con una mezcla de especias y luego las pasamos por huevo batido y pan rallado. Luego, las freímos en aceite caliente hasta que estén doradas y crujientes por fuera, manteniendo su jugosidad en el interior.";
            break;
        case "hamburgesa": 
            image.src = "./imagenes/hamburgesa.jpg"; 
            title.textContent = "Hamburgesa";
            p1.textContent = "Una hamburguesa jugosa y sabrosa que combina la calidad de la carne de res con ingredientes frescos y salsas irresistibles, todo ello servido entre dos panes suaves y ligeramente tostados. Disfruta de la satisfacción de cada bocado de nuestra hamburguesa clásica, una opción perfecta para los amantes de la comida reconfortante.";
            p2.textContent = "En la preparación de nuestra Hamburguesa Clásica, utilizamos una jugosa y sabrosa carne de res 100% certificada, sazonada con nuestra mezcla especial de especias y asada a la parrilla para sellar los jugos y realzar el sabor. Colocamos la carne sobre un pan de hamburguesa ligeramente tostado y la cubrimos con una loncha de queso cheddar derretido. Luego, añadimos lechuga crujiente, rodajas de tomate fresco, cebolla morada y pepinillos en vinagre. Por último, cubrimos todo con una generosa porción de nuestra salsa secreta y coronamos con la otra mitad del pan.";
            break;
        case "enfrijoladas": 
            image.src = "./imagenes/enfrijoladas.webp"; 
            title.textContent = "Enfrijoladas";
            p1.textContent = "Un plato tradicional de la cocina mexicana que combina la suavidad de las tortillas de maíz bañadas en una salsa de frijoles refritos, acompañadas de queso fresco desmenuzado, cebolla picada y crema, todo ello servido caliente y listo para disfrutar. Las enfrijoladas son una opción reconfortante y llena de sabor que te transportará directamente a México.";
            p2.textContent = "En la preparación de nuestras Enfrijoladas, comenzamos con tortillas de maíz ligeramente calentadas, que sumergimos en una salsa de frijoles refritos suavemente sazonada. Luego, las enrollamos y las colocamos en un plato, cubriéndolas con más salsa de frijoles. Por encima, espolvoreamos queso fresco desmenuzado y cebolla picada. Finalmente, añadimos una cucharada de crema mexicana para un toque de frescura.";
            break;
        //Ensaladas
        case "Ensalada Wladorf": 
            image.src = "./imagenes/WALDORF.jpg"; 
            title.textContent = "Ensalada Wladorf";
            p1.textContent = "Una ensalada clásica que combina la frescura de la fruta con la cremosidad de la mayonesa y la crujiente textura de las nueces. La Ensalada Waldorf es un plato elegante y delicioso que equilibra a la perfección los sabores dulces y salados.";
            p2.textContent = "Para preparar la Ensalada Waldorf, necesitarás manzanas frescas cortadas en cubos, apio fresco picado en trozos pequeños, nueces picadas, y pasas (opcional). Además, se mezcla todo con una generosa cantidad de mayonesa para obtener esa textura cremosa característica de la ensalada.";
        break;
        case "Ensalada Griega": 
            image.src = "./imagenes/ensaladaGriega.jpg"; 
            title.textContent = "Ensalada Griega";
            p1.textContent = "Una ensalada fresca y sabrosa que evoca los sabores mediterráneos con sus ingredientes simples pero deliciosos. La ensalada griega es un plato ligero y saludable que combina perfectamente el frescor de los vegetales con la cremosidad del queso feta y el toque ácido de las aceitunas y el aderezo.";
            p2.textContent = "Para preparar la Ensalada Griega, necesitarás pepino fresco cortado en rodajas finas, tomates maduros en cubos, cebolla roja en rodajas finas, aceitunas kalamata sin hueso, queso feta desmenuzado y hojas de lechuga fresca.";
        break;
        case "Enchiladas mimosa": 
            image.src = "./imagenes/mimosa.jpg"; 
            title.textContent = "Ensalada Mimosa";
            p1.textContent = "La ensalada Mimosa es una creación delicada y elegante que combina la frescura de las verduras con la suavidad de los huevos duros y el toque de sabor de las aceitunas y el queso. Esta ensalada, típica de la cocina rusa, es un placer para los sentidos, con capas de color y sabor que se combinan armoniosamente en cada bocado.";
            p2.textContent = "La ensalada Mimosa se compone de capas de verduras frescas, como lechuga picada, zanahorias ralladas y remolacha cocida y picada, que se disponen en un plato o fuente de servir. Encima de las verduras, se añaden huevos duros rallados finamente, creando una capa suave y cremosa. Las aceitunas verdes picadas se esparcen sobre los huevos, aportando un toque de salinidad y sabor. Finalmente, se espolvorea queso duro rallado, como queso parmesano o queso cheddar, que añade un rico sabor y una textura crujiente.";
        break;
        case "Ensalada sencilla de verduras": 
            image.src = "./imagenes/ensaldaPollo.webp"; 
            title.textContent = "Ensalada de verduras";
            p1.textContent = "Una ensalada ligera y saludable que resalta la frescura y la variedad de las verduras de temporada. Disfruta de una combinación de texturas y sabores en cada bocado de nuestra ensalada de verduras frescas, aliñada con un aderezo suave y aromático.";
            p2.textContent = "";
        break;
        case "Ensalada sencilla": 
            image.src = "./imagenes/EnsaladaSencilla.webp"; 
            title.textContent = "Ensalada Sencilla";
            p1.textContent = "Una opción sencilla y refrescante que combina una variedad de vegetales frescos y crujientes, aliñados con una vinagreta ligera y aromática. Disfruta de la frescura y la textura en cada bocado de nuestra ensalada fresca de la casa, perfecta como acompañamiento o como plato principal ligero.";
            p2.textContent = "En la preparación de nuestra Ensalada Fresca de la Casa, utilizamos una mezcla de lechugas frescas, como la lechuga romana y la lechuga iceberg, mezcladas con tomate cherry, pepino en rodajas, zanahorias ralladas y rábanos rebanados. Para realzar el sabor, aliñamos la ensalada con una vinagreta casera, elaborada con aceite de oliva virgen extra, vinagre balsámico, mostaza Dijon, ajo picado y una pizca de sal y pimienta.";
        break;
        //Cafés y tes
        case "capuchino": 
            image.src = "./imagenes/capuchino.jpg"; 
            title.textContent = "Café Capuchino";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "americano": 
            image.src = "./imagenes/americano.jpg"; 
            title.textContent = "Café Capuchino";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "expreso": 
            image.src = "./imagenes/expreso.jpg"; 
            title.textContent = "Expreso";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "teRojo": 
            image.src = "./imagenes/teRojo.jpg"; 
            title.textContent = "Té Rojo";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "teManzanilla": 
            image.src = "./imagenes/teManzanilla.jpg"; 
            title.textContent = "Té Manzanilla";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        //Frapes 
        case "oreo": 
            image.src = "./imagenes/frapeOreo.jpg"; 
            title.textContent = "Frape Oreo";
            p1.textContent = "Una indulgente y deliciosa variante del café que combina la riqueza del café recién hecho con la dulzura y el sabor a chocolate de las galletas Oreo. El Café Oreo es una bebida reconfortante que combina lo mejor del café con un toque de golosinas.";
            p2.textContent = "Para preparar un exquisito Café Oreo, necesitarás café recién preparado, leche caliente y galletas Oreo trituradas. Se comienza preparando una taza de café fresco y caliente. Luego, se agrega la leche caliente al café, seguida de una generosa cantidad de galletas Oreo trituradas, que se disolverán lentamente, creando una bebida cremosa y deliciosamente indulgente.";
        break;
        case "frapuchino": 
            image.src = "./imagenes/frapuchino.jpg"; 
            title.textContent = "Café Capuchino";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "frapeMocaBlanco": 
            image.src = "./imagenes/frapeMocaBlanco.webp"; 
            title.textContent = "Frape Moca Blanco";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        //Galletas
        case "galletasChocolate": 
            image.src = "./imagenes/galletasChocolate.jpg"; 
            title.textContent = "Galletas de chocolate";
            p1.textContent = "Ricas y deliciosas galletas de chispas de chocolate. Pruébalas!";
            p2.textContent = "";

        break;
        case "paquete": 
            image.src = "./imagenes/sanValentin.webp"; 
            title.textContent = "Paquete Galletas";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "galletasMixtas": 
            image.src = "./imagenes/galletasMixtas.jpg"; 
            title.textContent = "Paquete de Galletas Mixto";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        case "galletasAvena": 
            image.src = "./imagenes/galletasAvena.jpg"; 
            title.textContent = "Galletas Avena";
            p1.textContent = "Una deliciosa y reconfortante bebida que combina el intenso sabor del café espresso con la suavidad de la leche vaporizada y la cremosidad de la espuma de leche. El Café Cappuccino es un clásico de la cafetería que deleita los sentidos con su aroma y su equilibrado sabor.";
            p2.textContent = "Para preparar un delicioso Café Cappuccino, necesitarás espresso recién hecho, leche fresca y espuma de leche. El café espresso se vierte en una taza precalentada, luego se agrega una cantidad igual de leche vaporizada, y se cubre con una generosa capa de espuma de leche. El resultado es una bebida suave, cremosa y con un sabor inigualable.";
        break;
        //Pasteles
        case "zanahoria": 
            image.src = "./imagenes/pastelZanahoria.webp"; 
            title.textContent = "Pastel de Zanahoria";
            p1.textContent = "Un postre clásico que combina la esponjosidad del bizcocho con la dulzura natural de las zanahorias, complementado con el rico sabor de las especias y la cremosidad del glaseado de queso crema. El Pastel de Zanahoria es una delicia reconfortante que satisface los antojos dulces con su irresistible combinación de sabores y texturas.";
            p2.textContent = "Para preparar un delicioso Pastel de Zanahoria, necesitarás zanahorias ralladas, harina, azúcar, huevos, aceite vegetal, nueces picadas (opcional), y una mezcla de especias como canela, nuez moscada y clavo de olor. Una vez horneado, se cubre con un generoso glaseado de queso crema, que le añade una capa extra de cremosidad y sabor.";
        break;
    } 
}