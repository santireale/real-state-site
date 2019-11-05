const showErrors = (errors) => 
`
  <div class="errors">
    <h3>Se encontraron los siguientes errores</h3>
    ${ errors.map(error => `<p>${error.msg}</p>`).join('') }
  </div>
`;
const getView = (session) => {console.log('ssss', session.errors); return `
<form action="/contacto" method="post">
<div class="row">
<div class="col-md-1"></div>
    <div class="col-md-4">
        <h5> <u> Contactenos: </u> </h5>
        <br>
        <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Su nombre completo:</label>
            <input type="text" class="form-control" id="" placeholder="Apellido, nombre.">
        </div>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">Numero de celular:</label>
            <input class="form-control" id="exampleFormControlTextarea1" name="numberTel" placeholder="3584282687" />
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">Tu Email:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1 emailInputUser" value="${session.email ? session.email : ''}" name="email" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Asunto:</label>
          <input type="text" class="form-control" name="subject" placeholder="Asunto" />
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name="message" placeholder="Mensaje" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Enviar</button>
        </form>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <div class="card border-success mb-3" style="">
            <div class="card-header bg-transparent border-success">Inomobiliaria - KZ</div>
            <div class="card-body text-success">
            <h5 class="card-title"><u> Email: </u> inmobiliariakz@outlook.com </h5>
            <h5 class="card-title"><u> Telefono: </u> +54 9 358 428 2687 </h5>
            <h5 class="card-title"><u> Ubicación: </u> San Martin 254 PISO 4 DPTO B</h5>
            <br>
            <p class="card-text">Su consulta no molesta.</p>
        </div>
            <div class="card-footer bg-transparent border-success">Gracias por confiar en nosotros.</div>
        </div>
    </div>
</div>
</form>
  ${ session.messageSent ? `<p>Su mensaje fu enviado con exito</p>` : '' }
  ${ session.errors ? showErrors(session.errors) : '' }
`};

module.exports = { getView };
