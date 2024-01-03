import './itemssection.scss'

import { Formsection } from './Formsection'

export function Itemssection(params:{nrofitems:number }){
    const {nrofitems}= params
    const bob= new Array(nrofitems)



    return (
        <div id="items-container">
            {bob.map((item, index)=>
                (
                    <div key= {index} className="item-data" id="item-box">
                    <h6>Item</h6>
    
                    <Formsection>
                        <label htmlFor="length">Item length:</label>
                        <input type="number" data-unit="cm" id="length" name="length" min="1" max="10000" value="100"/> cm
                    </Formsection>
                    <Formsection>
                        <label htmlFor="firsthem">Fringe / hem:</label>
                        <input type="number" data-unit="cm" id="firsthem" name="firsthem" min="1" max="99" value="10"/>
                            cm
                    </Formsection>
                    <Formsection>
                        <label htmlFor="secondhem">Fringe / hem:</label>
                        <input type="number" data-unit="cm" id="secondhem" name="secondhem" min="1" max="99" value="10"/>
                            cm
                    </Formsection>
                </div>
                )

            )}

        </div>
    )
}