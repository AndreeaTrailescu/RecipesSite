import React, { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { getRecipes } from '../actions/recipes';

const Paginate = ({ page }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.recipes);

    useEffect(() => {
        if(page) dispatch(getRecipes(page));
    }, [page]);

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1} 
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem { ...item } component={Link} to={`/recipes?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;