import type { NextApiRequest, NextApiResponse } from 'next'
import prodouctlist from '../../prodouctlist'
import { prodouctType } from '../../../../types/index'

export default (req: NextApiRequest, res: NextApiResponse<prodouctType[] | { Message: String }>) => {

    if (req.method === 'GET') {
        if (req.query.id) {
            const id: any = req.query.id
            const find = prodouctlist.filter(item => item.categoryId === parseInt(id))
            if (find.length > 0) {

                res.status(200).json(find)
            }
            else {
                res.status(404).json({ Message: 'categoryId not Found' })
            }
        }

    }
    else {
        res.status(405).json({ Message: 'just request GET method' })
    }


}