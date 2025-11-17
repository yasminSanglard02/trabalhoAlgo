import usuarioService from '../services/cliente.service.js';

async function createUsuarioControllerr(request, response) {
    const novoCliente = request.body;

    try {
        const cliente = await usuarioService.createUsuarioService(novoUsuario);
        response.status(201).send({usuario});
    } catch (error) {
        return response.status(400).send(error.message);
    } 
}

async function findAllUsuarioController(request, response) {
    try {
        const usuario = await usuarioService.findAllUsuarioService();
            response.status(200).send({usuario});
    } catch(error) {
        return response.status(404).send(error.message);
    }
}

async function findUsuarioByIdController(request, response) {
    const {id}  = request.params;

    try {
        const cliente = await usuarioService.findUsuarioByIdController(id);
        response.status(200).send({usuario});
    } catch (error) {
        return response.status(404).send(error.message);
    }
}
async function updateClienteController(request, response) {
    const {id}             = request.params;
    const novoUsuario = request.body;

    try {
        const cliente = await usuarioService.updateUsuarioService(novoUsuario, id);
        response.status(200).send({usuario});
    } catch (error) {
        return response.status(400).send(error.message);
    }
}

    export default {
        createUsuarioControllerr,
        findAllUsuarioController,
        findUsuarioByIdController,
        updateClienteController
    }