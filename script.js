const people = [
    "Cynthia <3", "Ana", "Paty", "Brenda"
]

const assignRandomly = () => {
    const shufflePeople = [...people].sort(()=> Math.random() - 0.5);
    const halfLength = Math.ceil(shufflePeople.length / 2);
    const box1People = shufflePeople.slice(0, halfLength);
    const box2People = shufflePeople.slice(halfLength);

    displayPeople(box1People, "box1")
    displayPeople(box2People, "box2")
}

const displayPeople = (peopleList, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    peopleList.forEach((person)=>{
        const listItem = document.createElement('li');
        listItem.textContent = person;
        container.appendChild(listItem)
    })
}