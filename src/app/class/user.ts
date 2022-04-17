export class User{

constructor(
    public avatar_url: string,
    public fname: string,
    public uname: string,
    public bio: string,
    public followers: number,
    public following: number,
    public public_repos: number,
    public created_at: Date

){}

}