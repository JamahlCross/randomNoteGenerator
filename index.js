function rollNote(){
    const numofNote = document.getElementById("numofNote").value
    const noteResult = document.getElementById("noteResult")
    const noteImages = document.getElementById("noteImages")
    const values = []
    const images = []
    
    for ( let i = 0; i < numofNote; i++){
        const value = Math.floor(Math.random() * 8) + 1
        values.push(value);
        images.push(`<img src="imgs/${value}.png">`)
    }
    noteResult.textContent = `note: ${values.join(', ')}`
    noteImages.innerHTML = images.join('')
}

