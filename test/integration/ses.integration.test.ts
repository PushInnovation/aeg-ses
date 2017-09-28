import SES from '../../src/index';

const AWS_API_KEY = 'X';
const AWS_SECRET = 'X';

describe('ses', async () => {

	const client = new SES(
		AWS_API_KEY,
		AWS_SECRET,
		'https://email.us-west-2.amazonaws.com');

	it('should generate an email', async () => {

		await client.send('x', 'x', 'Test Email', 'This is a test');

	});

});
