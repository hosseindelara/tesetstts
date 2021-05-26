import { useState } from 'react';

import { Grid, IconButton, InputBase, MenuItem, Select, } from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';


import style from '../styles/Components/search.module.scss'


export const Search: React.FC<{}> = () => {


    const rating = [1, 2, 3, 4, 5]

    const [ratingvalue, setratingvalue] = useState('')

    return (
        <Grid container justify="center" alignItems="center" >
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <form className={style.root} method='GET' action='/search' >
                    <InputBase
                        name='name'
                        className={style.input}
                        placeholder="جستجو درمیان محصولات"
                    />
                    <Select
                        name='rating'
                        value={ratingvalue}
                        onChange={(e: any): void => setratingvalue(e.target.value)}
                        className={style.select}
                    >
                        {
                            rating.map(item => (<MenuItem key={item.toString()} value={item}>{`کالاهای ${item} ستاره`}</MenuItem>))
                        }
                    </Select>
                    <IconButton type="submit"
                        className={style.iconButton}
                        aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </form>
            </Grid>
        </Grid >
    )
}