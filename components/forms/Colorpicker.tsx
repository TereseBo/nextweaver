import './colorpicker.scss'
import { Colorinput } from '@/components/forms/Colorinput'
import { logger } from '@/functions/logger'

export function ColorPicker({ }) {
    return (
        <form id='colorpick-form'>
            <div className='form-content-container'>
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
                            <Colorinput id="current-color" label="" clickhandler={logger} />
                        </div>
                        <div className="color-box" >
                            <h3>Previous <br />colors</h3>
                            <div id="previous-colors">
                                <div className="previous-color">
                                    <h5>Warp</h5>
                                    <Colorinput id="warp" label="Warp" clickhandler={logger} />
                                    <Colorinput id="weft" label="Weft" clickhandler={logger} />
                                </div>
                                <div className="previous-color">
                                    <h5>Weft</h5>
                                    <Colorinput id="warp" label="Warp" clickhandler={logger} />
                                    <Colorinput id="weft" label="Weft" clickhandler={logger} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}
