import axios from "axios";
import { Grid } from "@material-ui/core";

import { store } from "../../redux/store";
import { Search } from './../../components/Search';
import { PropsCheck, prodouctType } from "../../types";
import Product from './../../components/Product';

export default function index({ data }: PropsCheck): JSX.Element {

    return (
        <main>
            <Search />
            <section>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Grid container spacing={2} >
                        {data.length > 0 ?
                            data.map((item: prodouctType) => (<Product key={item.id} data={item} />))
                            : <p>
                                محصولی با این مشخصات یافت نشد
                            </p>
                        }

                    </Grid>
                </Grid>
            </section>
        </main>
    )
}

export async function getServerSideProps({ query }: any) {

    const { baseUrl } = store.getState();

    let data: any = []

    try {

        const res = await axios.get(query.name || query.rating ? `${baseUrl}/search?name=${encodeURIComponent(query.name)}&rating=${query.rating}` : `${baseUrl}/prodouct/`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })

        data = await res.data


    } catch (error) {
        data = []
    }

    return {
        props: { data },
    }
}