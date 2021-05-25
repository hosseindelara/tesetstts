import type { NextApiRequest, NextApiResponse } from 'next'

import prodouctlist from './prodouctlist'
import { prodouctType } from '../../types/index'

export default (req: NextApiRequest, res: NextApiResponse<prodouctType[] | { Message: String }>) => {

    if (req.method === 'GET') {

        if (req.query.name) {

            const name: any = req.query.name

            const findProdouct = prodouctlist.filter((item: any) => {
                const regex = new RegExp(name)
                return item.name.match(regex)
            })

            if (req.query.rating) {

                const rating: any = req.query.rating

                const Findrating = findProdouct.filter(item => item.rating === parseInt(rating))

                res.status(200).json(Findrating)
            }
            else {

                res.status(200).json(findProdouct)
            }

        }
        else {
            const rating: any = req.query.rating

            const Findrating = prodouctlist.filter(item => item.rating === parseInt(rating))
           
            res.status(200).json(Findrating)
        }
    }
    else {
        res.status(405).json({ Message: 'just request GET method' })
    }


}