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
                <div className={classes.Prawa}>
                    <div className={classes.TextPrawa}>
                        <p>
                            <button>Formularz</button>
                        </p>
                    </div>
                    <div className={classes.TextPrawa}>
                        <p>
                            <button>Lista</button>
                        </p>
                    </div>
                    <div className={classes.TextPrawa}>
                        <p>
                            <button>Home</button>
                        </p>
                    </div>


                </div>
            </div>
            <div>
            </div>
        </header>
    );
}
export default NavigationHeader;