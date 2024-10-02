
const menuOptions =[
	{
		rule:"Colaborador",
		rotas:[
			{
			title:"meu-perfil",
			subrotas:[
			"meu-usuario",
			"Desempenho-avaliativo"
			]
			}
		]
	},
	{
		rule:"Gestor",
		rotas:[
			{
			title:"gestão",
			subrotas:[
			"meu-setor",
			"avaliação-de-colaborador"
			]
			}
		]	
	},
	{
		rule:"ADM",
		rotas:[
			{
			title:"Administração-ZFAP",
			subrotas:[
			"Setores",
			"Pessoas",
			"Solicitação-de-regsitro"
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
	
	if(!permissions.includes("Gestor")){
		menuOptions.filter(item => item.rule ==="Gestor")
	}
	if(!permissions.includes("ADM")){
		menuOptions.filter(item => item.rule ==="ADM")
	}
	
    return menuOptions;
    
}


