const Mcq=require('../models/mcq');
const Fill=require('../models/fill');
const Code = require('../models/code');

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

module.exports.home=async function(req,res){
    try{
        let mcqs=await Mcq.find({})
        .sort('-createdAt');
        for(let i=0;i<mcqs.length;i++)
        shuffle(mcqs[i].options);

        let fills=await Fill.find({})
        .sort('-createdAt');

        let codes=await Code.find({});
        
        return res.render('home',{
            mcqs:mcqs,
            fills:fills,
            codes:codes
        });

    }catch(err){
        console.log("error occured:",err);
        return;

    }
    
}