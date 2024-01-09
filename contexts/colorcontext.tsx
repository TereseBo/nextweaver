//dependencies
import { createContext, FC, useState } from 'react';

//exports
export const ColorContext = createContext<ColorContextType | null>(null)

export function ColorProvider({children}: {children:React.ReactElement}) {
    const [currentColor, setCurrentColor]=useState<color>('#000000')

    return(
        <ColorContext.Provider value={{currentColor,setCurrentColor}}>
            {children}
        </ColorContext.Provider>
    )
}


/* export const ColorProvider: FC<{children: React.ReactElement}> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState<color>('#000000')

  if (!Array.isArray(children)) {
    return (
      <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
        {children}
      </ColorContext.Provider>
    );
  } else {
    return (
      <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
        {[children]}
      </ColorContext.Provider>
    );
  }
} */