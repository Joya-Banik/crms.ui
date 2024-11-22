import { UserLogin } from "../dto/userlogin";

export default async function loginuser (user:UserLogin) {
    const request = {
        method :'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    }   
    const res = await fetch('http://localhost:2500/api/user', request);

    return await res.json();
}

