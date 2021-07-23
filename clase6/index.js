const fsPromises = require('fs').promises
const fs = require('fs')

class Archivo {
    constructor(nameArchivo){
        this.nameArchivo = nameArchivo + '.txt'
    }

    async read(){
        try {
            if (fs.existsSync(this.nameArchivo)) {
                const data = await fsPromises.readFile(`./${this.nameArchivo}`, 'utf-8')
                const dataJson = JSON.parse(data)
                console.log(dataJson)
            } else {
                console.log('Archivo no existe', [])
            }
            } catch (e) {
                throw new Error(`Ataje el error: ${e}`)
            }
    }

    async save(title, price, thumbnail){
        let id;
        try {
        if (!fs.existsSync(this.nameArchivo)) {
            id = 1
            const SaveData = {id, title, price, thumbnail}
            await fsPromises.appendFile(`./${this.nameArchivo}`, JSON.stringify([SaveData], null, '\t'))
            console.log(`Producto ${title} guardado`)
        } else {
            const data = await fsPromises.readFile(`./${this.nameArchivo}`, 'utf-8')
            const dataJson = JSON.parse(data)
            id = dataJson.length + 1

            const SaveData = [
            ...dataJson,
            {
                id,
                title,
                price,
                thumbnail
            }
            ]

            await fsPromises.writeFile(`./${this.nameArchivo}`, JSON.stringify(SaveData, null, '\t'))
            console.log(`Producto ${title} guardado`)
        }
        } catch (e) {
            throw new Error(`Ataje el error: ${e}`)
        }
    }

    async delete(){
        try {
            await fsPromises.unlink(`./${this.nameArchivo}`)
            } catch (e) {
                throw new Error(`Ataje el error: ${e}`)
            }
    }
}

const test = new Archivo('productos')
test.save('Producto 1', 12.00, 'imagen1.jpg')
    .then(() => test.save('Producto 2', 34.00, 'imagen2.jpg'))
    .then(() => test.save('Producto 3', 56.00, 'imagen3.jpg'))
    .then(() => test.read())
    .then(() => test.delete())