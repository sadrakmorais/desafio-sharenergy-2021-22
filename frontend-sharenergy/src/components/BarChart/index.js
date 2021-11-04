import React, { useState } from 'react';
import { Bar } from 'react-chartjs-3';
import { ContainerInput, ContainerGraph } from './style';
import dadosUsina from '../../json/dadosUsina';

const BarChart = () => {
	const [chosen, setChosen] = useState('Tensão');
	const temposUsina = dadosUsina.map((i) => i.tempo_h);
	let graphVariable,
		graphColor,
		graphBorderColor = '';

	const handleChosen = (e) => {
		setChosen(e.target.value);
	};

	switch (chosen) {
		case 'Temperatura':
			graphVariable = dadosUsina.map((i) => i.temperatura_C);
			graphColor = 'rgba(255, 99, 132, 0.5)';
			graphBorderColor = 'rgba(255, 99, 132, 1)';
			break;

		case 'Potência':
			graphVariable = dadosUsina.map((i) => i.potencia_kW);
			graphColor = 'rgba(54, 162, 235, 0.5)';
			graphBorderColor = 'rgba(54, 162, 235, 1)';
			break;

		case 'Corrente':
			graphVariable = dadosUsina.map((i) => i.corrente_A);
			graphColor = 'rgba(255, 206, 86, 0.5)';
			graphBorderColor = 'rgba(255, 206, 86, 1)';
			break;

		case 'Tensão':
			graphVariable = dadosUsina.map((i) => i.tensao_V);
			graphColor = 'rgba(75, 192, 192, 0.5)';
			graphBorderColor = 'rgba(75, 192, 192, 1)';
			break;

		default:
			graphVariable = dadosUsina.map((i) => i.tensao_V);
			graphColor = 'rgba(75, 192, 192, 0.5)';
			graphBorderColor = 'rgba(75, 192, 192, 1)';
	}

	const parseHours = (decimalHours) => {
		let [hours, percent] = String(decimalHours).split('.');

		if (hours.length === 1) {
			hours = `0${hours}`;
		}

		if (!percent) {
			return `${hours}:00h`;
		}

		if (percent.length !== 2) {
			percent = percent.slice(0, 2);
		}

		const minutes = String(Math.floor((Number(percent) * 60) / 100));

		return minutes.length === 1 ? `${hours}:0${minutes}h` : `${hours}:${minutes}h`;
	};

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '10px',
			}}>
			<ContainerInput>
				<ul>
					<li>
						<input
							onChange={handleChosen}
							type='radio'
							id='tensao'
							name='variable'
							value='Tensão'
						/>
						<label htmlFor='tensao'>Tensão</label>
					</li>

					<li>
						<input
							onChange={handleChosen}
							type='radio'
							id='corrente'
							name='variable'
							value='Corrente'
						/>
						<label htmlFor='corrente'>Corrente</label>
					</li>
					<li>
						<input
							onChange={handleChosen}
							type='radio'
							id='potencia'
							name='variable'
							value='Potência'
						/>
						<label htmlFor='potencia'>Potência</label>
					</li>
					<li>
						<input
							onChange={handleChosen}
							type='radio'
							id='temperatura'
							name='variable'
							value='Temperatura'
						/>
						<label htmlFor='temperatura'>Temperatura</label>
					</li>
				</ul>
			</ContainerInput>
			<ContainerGraph>
				<Bar
					data={{
						labels: temposUsina.map((e) => parseHours(e)),
						datasets: [
							{
								label: chosen,
								data: graphVariable,
								backgroundColor: graphColor,
								borderColor: graphBorderColor,
								borderWidth: 1,
							},
						],
					}}
					width={1200}
					options={{
						maintainAspectRatio: false,
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
								},
							],
						},
					}}
				/>
			</ContainerGraph>
		</div>
	);
};

export default BarChart;
