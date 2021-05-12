'user strict'

module.exports = function(app){
    const jsonku = require('./controller')

    app.route('/')
    .get(jsonku.index)

    app.route('/tampil')
    .get(jsonku.tampilsemuadata)

    app.route('/tampil/:id')
    .get(jsonku.tampildataberdasarkanid)
    app.route('/tambah')
    .post(jsonku.tambahData)
}

    