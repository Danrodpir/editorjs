import { default as React } from 'react';
import ReactDOM from 'react-dom';
import { EventButton } from './eventButton';

export default class Button {
	static get toolbox() {
		return {
			title: 'Button',
			icon:
				'<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>',
		};
	}

	constructor({ data }) {
		this.data = {
			linkURL: data.linkURL || '',
			linkName: data.linkName || '',
			editing: data.editing,
		};
	}

	render() {
		const rootNode = document.createElement('div');

		const onDataChange = newData => (this.data = newData);

		ReactDOM.render(<EventButton onDataChange={onDataChange} data={this.data} />, rootNode);

		return rootNode;
	}

	save() {
		return this.data;
	}
}
