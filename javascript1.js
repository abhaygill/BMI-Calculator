const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ht = parseInt(document.getElementById('height').value);

  const wt = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('results');
  if (ht === '' || ht < 0 || isNaN(ht)) {
    result.innerHTML = `<span style = "color : red">${ht}, This is not a valid height</span>`;
    return;
  } else if (wt === '' || wt < 0 || isNaN(wt)) {
    result.innerHTML = `<span style = "color : red">${wt}, This is not a valid weight</span>`;
    return;
  }
    const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
    let cat = '';
    let bmiColor = 'red';
    if (bmi < 18.6) {
      cat = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      cat = 'Normal Range';
      bmiColor = 'green';
    } else {
      cat = 'Overweight';
    }

    result.innerHTML = `<span>BMI is <span style="color: ${bmiColor}; font-weight: bold;">${bmi}</span> and you are in <span style="color: ${bmiColor}; font-weight: bold;">${cat}</span> category.</span>`;
});
