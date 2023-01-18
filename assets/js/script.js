<span  cursor:pointer;></span>

<aside>
    <span data-num="1"> Ver pagina 1</span>
    <span data-num="2"> Ver pagina 2</span>
</aside>

<script>
 
    let paginas = document.getElementsByTagName("span");
    
    for(let pagina of paginas ){
        console.log(pagina);
       pagina.addEventListener("click", function(){onClick(pagina.dataset.numeroPagina)});
    }

    function onClick(numeroPagina){
        fetch("https://reqres.in/api/users?page=" + numeroPagina )
    .then((response) => response.json())
    .then((users) => callbackusuarios(users));
        
    };



function callbackusuarios(users) {
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
 // console.log(users.data);
 users.data.forEach(elemento => {
    console.log(elemento);

        let usuario = `<section class="usuarios">
                        <div class="tarjeta" style="background-color: aliceblue;
                         padding: 5px 5px;
                        border-radius: 7px;
                        border-style: outset;
                        ">
                         <h3 style ="    text-align: center;
                            -webkit-text-stroke: thick;
                             background-color: darkgray;">
                             ${elemento.id}</h3>
                         <img src="${elemento.avatar}" alt="">
                         <p>${elemento.first_name}</p>
                         <p>${elemento.last_name}</p>
                         <p>${elemento.email}</p>
                         </div>
                     </section>`;

    contenedor.innerHTML = contenedor.innerHTML + usuario;

 });
    
}
</script>