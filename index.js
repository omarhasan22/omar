fetch('https://t0202103069.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
    studentSelect = document.getElementById('Student');
    json.Sheet1.forEach(e => {
        var option = document.createElement('option')
        option.innerHTML = e["A"]
        studentSelect.appendChild(option);
    });

  })