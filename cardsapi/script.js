// globels vars
const row=document.getElementById("row")
// search btn
const searchBtn=()=>{
  const inputeFiled=document.getElementById("inpute-field");
  const inputeValue=parseInt(inputeFiled.value);
  if(isNaN(inputeValue)|| inputeValue==''|| inputeValue<0){
    const erro=document.getElementById("erro")
    erro.innerText="Please Enter Any Number"
    inputeFiled.value=''
    const row=document.getElementById("row")
    // clear div
    row.innerHTML=""
  }
  else{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputeValue}`)
    .then(res=>res.json())
    .then(data=>displayData(data.cards))
    inputeFiled.value=''
    const erro=document.getElementById("erro")
    erro.innerText=''
  }
  // clear div
  row.innerHTML=""
};

const displayData=(cardList)=>{
  for(const card of cardList){
    console.log(card);
    const div=document.createElement("div")
    div.className="col-lg-4"
    div.innerHTML=`
    <img src="${card.image}"
    <p>${card.code}</p>
    `
    row.appendChild(div)
  }
}