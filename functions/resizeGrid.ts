export function resizeGrid(oldGrid: grid | undefined, newHeight: number, newWidth: number) {

  if (!oldGrid) { return oldGrid}

  let emptySubArray: string[] = new Array(newWidth).fill('', 0)
  let gridCopy: grid = JSON.parse(JSON.stringify(oldGrid))

  gridCopy.length > newHeight ? gridCopy.splice(newHeight) : gridCopy.fill(JSON.parse(JSON.stringify(emptySubArray)), gridCopy.length, newHeight)

  if (gridCopy[0].length < newWidth) {
    gridCopy.forEach(row => {
      row.splice(newWidth)
    });
  } else if (gridCopy[0].length > newWidth) {
    gridCopy.forEach(row => {
      row.fill('', row.length, newWidth)
    });
  }

  return JSON.parse(JSON.stringify(oldGrid))
}