
export type sector = {
    id:string,
	name: string,
	positions:string[]
    users:{
        id:string,
        name:string,
        email:string,
        permissions:string[],
    }[]
}
 