import type { NextApiRequest, NextApiResponse } from 'next'
import { prodouctType } from '../../../types'
import prodouctlist from '../prodouctlist'


export default (req: NextApiRequest, res: NextApiResponse<prodouctType[] | { Message: String }>) => {

    if (req.method === 'GET') {

        res.status(200).json(prodouctlist)

    }
    else {
        res.status(405).json({ Message: 'just request GET method' })
    }


}