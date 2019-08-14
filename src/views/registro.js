const registro = {
    render: async () => {
        const view =
            `<header class="cabecera">
            <h1>Crear cuenta</h1>
            </header>
            <br>
            <div class="registrar-box boxData">
                <h6>Puedes registrarte con las siguientes redes sociales:</h6>
                <br>
                <button type="button" class="btn btn-secondary"><img src="img/googleicon.png" width="10%"
                height="auto"><strong>Registrar con Google</strong></button>
                <br>
                <button type="button" class="btn btn-secondary"><img src="img/facebookicon.png" width="10%"
                height="auto"><strong>Registrar con Facebook</strong> </button>
            </div>
            <div class="line-logo">
                <hr class="decorate">
                <img class="hopaki-pk" src="img/hopaki-pk.png" width="10%" height="auto">
                <hr class="decorate">
            </div>
            <!--FORMULARIO EMAIL-->
            <div class="mail-pass">
                <label for="email">Ingresa tu correo</label>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Ingresa tu correo" aria-label="Username" aria-describedby="basic-addon1" id="email-form"/>
                </div>
                <!--FORMULARIO CONTRASEÑA-->
                <label for="password">Crea una contraseña</label>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                    <input type="text" class="form-control" placeholder="Ingresa tu contraseña" aria-describedby="basic-addon1" id="password-form"/>
                </div>
                <br>
                <button id="registrar-btn" class="btn-send btn" href="#/inicio" >Enviar</button>
            </div>`
        return view
    },

    after_render: async () => {
        const email = document.getElementById("email-form");
        console.log(email);
        const password = document.getElementById("password-form");
        console.log(password);
        const register = document.getElementById('registrar-btn');
        register.addEventListener('click', () => registrar(email.value, password.value));
    }
};

export default registro;
