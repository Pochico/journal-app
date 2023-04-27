import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({title, body, id, date, imageUrls = []}) => {

    const newTitle = useMemo(() => {
        return title.length > 20 ? `${title.substring(0, 20)}...` : title;
    });

    const newBody = useMemo(() => {
        return body.length > 35 ? `${body.substring(0, 35)}...` : body;
    });

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    }

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container direction='column'>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
