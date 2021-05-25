import { useEffect, useState } from "react";

import { Grid, Tab, Tabs, Paper } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import axios from "axios";
import Router from 'next/router'
import Head from 'next/head'

import { store } from "../../../redux/store";
import { PropsProduct } from '../../../types';

import Comment from './../../../components/Comment';
import { FormComment } from './../../../components/FormComment';

import style from '../../../styles/Pages/product.module.scss'

export default function index({ data }: PropsProduct): JSX.Element {

    const [value, setValue] = useState(0);

    useEffect(() => {

        if (!data.name) {

            Router.push('/404');

        }
        return () => {

        }
    }, [])

    const handleChange = (e: React.ChangeEvent<{}>, Valuenumber: number): void => { setValue(Valuenumber) }

    return (
        <>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content={data.name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container>
                <Grid item xs={12} lg={12} >
                    <Paper className={style.Box} >
                        <Grid container >
                            <Grid item xs={12} sm={12} md={5} lg={5} >

                                <img src={data.photo} alt={data.name} width={400} height={400} loading='lazy' className='lazy' />
                            </Grid>
                            <Grid item xs={12} sm={12} md={7} lg={7} >
                                <h1>{data.name}</h1>
                                <span className={style.rating} >
                                    <Rating value={data.rating} readOnly />
                                    <small>({data.comment?.length})</small>
                                </span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example">
                        <Tab label="نقد و بررسی" style={{ fontFamily: 'IRANSans' }} />
                        <Tab label="دیدگاه کاربران" style={{ fontFamily: 'IRANSans' }} />

                    </Tabs>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper className={style.paperTab} >
                        {
                            value === 0 ?
                                <section>
                                    <p>{data.description}</p>
                                </section>
                                : <>
                                    <Comment data={data.comment} />
                                    <FormComment id={data.id} />
                                </>
                        }
                    </Paper>
                </Grid>
            </Grid >
        </>
    )
}
export async function getServerSideProps({ params }: any) {

    const { id } = params

    const { baseUrl } = store.getState();

    let data = {}
    try {
        const res = await axios.get(`${baseUrl}/prodouct/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await res.data


    } catch (error) {
        data = {}
    }



    return {
        props: { data },
    }
}