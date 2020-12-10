import chalk, { Chalk } from 'chalk';
import logSymbols from 'log-symbols';
import moment from 'moment';

class Logger {
	private chalkClass: Chalk = chalk.bold;
	private file_name: string;
	public constructor(file_name: string) {
		this.file_name = file_name;
	}
	private log(color: string, ...messages: string[]): string {
		const msg: string = `[${chalk.bold(
			moment().format('h:mm:ss a')
		)}]: ${this.chalkClass[color](messages.join(' '))} ${chalk.dim.grey(
			'@',
			this.file_name
		)}`;
		console.log(msg);
		return msg;
	}
	public success(...messages: string[]): string {
		return this.log('green', logSymbols.success, ...messages);
	}
	public info(...messages: string[]): string {
		return this.log('blue', logSymbols.info, ...messages);
	}
	public error(...messages: string[]): string {
		return this.log('red', logSymbols.error, ...messages);
	}
	public warn(...messages: string[]): string {
		return this.log('yellow', logSymbols.warning, ...messages);
	}
}

export { Logger };
