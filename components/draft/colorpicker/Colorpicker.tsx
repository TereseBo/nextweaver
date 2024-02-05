import './colorpicker.scss'

import { useContext } from 'react'

import { Colorinput } from '@/components/zSharedComponents/Colorinput'
import { ColorContext } from '@/contexts/colorcontext'
import { WeaveContext } from '@/contexts/weavecontext'

import { PreviousColor } from './Previouscolor'

export function ColorPicker({ }) {
    const { currentColor, setCurrentColor }: ColorContextType = useContext(ColorContext) as ColorContextType
    const { weftColors, warpColors } = useContext(WeaveContext) as WeaveContextType
   
    function updateCurrentColor(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) {
        let target = e.target as HTMLInputElement
        const value = target.value
        console.log(target)
        console.log(value)

        setCurrentColor(value)
    }
//TODO:Add function to replace a color in warp/ weft on change of exisiting color
    return (
        <div className='form-container'>
            <form id='colorpick-form' >
                <div>
                    <p>
                        Pick a color and click <br />
                        to add warp/weft/ tie up.
                    </p>
                </div>
                <div>
                    <div className='color-container'>
                        <div className="color-box">
                            <h3>Current <br />color</h3>
                            <Colorinput id="current-color" label="" value={currentColor} changehandler={updateCurrentColor} clickhandler={undefined} />
                        </div>
                        <div className="color-box" >
                            <h3>Previous <br />colors</h3>
                            <div id="previous-colors">
                                <PreviousColor header='Warp' clickhandler={updateCurrentColor} changehandler={updateCurrentColor} content={warpColors}/>
                                <PreviousColor header='Weft' clickhandler={updateCurrentColor} changehandler={updateCurrentColor} content={weftColors}/>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}
