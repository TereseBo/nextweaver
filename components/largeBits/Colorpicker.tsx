import { Colorinput } from '@/components/tinyBits/Colorinput'
import { logger } from '@/functions/logger'

export function ColorPicker({ }) {
    return (
        <div id="color-picker">
            <Colorinput id="current-color" label="Warp color" clickhandler={logger} />
        </div>
    )
}
