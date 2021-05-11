const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost:84',
    user: 'root',
    password: '',
    database: 'absen_siswa'
})
conn.connect((err) => {
    if(conn) throw err
    console.log('mysql terkoneksi')
})

module.exports = conn