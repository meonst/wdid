import { CellData } from "@/app/ui/definitions";
import Cell from "@/app/ui/cell/cell";
export default function Home() {

  const cell_1: CellData = {
    id: "cell_1",
    name: "cell_1",
    color: "#aaaaaa",
  }
  const cell_2: CellData = {
    id: "cell_2",
    name: "cell_2",
    color: "#ff00ff",
  }

  const cell_3: CellData = {
    id: "cell_3",
    name: "cell_3",
    color: "#aaccff",
  }

  const cells: CellData[] = [cell_1, cell_2, cell_3];

  return (
    <div className="flex">
      {cells.map(
        (cellData: CellData, index: number) => {
          return (
            <Cell cellData={cellData} key={index}></Cell>
          )
        })}
    </div>
  );
}
