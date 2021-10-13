import React from 'react';
import { TextField, Grid, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword, half }) => (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField name={name}
                onChange={handleChange}
                variant="filled"
                required fullWidth
                label={label}
                autoFocus
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility style={{ fill:"black" }} /> : <VisibilityOff style={{ fill:"black" }} />}
                            </IconButton>
                        </InputAdornment>
                    ),
                } : null}
            />
        </Grid>
);

export default Input;
