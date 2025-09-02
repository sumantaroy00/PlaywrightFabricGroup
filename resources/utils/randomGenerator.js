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

 function generateRegisterData() {
    const random = Math.floor(Math.random() * 100000);

    return {
        firstName: 'test',
        lastName: 'roy',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        phoneNumber: '1234567890',
        ssn: '111-22-3333',
        username: `user${random}`,   
        password: `pass@${random}`,
        confirm: `pass@${random}`
    };
}
export default {generateTableName,generateRegisterData};
