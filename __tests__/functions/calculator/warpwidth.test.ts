import {calculateWarpWidth} from '@/functions/calculator/warpwidth'
import { WarpWidthData } from '@/types/warp'


describe('Basic calculations return expected result', () => {
 const testWarp:WarpWidthData={
    epc:5,
    ends:500,
    width:100
 }
 const testReed={
    dents:0,
    section:0,
    tph:0,
    tpd:0

 }
    it('Epc from reed', () => {
        

        const {warp, reed}=calculateWarpWidth('epc', 10,testWarp, testReed )
        expect(warp.width).toBe(50)

    })

})

