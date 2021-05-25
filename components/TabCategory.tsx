import { useState } from "react";

import axios from "axios";
import {  Grid, Tab, Tabs } from "@material-ui/core";

import { store } from '../redux/store';
import { prodouctType, PropsCheck } from "../types";
import Product from './Product';



export default function TabCategory({ data }: PropsCheck): JSX.Element {

    const [value, setValue] = useState(0);
    const { baseUrl } = store.getState();

    const [DataFetching, setDataFetching] = useState<prodouctType[]>(data)


    const getDataCategory = async (id: number) => {
        try {
            const res = await axios.get(id > 0 ? `${baseUrl}/category/${id}` : `${baseUrl}/prodouct/`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.data
            setDataFetching(data)

        } catch (error) {

        }
    }


    const handleChange = (e: React.ChangeEvent<{}>, Valuenumber: number): void => {
        setValue(Valuenumber)
        setDataFetching([])
        getDataCategory(Valuenumber)


    }


    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} >

                <Tabs
                    style={{ marginBottom: '15px', marginTop: '10px' }}
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example">
                    <Tab label="همه محصولات" style={{ fontFamily: 'IRANSans' }} />
                    <Tab label="موبایل ها" style={{ fontFamily: 'IRANSans' }} />
                    <Tab label="لپ تاپ ها" style={{ fontFamily: 'IRANSans' }} />
                </Tabs>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Grid container spacing={2} >
                    {DataFetching.length>0 ?
                        DataFetching.map(item => (<Product key={item.id} data={item} />))
                        : <>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </>
                    }

                </Grid>
            </Grid>
        </Grid>
    )
}

