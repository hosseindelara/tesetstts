import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs')

export default (req: NextApiRequest, res: NextApiResponse<{}>) => {

    if (req.method === 'POST') {
        
        fs.readFile('./pages/api/comments.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = req.body
            if (!dataForm.name) {
                res.status(400).json({ Message: 'نام اجباری است' })
            }
            else if (!dataForm.rating) {
                res.status(400).json({ Message: 'امتیاز محصول اجباری است' })
            }
            else if (!dataForm.description) {
                res.status(400).json({ Message: 'متن نظر  اجباری است' })
            }
            else {
                const finaly = [...JSON.parse(data), dataForm]

                fs.writeFile('./pages/api/comments.json', JSON.stringify(finaly), 'utf8', () => { })

                res.status(201).json({ Message: 'دیدگاه شما با موفقیت ثبت شد.' })
            }



        })
    }
    else {
        res.status(405).json({ Message: 'just request POST method' })
    }



}