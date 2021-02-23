import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetails } from "./Api";
import VS from "./vr.png";

const Mycard = ({match})=>{
    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick =(id)=>{
        getMatchDetails(id)
        .then((data)=>{console.log("Match Data",data)
        setDetail(data);
        handleOpen();
})
        .catch((error)=>console.log(error));
    };
    const GetMatchCard =() =>{
    return(
        <Card style={{marginTop:20}}>
            <CardContent>
                <Grid container justify="center" alignItems="center"   spacing={4}>
                    <Grid item>
                        <Typography variant="h6">{match["team-1"]}</Typography>
                    </Grid>
                    <Grid item>
                        <img src ={VS} width="130" alt="logo"/>
                     </Grid>
                    <Grid item>
                        <Typography variant="h6">{match["team-2"]}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container  justify="center">
                <Button  onClick={()=>{
                    handleClick(match.unique_id);
                }} 
                variant="contained" color="primary">
                    Show Details
                </Button>
                <Button variant="outlined" style={{marginLeft:15}}color="primary">
                    Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
            </CardActions>
        </Card>
        )
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }
    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialoge-title">{"Match Details..."}
            <DialogContentText id="alert-dialoge-description">
                <Typography>
                    {detail.stat}
                </Typography>
                <Typography>
                    Match <span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.matchStarted?"started":"still not started"}{""}</span>
                </Typography>
                <Typography>
                    Score <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                        {detail.score}</span>
                </Typography>
            </DialogContentText>
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
    return <Fragment>
        {GetMatchCard()}
        {getDialog()}
    </Fragment>
};
export default Mycard;
