import './preferences.scss'
export function Preferences(){
    return (
        <div className="form-container">
            <form id="preferences-form" method="post">
                <h3 className="form-header">Loom information</h3>
                <div>
                    <label htmlFor="shafts">Number of shafts</label>
                    <input type="number" name="shafts" id="shafts" placeholder=" 4" />
                </div>
                <div>
                    <label htmlFor="thredles">Number of thredles</label>
                    <input type="number" name="thredles" id="thredles" placeholder=" 4"/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
    }