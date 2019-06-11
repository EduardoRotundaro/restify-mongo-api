const adicionar = require("./adicionar");
const buscarPorId = require("./buscarPorId");
const buscarPorLote = require("./buscarPorLote");
const editar = require("./editar");
const excluir = require("./excluir");
const listarLotes = require("./listarLotes");
const listarTodos = require("./listarTodos");
const listarVencidos = require("./listarVencidos");

module.exports = {
    adicionar: async (req, res) => await adicionar(req, res),
    buscarPorId: async (req, res) => await buscarPorId(req, res),
    buscarPorLote: async (req, res) => await buscarPorLote(req, res),
    editar: async (req, res) => await editar(req, res),
    excluir: async (req, res) => await excluir(req, res),
    listarLotes: async (req, res) => await listarLotes(req, res),
    listarTodos: async (req, res) => await listarTodos(req, res),
    listarVencidos: async (req, res) => await listarVencidos(req, res)
}