import classes from "./NavigationHeader.module.css";

const NavigationHeader = () => {
    return (
        <header className={classes.AppHeader}>
            <div className={classes.PasekNawigacyjny}>
                <div className={classes.Lewa}>
                    <div className={classes.TextLewa}>
                        <p>ARPPL</p>
                    </div>
                </div>

            </div>
        </header>
    );
}
export default NavigationHeader;