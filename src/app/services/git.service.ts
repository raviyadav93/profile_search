import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class  GitService{
    private clientId = 'c99b12d78f54295bdaf1';
    private secret = '173cce860621f48f66725e1c41cfce80ed7e79f3';

       constructor(private http: Http){
        

    }

    getUser(username:string){
        return this.http.get('http://api.github.com/users/'+username+'?client_id='+this.clientId+'&client_secret='+this.secret);
    }

    getRepos(username: string){
        return this.http.get('http://api.github.com/users/' + username+'/repos');

    }
}