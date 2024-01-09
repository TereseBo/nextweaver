import './colorpicker.scss'

import { FC,useContext } from 'react'

import { Colorinput } from '@/components/zSharedComponents/Colorinput'
import { ColorContext } from '@/contexts/colorcontext'
import { logger } from '@/functions/logger'

export function ColorPicker({ }) {
    const { currentColor, setCurrentColor }: ColorContextType = useContext(ColorContext) as ColorContextType
    
    function updateCurrentColor(e: React.ChangeEvent<HTMLInputElement>|React.MouseEvent<HTMLInputElement>) {
        let target =e.target as HTMLInputElement
        const value= target.value
        console.log(value)
  
        setCurrentColor(value)
    }

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
                            <Colorinput id="current-color" label="" value={currentColor} changehandler={updateCurrentColor} clickhandler={undefined}/>
                        </div>
                        <div className="color-box" >
                            <h3>Previous <br />colors</h3>
                            <div id="previous-colors">
                                <div className="previous-color">
                                      {/* TODO: Extract previous colorbox and have it mapp from color array to be added in context */}
                                    <h5>Warp</h5>
                                    <Colorinput id="warp" label="Warp" value={'#000000'} clickhandler={updateCurrentColor} changehandler={updateCurrentColor}/>
                                    <Colorinput id="weft" label="Weft"  value={'#000000'} clickhandler={updateCurrentColor} changehandler={updateCurrentColor}/>
                                </div>
                                <div className="previous-color">
                                    <h5>Weft</h5>
                                    <Colorinput id="warp" label="Warp"  value={'#000000'} clickhandler={updateCurrentColor} changehandler={updateCurrentColor}/>
                                    <Colorinput id="weft" label="Weft"  value={'#000000'} clickhandler={updateCurrentColor}  changehandler={updateCurrentColor}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}
