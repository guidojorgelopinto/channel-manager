import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());


const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "channel_manager"
});

console.log("Conexión a MySQL OK");

app.get("/", (req, res) => {
  res.send("Channel Manager backend funcionando");
});

app.get("/disponibilidad", async (req, res) => {
  const { fecha } = req.query;

  const [reservas] = await db.execute(
    "SELECT habitacion_id FROM reservas WHERE fecha = ?",
    [fecha]
  );

  const [habitaciones] = await db.execute("SELECT * FROM habitaciones");

  const libres = habitaciones.filter(
    h => !reservas.some(r => r.habitacion_id === h.id)
  );

  res.json(libres);
});

app.post("/reservar", async (req, res) => {
  const { habitacion_id, fecha, cliente, canal } = req.body;

  const [existe] = await db.execute(
    "SELECT * FROM reservas WHERE habitacion_id = ? AND fecha = ?",
    [habitacion_id, fecha]
  );

  if (existe.length > 0) {
    return res.status(400).json({
      error: "La habitación ya está reservada en esa fecha"
    });
  }

  await db.execute(
    "INSERT INTO reservas (habitacion_id, fecha, cliente, canal) VALUES (?, ?, ?, ?)",
    [habitacion_id, fecha, cliente, canal]
  );

  res.json({ mensaje: "Reserva creada correctamente" });
});

app.listen(3000, () => console.log("Servidor iniciado en puerto 3000"));

