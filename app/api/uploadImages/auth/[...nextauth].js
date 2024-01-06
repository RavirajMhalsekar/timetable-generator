import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github" ;
export const authOptions={
    providers:[
        GithubProvider({
            clientId:'60771a6f26329e0e28f2',
            clientSecret:'d3cc4eccdd0c6a68bdd9904e577d57cd8ce4160d'
        })
    ]
} 
export default NextAuth(authOptions);