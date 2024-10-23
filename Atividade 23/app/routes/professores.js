module.exports = function(app){

    app.get('/informacao/professores', function(req,res){
        const sql = require ('mssql');
  
        const sqlConfig = {
           user: 'KAIQUE\\kaiqu',
           password: '',
           database: 'curso', 
           server: 'localhost\\SQLEXPRESS',
           driver: 'msnodesqlv8',
           options: {
            encrypt: false, 
            trustServerCertificate: true
            }
        }
   
       async function getProfessores() {
           try {
               const pool = await sql.connect(sqlConfig);
           
                const results = await pool.request().query('SELECT * from PROFESSORES')
           
                res.render('informacao/professores',{profs: results.recordset})
     
            } catch (err) {
                console.log(err)
           }
            
        }
       getProfessores();
    });
 }