const express = require ("express")
const router = express.Router()
const voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

  router.get('/voi/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log (id ) 
    const v1 = voitures.find(e => e.id === id )
     res.json(v1) ;
  });   

  router.delete('/supprimer/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    let voitures = array.filter(item => item.id !== id);
     res.json(voitures) ;
  });
  
  router.put('/modifier/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
  
    const index = voitures.findIndex(e => e.id === id);
    if (index !== -1) {
      voitures[index].name = name;
      res.json(voitures[index]);
    } else {
      res.status(404).json({ message: 'Voiture non trouvée' });
    }
  });
  


  module.exports = router