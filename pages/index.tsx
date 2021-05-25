import axios from 'axios';

import Head from 'next/head';

import { store } from '../redux/store';
import { PropsCheck } from '../types';
import { Search } from '../components/Search';
import TabCategory from './../components/TabCategory';

export default function Home({ data }: PropsCheck): JSX.Element {
  return (
    <>
      <Head>
        <title>محصولات تست</title>
        <meta name="description" content="دسته بندی تست" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Search />
        <section>

          <TabCategory data={data} />
        </section>
      </main>



      <footer >
        <a
          href="https://github.com/hosseindelara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            hossein delara
          </span>
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {

  const { baseUrl } = store.getState();

  let data = []
  try {
    const res = await axios.get(`${baseUrl}/prodouct/`, {
      headers: {
        'Content-Type': 'application/json'
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