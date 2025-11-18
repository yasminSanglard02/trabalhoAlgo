import db from "../config/database.js"

db.run(`
    CREATE TABLE IF NOT EXISTS usuario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    foto TEXT NOT NULL
    )
`)

function createUsuarioRepository(novoUsuario){
      return new Promise((resolve, reject) => {

        const {
            login,      
            email,
            senha,
            foto       
        } = novoUsuario;

        db.run(
            `INSERT INTO usuario(login, email, senha, foto)
            VALUES(?,?,?,?)`,
            [login,email,senha,foto],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID,
                        novoUsuario
                    });
                }
            }
        );

    });

}

function findAllUsuarioRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM usuario`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findUsuarioByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                * 
            FROM usuario
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    });
}

function updateUsuarioRepository(id, usuario) {
    return new Promise((resolve, reject) => {

        const {
            login,
            email,
            senha,
            foto
        } = usuario;

        db.run(
            `UPDATE usuario
            SET login = ?,      
                email = ?,
                senha = ?,
                foto  = ?
            WHERE id = ?`,
            [login, email, senha, foto, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...usuario
                    });
                }
            }
        )
    });
}

export default {
    createUsuarioRepository,
    findAllUsuarioRepository,
    findUsuarioByIdRepository,
    updateUsuarioRepository
}