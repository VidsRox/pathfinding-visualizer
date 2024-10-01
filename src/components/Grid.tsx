import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({ 
    isVisualizationRunningRef, 
}: { 
    isVisualizationRunningRef: MutableRefObject<boolean> 
}) {
    const {grid} = usePathfinding();
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (row: number, col: number) => {
        if(isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(true);
        const newGrid  = createNewGrid(grid, row, col)
    }

    return (
        <div
            className={twMerge(
                //base classes
                "flex items-center flex-col justify-center border-sky-300",
                //control grid height
                `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
                    MAX_ROWS * 15
                }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                //controlling grid width
                `lg:w-[${MAX_COLS *17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
            )}
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((tile, tileIndex) => {
                        const {isEnd, isStart, isPath, isTraversed, isWall} = tile;
                        return (
                            <Tile 
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isEnd={isEnd}
                                isStart={isStart}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                isWall={isWall}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}