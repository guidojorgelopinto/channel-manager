fetch("http://localhost:3000/reservar", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    habitacion_id: 1,
    fecha: "2026-03-20",
    cliente: "Juan Perez",
    canal: "booking"
  })
})
  .then(r => r.text())
  .then(console.log);
