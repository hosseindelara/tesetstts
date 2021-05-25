import Rating from '@material-ui/lab/Rating';

import { comments } from '../types'

import style from '../styles/Components/comment.module.scss'

type PorpsCheck = {
    data: comments[] | [] | undefined
}

const Comment = ({ data }: PorpsCheck): JSX.Element => {
    return (
        <>
            {data && data.length > 0 ?
                data.map((item: comments, index: number) => (
                    <div key={index} className={style.box} >
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <Rating value={item.rating} readOnly style={{direction:'ltr'}} />
                    </div>
                ))
                : <h2>هیچ نظری ثبت نشده اولین نفر باشید!</h2>
            }
        </>
    )
}
export default Comment