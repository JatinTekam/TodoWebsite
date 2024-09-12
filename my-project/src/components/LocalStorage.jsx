const myKey="dataKey";

export const GetData=()=>{

    const data=localStorage.getItem(myKey);
    if(!data) return [];
    return JSON.parse(data);
}

const SetData=(task)=>{
    return localStorage.setItem(myKey,JSON.stringify(task));
}

export default SetData;