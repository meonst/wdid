"use client"
import { CellData } from "@/app/ui/definitions"
import { useState } from "react";
import Timer from "@/app/ui/cell/timer";


export default function Cell({ cellData }: { cellData: CellData }) {

	const [active, setActive] = useState(false);
	const [overallTime, setOverallTime] = useState(new Date())
	const sessionTime: Date = new Date();


	function toggleTimer() {
		setActive(!active)
	}

	function updateTimer() {
		if (active) {
			setOverallTime(new Date(overallTime.getTime() + 1000))
		}
		else return;
	}
	setInterval(updateTimer, 1000)
	const color: string = cellData.color;
	return (
		<div className="" style={{ backgroundColor: color }} onClick={toggleTimer}>
			<div>
				{cellData.name}
			</div>

			<div>{active}</div>
			<div>
				{overallTime.getTime()}
			</div>
		</div>)
}