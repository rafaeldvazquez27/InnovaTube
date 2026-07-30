import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servicor ejecutándose en http://localhost:${PORT}`);
})