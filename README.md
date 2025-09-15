[Formulario.html](https://github.com/user-attachments/files/22326554/Formulario.html)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario Responsivo con Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
    <link rel="stylesheet" href="CSS/Style.css">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MIN'S Enterprise</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Historia</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más de Nosotros
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Misión</a></li>
                <li><a class="dropdown-item" href="#">Visión</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disable</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>

  <div class="container form-container">
    <div class="text-center mb-4">
      <h1>Registro de Usuario</h1>
      <p class="text-muted">
          Completa los datos para registrarte.
      </p>
    </div>

    <form id="Registro">
      <div class="mb-3">
        <label for="basic-url" class="form-label">NIT</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3"><i class="bi bi-person-vcard"></i></span>
          <input type="text" class="form-control" id="nit" required>
        </div>
      </div>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Nombre</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3"><i class="bi bi-person"></i></span>
          <input type="text" class="form-control" id="nombre" required>
        </div>
      </div>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Apellido</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3"><i class="bi bi-person-fill"></i></span>
          <input type="text" class="form-control" id="apellido" required>
        </div>
      </div>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Edad</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3"><i class="bi bi-calendar2-date"></i></span>
          <input type="number" class="form-control" id="edad" min="0" max="100" required>
        </div>
      </div>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Número de Celular</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3"><i class="bi bi-phone"></i></span>
          <input type="text" class="form-control" id="telefono" required>
        </div>
      </div>

      <div class="input-group mb-3">
        <label for="select-pais" class="form-label">País</label>
        <div class="input-group">
        <label class="input-group-text"><i class="bi bi-globe-americas"></i></label>
        <select class="form-select" id="select-pais" required>
          <option value="">Selección</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Honduras">Honduras</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Panamá">Panamá</option>
        </select>
        </div>
      </div>

      <div class="input-group mb-3">
        <label for="select-departamento" class="form-label">Departamento</label>
        <div class="input-group">
        <label class="input-group-text"><i class="bi bi-geo-alt"></i></label>
        <select class="form-select" id="select-departamento" disabled required>
          <option selected>Selección</option>
        </select>
        </div>
      </div>

      <div class="d-grid mt-4">
        <button type="submit" class="btn btn-outline-success "><i class="bi bi-send"></i> Enviar</button>
      </div>
    </form>
  </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="JS/Script.js"></script>
  </body>
</html>
