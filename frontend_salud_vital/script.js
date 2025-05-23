const data = {
  "Medicina General": {
    descripcion: "Atención médica primaria para adultos y niños",
    doctor: "Dra. García",
    ubicacion: "Torre B, Consultorio 101"
  },
  "Psicología": {
    descripcion: "Atención psicológica profesional",
    doctor: "Dr. López",
    ubicacion: "Torre A, Consultorio 210"
  },
  "Ortopedia": {
    descripcion: "Especialistas en huesos y articulaciones",
    doctor: "Dra. Mendoza",
    ubicacion: "Torre B, Consultorio 1"
  },
  "Odontología": {
    descripcion: "Servicios de salud oral",
    doctor: "Dr. Pérez",
    ubicacion: "Torre C, Piso 3"
  }
};

function mostrarDetalle(nombre) {
  const esp = data[nombre];
  const cont = document.getElementById("detalleEspecialidad");
  cont.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Descripción:</strong> ${esp.descripcion}</p>
    <p><strong>Doctor:</strong> ${esp.doctor}</p>
    <p><strong>Ubicación:</strong> ${esp.ubicacion}</p>
    <button onclick="alert('Cita programada para ${nombre}')">Programar Cita</button>
  `;
}
