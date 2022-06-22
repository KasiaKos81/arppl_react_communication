import classes from './Tabela.module.css'
import {Grid} from "@mui/material";

const Tabela = () => {
    return (
        <div className={classes.Tabela}>
            <Grid container className={classes.NaglowekTabeli}>
                <Grid item xs={1}>Id.</Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}>Usun</Grid>
                <Grid item xs={1}>Pokaz</Grid>
                <Grid item xs={1}>Edycja</Grid>
            </Grid>
            <Grid container className={classes.NaglowekOdstep}>

            </Grid>

        </div>
    )
}
export default Tabela;