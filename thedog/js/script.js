const loadData=()=>{
  fetch("https://api.thedogapi.com/v1/breeds")
  .then(res=>res.json())
  .then(data=>displayDogs(data))
}

const displayDogs=(dogs)=>{
  const main=document.getElementById("main")
  const first10=dogs.slice(0,10)
  for(const dog of first10){
    console.log(dog);
    const div=document.createElement("div")
    div.className="col-lg-4"
    div.innerHTML=`
    <img width="300px" height="300px" src="${dog.image.url}">
    <h3>${dog.name}</h3>
  `
  main.appendChild(div)
  }
};
