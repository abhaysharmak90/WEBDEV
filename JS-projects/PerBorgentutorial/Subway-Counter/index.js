let count = 0
function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
} 
function save(){
    let savedInfo = count + " - "
    let saveEl = document.getElementById("para")
    saveEl.textContent += savedInfo
    document.getElementById("count-el").textContent = 0
    count = 0

}
