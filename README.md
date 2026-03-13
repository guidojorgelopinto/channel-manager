# Channel Manager

Proyecto full‑stack para gestionar disponibilidad y reservas de habitaciones. Incluye:

- Frontend en Angular
- Backend en Node.js + Express
- Base de datos MySQL

---

## Tecnologías

- Angular 17/18 (standalone, SCSS)
- Node.js 22 + Express 5
- MySQL2
- API REST
- Git / GitHub

---

## Estructura

CHANNEL-MANAGER/
├── channel-manager-backend/
├── channel-manager-frontend/
└── channel_manager.sql

---

## Backend

Instalación:

bash
cd channel-manager-backend
npm install

Configurar base de datos en server.js:

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'channel_manager'
});

Ejecutar:

bash
node server.js
Servidor en:

http://localhost:3000

---

## Frontend

Instalación:

bash
cd channel-manager-frontend
npm install

Ejecutar:

bash
ng serve

Disponible en:

http://localhost:4200

---

## Endpoints

GET /disponibilidad/:fecha
Devuelve habitaciones disponibles.

POST /reservar
Crea una reserva.

Body:

json
{
  "habitacion_id": 1,
  "fecha": "2026-03-20",
  "cliente": "Juan Pérez",
  "canal": "Booking"
}

Autor
Guido – Desarrollador Full Stack

