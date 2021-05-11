'use strict'

const response = require('./res')
const connection = require('./koneksi')

exports.index = function(req, res){
    response.ok('aplikasi node rest telah berjalan', res)
}

//menampilkan semua data
exports.tampilsemuadata = function(req,res){
    connection.query('SELECT * FROM absen_siswa', function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}
exports.tampildataberdasarkanid = function(req,res){
    const id = req.params.id
    connection.query('SELECT * FROM absen_siswa where nis = ?', [id] , function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}
