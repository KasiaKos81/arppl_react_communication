import classes from './AppBody.module.css'
import Tabela from "./Tabela";

const AppBody = () => {
    return(
        <div className={classes.AppBody}>
            <Tabela/>

        </div>
    );
}

export default AppBody