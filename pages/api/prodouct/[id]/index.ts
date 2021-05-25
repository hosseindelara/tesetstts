import type { NextApiRequest, NextApiResponse } from 'next'

import prodouctlist from '../../prodouctlist'
import { prodouctType } from '../../../../types/index'
import comments from '../../comments.json'

export default (req: NextApiRequest, res: NextApiResponse<prodouctType | { Message: String }>) => {
    
    if (req.method === 'GET') {

        if (req.query.id) {

            const id: any = req.query.id

            const find = prodouctlist.filter(item => item.id === parseInt(id))

            if (find.length > 0) {
                
                const comment = comments.filter(item => item.prodouctid === parseInt(id))
                
                res.status(200).json({ ...find[0], comment })
            }
            else {
                res.status(404).json({ Message: 'prodouctId not Found' })
            }
        }

    }
    else {
        res.status(405).json({ Message: 'just request GET method' })
    }


}