const sum = require('../sum');



beforeEach(() => {
	console.log("Before each test")
});

test('adds 1 + 2 to equal 3', () => {
  console.log("In test1")
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 4', () => {
  console.log("In test2")
  expect(sum(1, 2)).toBe(4);
});


afterEach(() => {
		console.log("After each test")
});



describe('Sample GET tests', () => {
 test('get home route GET /', async () => {
 const response = await request(server).get('/');
 expect(response.status).toEqual(200);
 expect(response.text).toContain('Hello World!');
 });
})