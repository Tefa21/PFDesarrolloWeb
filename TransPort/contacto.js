const template = document.createElement('template');
template.innerHTML = `

<style>
  body {font-family: Arial, Helvetica, sans-serif;}
  * {
    box-sizing: border-box;
  }
  
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }
  
  input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  }
  
  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
  
  .open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    right: 28px;
    width: 280px;
  }

  .form-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
  }

  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }

  .form-container input[type=text], .form-container input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
  }
  .form-container input[type=text]:focus, .form-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }

  .form-container .btn {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    width: 30%;
    margin-bottom:10px;
    opacity: 0.8;
  }
  
 .form-container .cancel {
    background-color: red;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: left;
  }
  
 .form-container .btn:hover, .open-button:hover {
    opacity: 1;
  }
  </style>

  <button class="open-button" onclick="openForm()">Contactenos</button>
  
  <div class="form-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
     <div class="container">
    <form action="/action_page.php">
      <div class="row">
        <div class="col-25">
          <label for="fname">Nombre</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="firstname" placeholder="Nombre completo..">
        </div>
      </div>
      <div class="row">
        <div class="col-25">Apellido</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="lastname" placeholder="Apellido completo..">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="country">Area</label>
        </div>
        <div class="col-75">
          <select id="country" name="country">
            <option value="australia">Servicio tecnico</option>
            <option value="canada">Servicio al cliente</option>
            <option value="usa">Mercadeo</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="subject">Aviso</label>
        </div>
        <div class="col-75">
          <textarea id="subject" name="subject" placeholder="Descripcion" style="height:200px"></textarea>
        </div>
      </div>
      <div class="row">
        <input type="submit" value="Enviar">
        <button type="button" class="btn cancel" onclick="closeForm()">Cerrar</button>
      </div>
    </form>
  </div>
    </form>
  </div>
  
  `;

  
  
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }



window.customElements.define('componente-web',ComponenteWeb)