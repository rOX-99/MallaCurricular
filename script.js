function mostrarDetalles(asignatura) {
  // Oculta todos los detalles primero
  const detalles = document.querySelectorAll('.detalles');
  detalles.forEach(detalle => {
    detalle.style.display = 'none';
  });
  
  // Muestra el detalle de la asignatura seleccionada
  const detalleSeleccionado = document.getElementById(asignatura);
  if (detalleSeleccionado) {
    detalleSeleccionado.style.display = 'block';
  }
}
