const paisesDepartamentos = {
        "Costa Rica": ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"],
        "El Salvador": ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"],
        "Guatemala": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapá", "Zacapa"],
        "Honduras": ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"],
        "Nicaragua": ["Atlántico Norte", "Atlántico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia y Rivas", "Río San Juan"],
        "Panamá": ["Bocas del Toro", "Coclé", "Colón", "Chiriquí", "Darién", "Herrera", "Los Santos", "Panamá", "Veraguas", "Panamá Oeste"]
      };

      const selectPais = document.getElementById('select-pais');
      const selectDepartamento = document.getElementById('select-departamento');
      const form = document.getElementById('Registro');

      selectPais.addEventListener('change', (event) => {
        const paisSeleccionado = event.target.value;
        
        selectDepartamento.innerHTML = '<option value="">Seleccion</option>';
        selectDepartamento.disabled = true;

        if (paisesDepartamentos[paisSeleccionado]) {
          paisesDepartamentos[paisSeleccionado].forEach(departamento => {
            const option = document.createElement('option');
            option.value = departamento;
            option.textContent = departamento;
            selectDepartamento.appendChild(option);
          });
          selectDepartamento.disabled = false;
        }
});

form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);