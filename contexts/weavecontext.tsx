//Context handling information and calculations between different parts (aka treadles, shafts, tieups) of the draft and calculates the weave.
//dependencies
import { createContext, useState } from 'react'


//exports
export const WeaveContext = createContext<WeaveContextType | null>(null)

export function WeaveProvider({ children }: { children: React.ReactElement | React.ReactElement[] }) {
  //States used in grid creation
  const [draftHeight, setDraftheight] = useState(50)
  const [draftWidth, setDraftwidth] = useState(30)
  const [shafts, setShafts] = useState(8)
  const [treadles, setTreadles] = useState(6)

  //Inital grids are empty, representing no color filled in 
 // const [weaveGrid, setWeaveGrid] = useState<grid>(new Array(draftHeight).fill(new Array(draftWidth).fill('', 0)))
  const [warpGrid, setWarpGrid] = useState<grid>(new Array(shafts).fill(new Array(draftWidth).fill('', 0)))
  const [treadleGrid, setTreadleGrid] = useState<grid>(new Array(draftHeight).fill(new Array(treadles).fill('', 0)))
  const [tieUpGrid, setTieUpGrid] = useState<grid>(new Array(shafts).fill(new Array(treadles).fill('', 0)))

  //For tracking color sequence in the warp
  const [warpingSequence, setWarpingSequence] = useState([])
  //For tracking which shaft to tread
  const [sleySequence, setSleySequence] = useState([])
//TODO:Make state use current on update

//useEffect(reCalculateWeave, [copyGrid, getWarpColor, getWarpedShaft, getWeftColor, isTiedUp, treadleGrid, updateState]);

  function resizeGrid(gridName: gridName, height: number = draftHeight, width: number = draftWidth) {
    let emptySubArray: string[] = new Array(width).fill('', 0)

    let gridCopy = copyGrid(gridName as gridName)

    gridCopy.length > height ? gridCopy.splice(height) : gridCopy.fill(JSON.parse(JSON.stringify(emptySubArray)), gridCopy.length, height)

    if (gridCopy[0].length < width) {
      gridCopy.forEach(subarray => {
        subarray.splice(width)
      });
    } else if (gridCopy[0].length > width) {
      gridCopy.forEach(subarray => {
        subarray.fill('', subarray.length, width)
      });
    }
    setDraftheight(height)
    setDraftwidth(width)
    updateState(gridName, gridCopy)

  }
  function copyGrid(gridName: gridName) {
    let gridCopy = []
    switch (gridName) {
      case 'warp':
        gridCopy = JSON.parse(JSON.stringify(warpGrid))
        break
      case 'treadle':
        gridCopy = JSON.parse(JSON.stringify(treadleGrid))
        break
      case 'tieup':
        gridCopy = JSON.parse(JSON.stringify(tieUpGrid))
        break
    }
    return gridCopy as grid
  }

  //Accepts the name and new value of a grid and updates this state accordingly
  function updateState(gridName: gridName, newValue: grid) {
    //Updates the named grid with the supplied value
    switch (gridName) {
      case 'warp':
        setWarpGrid(newValue)
        break
      case 'treadle':
        setTreadleGrid(newValue)
        break
      case 'tieup':
        setTieUpGrid(newValue)
        break
    }

  }

  //Changes content of grid-array depending on cell-id
  function updateCell(cellId: string, newColor: color) {
    //x and y specifies the x and y coordinates in the grid
    const [gridName, x, y] = cellId.split('-') as [gridName, number, number]

    let gridCopy = copyGrid(gridName)

    if (gridName == 'tieup') {
      newColor = '#000000'
    }
    //If warp, clear other cells in column.
    if (gridName == 'warp') {
      for (let i = 0; i < shafts; i++) {
        if (i != y) {
          gridCopy[i][x] = ''
        }
      }
    }
    //If weft, clear other cells in row.
    if (gridName == 'treadle') {
      for (let i = 0; i < treadles; i++) {
        if (i != x) {
          gridCopy[y][i] = ''
        }
      }
    }

    gridCopy[y][x] = gridCopy[y][x] == '' ? newColor : ''

    updateState(gridName, gridCopy)
    
  }

  return (

    <WeaveContext.Provider value={{ draftHeight, draftWidth, treadleGrid, warpGrid, tieUpGrid, updateCell, shafts }}> 
      {children}
    </WeaveContext.Provider>
  )
}

