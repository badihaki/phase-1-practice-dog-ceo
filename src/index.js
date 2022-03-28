console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', init);

function init(){
    // fetch imgURL and parse it back as json
    // add image elements to the DOM FOREACH image in the array we get back
    fetchDogImages();
    // fetch breedURL, and do the same as ^^^
    // but add the breeds to the <ul> in index.html
    fetchDogBreeds();
}

function fetchDogImages() {
    fetch(imgUrl).then(respone => respone.json()).then((data) => {
        // console.log(data.message);
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            imageContainer.appendChild(img);
        });
        /*
        const imageContainer = document.getElementById('dog-image-container');
        for(const url of data.message){
            const img = document.createElement('img');
            img.src = url;
            imageContainer.appendChild(img);
        }
        */
    });
}

function fetchDogBreeds(){
    fetch(breedUrl).then(response => response.json()).then(data => {
        // the list I can append my changes to
        const list = document.querySelector('ul#dog-breeds');
        // ^^^

        for(const breed in data.message){
            const listItem = document.createElement('li');
            listItem.innerText = breed;
            listItem.className = 'breed';
            list.appendChild(listItem);
        }
        
        const dogList = document.getElementsByClassName('breed')
        for(let i = 0; i < dogList.length; i++){
            dogList[i].addEventListener('click', changeBreedFontColor);
        }

        // define individual lists for dog types
        // there's gotta be a way to simplyfy this into it's own function
        const aDogs = [];
        const bDogs = [];
        const cDogs = [];
        const dDogs = [];
        
        // sort the different breeds into the lists by first letter
        for(breed in data.message){
            switch(breed[0]){
                case 'a':
                    aDogs.push(breed);
                    break;
                case 'b':
                    bDogs.push(breed);
                    break;
                case 'c':
                    cDogs.push(breed);
                    break;
                case 'd':
                    dDogs.push(breed);
                    break;
            }
        }

        // lets add an event listener to this dropdown bar
        const dropdown = document.getElementById('breed-dropdown');
        // when defining the event listener, we create an anonymous funct
        // to have access to other variables within this scope
        dropdown.addEventListener('change', (event)=>{
            // when we first change we want to clear the list of dog breeds
            for(const element of document.querySelectorAll('.breed'))
            {
                element.remove();
            }
            // then we want to display the items in the array as the new list items
            switch(event.target.value){
                case 'a':
                    console.log('a dogs');
                    for(i = 0; i < aDogs.length; i++){
                        console.log(aDogs[i]);
                        const listItem = document.createElement('li');
                        listItem.innerText = aDogs[i];
                        listItem.className = 'breed';
                        list.appendChild(listItem);
                    }
                    break;
                case 'b':
                    console.log('b dogs');
                    for(i = 0; i < bDogs.length; i++){
                        console.log(bDogs[i]);
                        const listItem = document.createElement('li');
                        listItem.innerText = bDogs[i];
                        listItem.className = 'breed';
                        list.appendChild(listItem);
                    }
                    break;
                case 'c':
                    console.log('c dogs');
                    for(i = 0; i < cDogs.length; i++){
                        console.log(cDogs[i]);
                        const listItem = document.createElement('li');
                        listItem.innerText = cDogs[i];
                        listItem.className = 'breed';
                        list.appendChild(listItem);
                    }
                    break;
                case 'd':
                    console.log('d dogs');
                    for(i = 0; i < dDogs.length; i++){
                        console.log(dDogs[i]);
                        const listItem = document.createElement('li');
                        listItem.innerText = dDogs[i];
                        listItem.className = 'breed';
                        list.appendChild(listItem);
                    }
                    break;
            }
        });
    });

}

function changeBreedFontColor(event){
    if(event.target.style.color != 'red'){
        event.target.style.color = 'red';
    }
    else{
        event.target.style.color = 'black';
    }
}