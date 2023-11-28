import {Button, Input, FormControl, InputAdornment} from "@mui/material";
import {useState} from "react";

export default function SearchBar({search, changeHandler}) {

    return (
        <div style={{float: "right", paddingRight: "70px"}}>
            <FormControl fullWidth sx={{m: 2}} variant="standard">
                <Input
                    value={search}
                    onChange={changeHandler}
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">Search</InputAdornment>}
                />
            </FormControl>
        </div>
    )
}
