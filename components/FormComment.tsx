import { useState } from "react";

import { Button, Grid, TextareaAutosize, TextField } from "@material-ui/core";
import axios from 'axios';
import { Rating } from "@material-ui/lab";
import { toast } from "react-toastify";

import { store } from "../redux/store";

import style from '../styles/Components/formComment.module.scss'

type FormData = {
    name: string
    rating: number | null
    description: string
    prodouctid: number
}

type PropsCheck = {
    id: number
}

export const FormComment = ({ id }: PropsCheck): JSX.Element => {

    const { baseUrl } = store.getState();


    const [formData, setFormData] = useState<FormData>({
        name: '',
        rating: 0,
        description: '',
        prodouctid: id
    })



    const handelonCheng = (name: string, value: string): void => setFormData({ ...formData, [name]: value })

    const sendDataFrom = async () => {
        try {
            const res = await axios.post(`${baseUrl}/comments`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.data
            toast.success(data.Message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setFormData({
                name: '',
                rating: 0,
                description: '',
                prodouctid: id
            })

        } catch (error) {
            toast.error(error.response.data.Message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handelSubmit = (e: any): void => {
        e.preventDefault();
        if (!formData.name) {
            toast.error('لطفا نام و نا م خانوادگی خود را وارد کنید', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        else if (!formData.rating) {
            toast.error('لطفا امتیازی را وارد کنید', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        else if (!formData.description) {
            toast.error('لطفا نظر خود را وارد کنید', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        else {
            sendDataFrom()
        }


    }


    return (
        <form method='POST' onSubmit={handelSubmit} className={style.Form} >
            <Grid container >
                <Grid item xs={12} sm={12} lg={12} >
                    <TextField value={formData.name} name='name' onChange={(e) => handelonCheng('name', e.target.value)} className={style.boxnput} label="نام و نام خانوادگی" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} >
                    <p className={style.para} >امتیاز شما به این محصول</p>
                    <Rating
                        name="rating"
                        value={formData.rating}
                        style={{ direction: 'ltr' }}
                        onChange={(event: any, newValue: number | null): void => {
                            setFormData({ ...formData, rating: newValue })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} >
                    <TextareaAutosize value={formData.description} name='description' onChange={(e) => handelonCheng('description', e.target.value)} className={style.Textarea} rowsMin={6} placeholder="نظر شما درباره این محصول" />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} >
                    <Button type='submit' variant="contained" color="secondary">ارسال دیدگاه</Button>
                </Grid>

            </Grid>

        </form>
    )
}