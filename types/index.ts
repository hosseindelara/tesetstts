export type comments = {
    name: string,
    rating: number,
    description: string,
    prodouctid: number
}

export type prodouctType = {
    name: string
    id: number
    categoryPhoto: string
    photo: string
    description: string
    rating: number
    categoryId: number
    comment?: comments[] | []
}

export type PropsCheck = {
    data: prodouctType[] | []
}
export type PropsProduct = {
    data: prodouctType
}