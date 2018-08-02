import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class  GitService{
    private clientId = 'c99b12d78f54295bdaf1';
    private secret = '7dd1beddd29d489be56355c83ac413c7cf3ddf32';

       constructor(private http: Http){
        

    }

    getUser(username:string){
        return this.http.get('https://api.github.com/users/'+username+'?client_id='+this.clientId+'&client_secret='+this.secret);
    }

    getRepos(username: string){
        return this.http.get('https://api.github.com/users/' + username + '/repos' + '?client_id=' + this.clientId + '&client_secret=' + this.secret);

    }
}