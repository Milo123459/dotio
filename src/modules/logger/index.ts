import chalk, { Chalk } from 'chalk';
import logSymbols from 'log-symbols';
import moment from 'moment';
import { homedir } from 'os';

interface Options {
	absoloute?: boolean;
}

class Logger {
	private chalkClass: Chalk = chalk.bold;
	private options: Options;
	private file_name: string;
	public constructor(file_name: string, options?: Options) {
		this.file_name = file_name;
		this.options = options || { absoloute: false };
	}
	private log(color: string, ...messages: string[]): string {
		const msg: string = `[${chalk.bold(
			moment().format('h:mm:ss a')
		)}]: ${this.chalkClass[color](messages.join(' '))} ${chalk.dim.grey(
			'@',
			this.options.absoloute
				? this.file_name
				: this.file_name.replace(homedir(), '').slice(1)
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
