const names = ['Ryan', 
'Ja', 
'Joseph', 
'Kristin', 
'Gabriel', 
'Liam',
 'Kate', 
 'Negash', 
 'Nick', 
 'Carly', 
 'Grace',
  'Sandeep', 
  'Kevin', 
  'Andres', 
  'Nikky']; // Add more names as needed

  const randomStudent = document.getElementById("random-stud")
  const randomButton = document.getElementById("stud-but")
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}



randomButton.addEventListener("click", function(event){
    event.preventDefault()
    const studName = document.createElement('h1')
    studName.textContent = getRandomName()
    randomStudent.appendChild(studName)
    setTimeout(() => {
     randomStudent.innerHTML = ''
    }, 3000)
})

