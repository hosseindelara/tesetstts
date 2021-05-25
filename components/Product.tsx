import Link from 'next/link'

import { Grid, Paper } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { Skeleton } from '@material-ui/lab';

import { prodouctType } from '../types'
import style from '../styles/Components/product.module.scss'

type propsData = {
    data?: prodouctType
}

export default function Product({ data }: propsData): JSX.Element {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}  >

            {
                data ? <Link href={`/prodouct/${data.id}`}><a><Paper elevation={3} className={style.root}>
                    <h3 className={style.header} >{data.name}</h3>
                    <img src={data.categoryPhoto} width={150} height={150} loading='lazy' className='lazy' alt={data.name} />
                    <Rating value={data.rating} readOnly />
                </Paper></a></Link>
                    : <Paper className={style.root}>
                        <Skeleton animation="wave" height={20} width="80%" />
                        <Skeleton animation="wave" variant="rect" height={200} width='100%' />
                        <Skeleton animation="wave" height={30} width="50%" />
                    </Paper>
            }


        </Grid>
    )
}