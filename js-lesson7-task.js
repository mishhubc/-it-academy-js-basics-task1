/*
  1. Fix search bar. It should ignore lower and upper case, so when You search for "wiktoria" then it returns "wiktoria" aswell.
  2. Allow serch by name OR by last name.
  3. In a form, fix height and weight, so it would be possible to enter only numbers.
  4. Change sex field, so it can only offer "male" or "female" values (radio input).
  5. Next to search input, add two checkboxes.
    - only males startsWith
    - only females

    When checkbox is checked, then only users with given sex should be displayed.
    Always only one sex can be checked. 
*/

const searchBox = document.querySelector('#search');
console.log('searchElem', searchElem);

searchBox.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();

  const filteredUsers = usersTableData.filter(
    (userData) =>
    userData.name.toLowerCase().startsWith(searchValue) ||
    userData.lastName.toLowerCase().startsWith(searchValue)
  );

  renderUserData(filteredUsers);
});

const height = document.getElementsByName('height');
const weight = document.getElementsByName('weight');

const setAttributeNumber = (attr) =>
  attr.forEach((item) => item.setAttribute('type', 'number'));
setAttributeNumber(height);
setAttributeNumber(weight);

const male = document.getElementById('male');
const female = document.getElementById('female');

const filterGender = (gender) =>
  usersTableData.filter((usersData) => usersData.sex === gender);

const filtermale = (e) => {
  if (e.target.checked == true) {
    renderUserData(filterGender('male'));
  } else renderUserData(usersTableData);
};
const filterfemale = (e) => {
  if (e.target.checked == true) {
    renderUserData(filterGender('female'));
  } else renderUserData(usersTableData);
};

male.addEventListener('click', filtermale);
female.addEventListener('click', filterfemale);

// const formSex = document.querySelector('#sex-form');
// const formSexInput = document.querySelector('#sex-form [name="sex"]');

// const newinput = document.createElement('input');
// newinput.setAttribute("type", "radio");
// newinput.setAttribute("value", "female");
// newinput.setAttribute("name", "sex");
// newinput.innerHTML = formElem.sex.value;

// formSex.appendChild(newinput);