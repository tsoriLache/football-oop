
const handlePlayerSubmit = async (event)=>{
    event.preventDefault();
    const firstName=document.getElementById('first-name').value;
    const surname=document.getElementById('last-name').value;
    const salary=document.getElementById('salary').value;
    const birthday=document.getElementById('birthday').value;
    const strongLeg=document.getElementById('strong-leg').value;
    const position=document.getElementById('position').value;
    const celebration=document.getElementById('celebration-sentence').value;
    const res = await axios.post('http://localhost:3000/player', {data:[firstName,surname,salary,birthday,strongLeg,position,celebration]})
    console.log(res);
}

console.log(document.querySelector("#submit-btn")); 
//.addEventListener('click',handlePlayerSubmit);
