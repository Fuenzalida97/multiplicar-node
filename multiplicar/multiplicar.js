//requireds

const fs = require('fs');
var colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=================='.green);

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor limite ${limite} no es un numero`);
        return;
    }
    let data = `Tabla del ${base}\n`;

    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = `Tabla del ${base}\n`;


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}