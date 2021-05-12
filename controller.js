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

//menambahkan data menggunakan method post
exports.tambahData = function (req, res) {
    const nis = req.body.nis
    const nama = req.body.nama
    const alasan = req.body.alasan
    const dari_tgl = req.body.dari_tgl
    const sampai_tgl = req.body.sampai_tgl
    const waktu = req.body.waktu
    const ais = req.body.ais
    const status = req.body.status
    const kelas = req.body.kelas
    const jurusan = req.body.jurusan
    const masuk = req.body.masuk

    connection.query("INSERT INTO absen_siswa (nis, nama, alasan, dari_tanggal, sampai_tanggal, waktu_submit, ais, status, kelas, jurusan, masuk) values(?,?,?,?,?,?,?,?,?,?,?)", [nis, nama, alasan, dari_tgl, sampai_tgl, waktu, ais, status, kelas, jurusan, masuk],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil menambahkan data", res)
        }
    }
    )
}
