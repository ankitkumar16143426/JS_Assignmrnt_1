    const addButton = document.getElementById('addButton');
    const inputBox = document.getElementById('inputBox');
    const outputDiv = document.getElementById('output');

    addButton.addEventListener('click', () => {
      const inputValue = inputBox.value.trim();

      if (inputValue !== '') {
        const pTag = document.createElement('p');
        pTag.textContent = inputValue;
        outputDiv.appendChild(pTag);
        inputBox.value = '';
      }
    });