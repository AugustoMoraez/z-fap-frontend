
const menuOptions =[
	{
		rule:"colaborador",
		rotas:[
			{
			title:"Meu-perfil",
			subrotas:[
			"Meu-usuario",
			"Desempenho-avaliativo"
			]
			}
		]
	},
	{
		rule:"gestor",
		rotas:[
			{
			title:"Gestão",
			subrotas:[
			"Meu-setor",
			"Avaliação-de-colaborador"
			]
			}
		]	
	},
	{
		rule:"adm",
		rotas:[
			{
			title:"Administração-ZFAP",
			subrotas:[
			"Setores",
			"Pessoas",
			"Solicitação-de-registro"
			]
			}
		]
	}


]
export type dataMenuOption = {
    rule: string;
    rotas: {
        title: string;
        subrotas: string[];
    }[];
}[]

export const getMenuOptions =  (permissions:string[]):dataMenuOption => {
	const permissionsArrayLowercase = permissions.join().toLowerCase().split(",")
	let ListPermissions= [menuOptions[0]]
	if(permissionsArrayLowercase.includes("gestor")){
		ListPermissions.push(menuOptions[1])
	}
	if(permissionsArrayLowercase.includes("adm")){
		ListPermissions.push(menuOptions[2])
	}
	console.log({getOptions:ListPermissions})
	
    return ListPermissions;
    
}


