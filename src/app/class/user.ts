export class User{


constructor(
        public name: string,
        public login:string,
        public bio: string,
        public location: string,
        public followers: number,
        public following: number,
        public public_repos: number,
        public created_at: Date,
        public avatar_url:string,
        public html_url : string

){}

}