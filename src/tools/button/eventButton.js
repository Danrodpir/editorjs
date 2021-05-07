import { default as React } from 'react';

const DEFAULT_INITIAL_DATA = () => {
	return {
		events: [
			{
				button: 'Button',
				description: 'Description',
			},
		],
	};
};

export const EventButton = ({ onDataChange, data }) => {
	const [linkData, setLinkData] = React.useState(data.linkURL);
	const [textData, setTextData] = React.useState(data.linkName);
	const [editing, setEditing] = React.useState(data.editing);

	const handleChangeURL = event => {
		setLinkData(event.target.value);
	};

	const handleChangeName = event => {
		setTextData(event.target.value);
	};

	const saveData = () => {
		console.log(editing);
		setEditing(false);
		onDataChange({ linkURL: linkData, linkName: textData, editing: false });
	};

	return (
		<>
			{editing ? (
				<div className="dataButton">
					<input
						type="text"
						name="link"
						id="linkButton"
						placeholder="Enlace del boton"
						onChange={handleChangeURL}
					/>
					<br />
					<input
						type="text"
						name="name"
						id="nameButton"
						value={textData}
						placeholder="Nombre del boton"
						onChange={handleChangeName}
					/>
					<br />
					<button onClick={saveData}>Clickme!</button>
				</div>
			) : (
				<button onDoubleClick={() => setEditing(true)}>{textData}</button>
			)}
		</>
	);
};
