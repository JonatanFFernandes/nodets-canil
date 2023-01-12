import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

//Criação do servidor
const server = express();

//Configuração do Template Engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configuração da Pasta Pública
server.use(express.static(path.join(__dirname, '../public')));

//Configuração das Rotas
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
});

//Colocar o servidor para rodar
server.listen(process.env.PORT);

