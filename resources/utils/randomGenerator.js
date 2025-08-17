function generateTableName() {
  const data = [
    'test7213821381',
    'test12332131',
    'testing3312',
    'test262233',
    'test7274213',
    'testing132112',
    'testtest',
    'test3443',
    'test442',
    'testing323213',
  ];

  

  const randomdata = data[Math.floor(Math.random() * data.length)];
  return `${randomdata}`;
}


export default generateTableName;
