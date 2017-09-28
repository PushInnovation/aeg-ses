import * as ses from 'node-ses';
import * as BBPromise from 'bluebird';

/**
 * Sends an Amazon SES email
 */
export default class SES {

	private _client: any;

	/**
	 * Constructor
	 */
	constructor (awsKey: string, awsSecret: string, zone: string) {

		this._client = ses.createClient({key: awsKey, secret: awsSecret, amazon: zone});

	}

	/**
	 * Send an email
	 */
	public async send (to: string, from: string, subject: string, message: string): Promise<void> {

		const mailOptions = {
			to,
			from,
			subject,
			message
		};

		const sendEmail: any = BBPromise.promisify(this._client.sendEmail, {context: this._client});
		await sendEmail(mailOptions);

	}

}
