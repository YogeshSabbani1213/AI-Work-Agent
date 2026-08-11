import express from 'express'
import cors from 'cors'
import workRoutes from './routes/workRoutes.js'

const app = express();
app.use(cors())
app.use(express.json())


app.use('/api/work/',workRoutes);

// Simple test route.
// This helps us confirm that our backend is working.
app.get("/", (req, res) => {
  res.json({
    message: "AI Work Agent API is running successfully"
  });
});

export default app;