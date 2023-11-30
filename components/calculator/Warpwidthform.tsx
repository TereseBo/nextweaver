import './warpwidthform.scss'

import { Formsection } from './Formsection'


export function Warpwidthform(){

    return(
        <form className="info-form">
            <label className="form-header">Warp width</label>


            <Formsection>
                <label>Reed:</label>
                <input type="number" id="heddle-dents" name="heddle" min="1" max="100" value="50"/>
                /
                <input type="number" id="heddle-spec" name="heddle" min="1" max="100" value="10"/> cm
            </Formsection>



            <Formsection>
                <label>Threding:</label>
                <input type="number" id="threads-heddle" name="tieup" min="1" max="10" value="1"/>

                <label htmlFor="threads-heddle">/heddle </label>
                <input type="number" id="threads-dent" name="tieup" min="1" max="10" value="2"/>
                <label htmlFor="threads-dent">/dent </label>
            </Formsection>



            <Formsection>
                <label>Ends/cm:</label>
                <label htmlFor="warp-sett">warp </label>
                <input type="number" id="warp-sett" name="warp-sett" min="1" max="100" value="10"/>
                <label htmlFor="weft-sett">weft </label>
                <input type="number" id="weft-sett" name="weft-sett" min="1" max="100" value="10"/>
            </Formsection>



            <Formsection>
                <label>Ends total:</label>
                <label htmlFor="threads">threads </label>
                <input type="number" id="threads" name="threads" min="1" max="2000" value="750" />
            </Formsection>



            <Formsection>
                <label>Weave width:</label>
                <input type="number" id="warp-width" name="warp" min="1" max="300" value="100"/>
                <label htmlFor="warp-width">cm </label>
            </Formsection>

        </form>
    )


}