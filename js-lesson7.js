const SEX_FEMALE = 'female';
const SEX_MALE = 'male';
const DETAILED_USERS_DATA = [{
    name: 'Wiktoria',
    lastName: 'Donald',
    sex: SEX_FEMALE,
    height: 170,
    weight: 70,
  },
  {
    name: 'Kimberly',
    lastName: 'Coffey',
    sex: SEX_FEMALE,
    height: 160,
    weight: 55,
  },
  {
    name: 'Ben',
    lastName: 'Swift',
    sex: SEX_MALE,
    height: 180,
    weight: 80,
  },
  {
    name: 'Dylan',
    lastName: 'Barlow',
    sex: SEX_MALE,
    height: 170,
    weight: 75,
  },
  {
    name: 'Max',
    lastName: 'Bowen',
    sex: SEX_MALE,
    height: 190,
    weight: 90,
  },
  {
    name: 'Sam',
    lastName: 'Frost',
    sex: SEX_MALE,
    height: 200,
    weight: 110,
  },
];
// helpers
const getUserBmiParams = (user) => ({
  weight: user.weight,
  height: user.height,
});

const compareUserSex = (sex) => (user) => user.sex === sex;

const calculateBmi = (user) => user.weight / Math.pow(user.height / 100, 2);

// DOM helpers
const mapUserDataForTable = (userData) => ({
  name: userData.name,
  lastName: userData.lastName,
  sex: userData.sex,
  bmi: calculateBmi(userData)
});

const createRowCell = (value) => {
  const rowElem = document.createElement('div');
  rowElem.classList.add('row__cell');
  rowElem.textContent = value;

  return rowElem;
};

const createTableRow = (userTableData) => {
  const rowElem = document.createElement('div');
  rowElem.classList.add('row');
  const dataValues = Object.values(userTableData);

  dataValues.forEach((value) => {
    const rowCellElem = createRowCell(value);

    rowElem.appendChild(rowCellElem);
  });

  return rowElem;
};

// actions
const usersTableData = DETAILED_USERS_DATA.map(mapUserDataForTable);

const renderUserData = (users) => {
  const rowListElem = document.querySelector('#rows');
  const rowElems = users.map(createTableRow);

  rowListElem.innerHTML = '';
  rowElems.forEach((rowElem) => {
    rowListElem.appendChild(rowElem);
  });
};

renderUserData(usersTableData);

const searchElem = document.querySelector('#search');
console.log('searchElem', searchElem)

searchElem.addEventListener('input', (event) => {
  const searchValue = event.target.value;
  const filteredUsers = usersTableData.filter((userData) => userData.name.startsWith(searchValue));

  renderUserData(filteredUsers);
});

const formElem = document.querySelector('#user-form');

formElem.addEventListener('submit', (event) => {
  event.preventDefault();

  usersTableData.push({
    name: formElem.name.value,
    lastName: formElem.lastName.value,
    sex: formElem.sex.value,
    bmi: calculateBmi({
      weight: formElem.weight.value,
      height: formElem.height.value
    })
  });

  renderUserData(usersTableData);
});