

export const getLocalStorage = <T = unknown>(key:string) => {
    let dataJSON:string | null = localStorage.getItem(key);
    
    let data:T | null = dataJSON !== null ? JSON.parse(dataJSON) : null;
    
    return data;
   
};

export const setLocalStorage = (key:string,data:any) => {
    localStorage.setItem(key, JSON.stringify(data))
}