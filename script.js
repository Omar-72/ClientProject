$('.search').click(function(){
  let userInput= $(".userInput").val();
  
  let marvel=`https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=${userInput}&apikey=c9512378b8a090dd5fb31de7497feca4&hash=b5212d3f189542ab087a3c895770cf5b`
  
  console.log(marvel);
  
  fetch(marvel)
  
  
  .then(function(response){
    return response.json(); 
  })
  
  .then(function(data){
    
    data.results
  }); 
});

