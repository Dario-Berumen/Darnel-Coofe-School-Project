const close_button = document.getElementById("close_bt");
const sub_window = document.getElementById("window");
const dark_found = document.getElementById("fondo_obscuro");


/*Window Elements Components*/
const map = document.getElementById("mapa");
const title = document.getElementById("title");

close_button.addEventListener('click', function()
{
    sub_window.style.display = "none";
    dark_found.style.display = "none";
});

function abrir (location)
{
    dark_found.style.display = "block";
    sub_window.style.display = "block";

    switch(location)
    {
        //Desayunos
        case "cdmx":
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836492.6193047124!2d-103.95878760584738!3d20.11005270577793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff72bd1ba303%3A0x72dfa5485f588c43!2sMomentto!5e0!3m2!1ses!2smx!4v1713239920763!5m2!1ses!2smx"
            title.textContent = "CDMX"
            break;        
        case "gdl":
            map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3732.917921701147!2d-103.3800138!3d20.672918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0d1189c343%3A0x971177e9b1a26479!2sC.%20Lope%20de%20Vega%20113%2C%20Arcos%20Vallarta%2C%2044130%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1713241530279!5m2!1ses-419!2smx"
            title.textContent = "GDL"
            break;
        case "zapopan":
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.725236177664!2d-103.3900256!3d20.721379199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afba7b6bfed7%3A0xf8f224fe5902dfbf!2sCaf%C3%A9%20San%20Pedro%20-%20Zapopan!5e0!3m2!1ses-419!2smx!4v1713241712548!5m2!1ses-419!2smx"
            title.textContent = "ZAPOPAN"
            break;  
        case "tonala":
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0939503727286!2d-103.24497528842586!3d20.62502700144186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b5fd0667b619%3A0x155c395d684f9940!2sMokato!5e0!3m2!1ses!2smx!4v1713241965557!5m2!1ses!2smx"
            title.textContent = "TONÁLA"
            break; 
    } 
}