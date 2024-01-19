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
  const [weaveGrid, setWeaveGrid] = useState<grid>(new Array(draftHeight).fill(new Array(draftWidth).fill('', 0)))
  const [warpGrid, setWarpGrid] = useState<grid>(new Array(shafts).fill(new Array(draftWidth).fill('', 0)))
  const [treadleGrid, setTreadleGrid] = useState<grid>(new Array(draftHeight).fill(new Array(treadles).fill('', 0)))
  const [tieUpGrid, setTieUpGrid] = useState<grid>(new Array(shafts).fill(new Array(treadles).fill('', 0)))

  const [warpingSequence, setWarpingSequence] = useState([])
  const [sleySequence, setSleySequence] = useState([])


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
      case 'weave':
        gridCopy = JSON.parse(JSON.stringify(weaveGrid))
        break
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
  function updateState(gridName: gridName, newValue: grid) {
    //Updates the named grid with the supplied value
    switch (gridName) {
      case 'weave':
        setWeaveGrid(newValue)
        break
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
  function updateCell(cellId: string, newColor: color) {
    const [gridName, x, y] = cellId.split('-') as [gridName, number, number]

    let gridCopy = copyGrid(gridName)

    if (gridName == 'tieup') {
      newColor = '#000000'
    }
    //If warp, clear other cells in column.
    if (gridName == 'warp') {
      for (let i = 0; i < shafts; i++) {
        if (i != y) {
          gridCopy[x][i] = ''
        }
      }
    }
    //If weft, clear other cells in row.
    if (gridName == 'treadle') {
      for (let i = 0; i < treadles; i++) {
        if (i != x) {
          gridCopy[i][y] = ''
        }
      }
    }

    gridCopy[y][x] = gridCopy[y][x] == '' ? newColor : ''

    updateState(gridName, gridCopy)
  }
  function reCalculateWeave() {

  }

  //returns a set of the colors used in a grid 
  function getColors(gridCopy: grid) {
    let colorSequence: colorCollection = [];
    for (let i = 0; i < gridCopy.length; i++) {
      let colors = gridCopy[i].filter((color) => color != '')
      colorSequence = colorSequence.concat(colors)
    }
    const includedColors = new Set<color>(colorSequence);
    return includedColors;
  }

  return (

    <WeaveContext.Provider value={{ weaveGrid, treadleGrid, warpGrid, tieUpGrid, updateCell }}>
      {children}
    </WeaveContext.Provider>
  )
}

