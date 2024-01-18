//Context handling information and calculations between different parts (aka treadles, shafts, tieups) of the draft and calculates the weave.
//dependencies
import { createContext, 
  '@babel/core
  'react';

//exports
export const WeaveContext = createContext<WeaveContextType | null>(null)

export function WeaveProvider({ children }: { children: React.ReactElement | React.ReactElement[] }) {

  const [draftHeight, setDraftheight] = useState(50)
  const [draftWidth, setDraftwidth] = useState(30)
  const [shafts, setShafts] = useState(8)
  const [treadles, setTreadles] = useState(6)

  //Inital grids are empty, representing no color filled in 
  const [weaveGrid, setWeaveGrid] = useState<grid>(new Array(draftHeight).fill(new Array(draftWidth).fill('', 0)))
  const [warpGrid, setWarpGrid] = useState<grid>(new Array(shafts).fill(new Array(draftWidth).fill('', 0)))
  const [treadleGrid, setTreadleGrid] = useState<grid>(new Array(draftHeight).fill(new Array(treadles).fill('', 0)))
  const [tieUpGrid, setTieUpGrid] = useState<grid>(new Array(shafts).fill(new Array(treadles).fill('', 0)))


  function resizeGrid(gridName: string, height: number, width: number) {

    let gridCopy = copyGrid(gridName as gridName)

    gridCopy.length > height ? gridCopy.splice(height) : gridCopy.fill([], gridCopy.length, height)

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
    return gridCopy
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
    const [gridName, x, y] = cellId.split('-')
    
    let gridCopy = copyGrid(gridName as gridName)
    
    if (gridName == 'tieup') {
      newColor = '#000000'
    }
    
    gridCopy[y][x] = gridCopy[y][x] == '' ? newColor : ''
    
    updateState(gridName as gridName, gridCopy)
  }
  function reCalculateWeave() {

  }


  return (

    <WeaveContext.Provider value={{ weaveGrid, treadleGrid, warpGrid, tieUpGrid, updateCell }}>
      {children}
    </WeaveContext.Provider>
  )
}

