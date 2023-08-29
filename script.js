const people = [
    'Cynthia <3', 'Ana', 'Paty', 'Brenda'
  ];

  const assignRandomly = () => {
    const shuffledPeople = [...people].sort(() => Math.random() - 0.5);
    const halfLength = Math.ceil(shuffledPeople.length / 2);
    const box1People = shuffledPeople.slice(0, halfLength);
    const box2People = shuffledPeople.slice(halfLength);
    
    displayPeople(box1People, 'box1');
    displayPeople(box2People, 'box2');
  };

  const displayPeople = (peopleList, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    peopleList.forEach((person) => {
      const listItem = document.createElement('li');
      listItem.textContent = person;
      container.appendChild(listItem);
    });
  };