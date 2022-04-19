// const adminUser =["ada", "greta","vim ", "tim"];

function adminUser(req,res, next){
   if(req.query.user === "ada" ||req.query.user ==="greta"|| req.query.user ==="vim"|| req.query.user ==="tim" ){
   next()
   }else{
      res.send("No tienes los privilegios para ingresar")
   }
}
module.exports = adminUser;