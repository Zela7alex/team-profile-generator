// Requiring Engineer constructor from Engineer.js file
const Engineer = require('../lib/Engineer')

// This test is pulling properties from Employee constructor
test('creating new Engineer', () => {
    const engineer = new Engineer('Maria', 1551, 'maria21@gmail.com', 'maria_codes21')

    //Github property added to object
    expect(engineer.github).toEqual(expect.any(String))
});