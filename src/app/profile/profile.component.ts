import { Component, OnInit } from '@angular/core';
import { GitService } from '../services/git.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  userDetail;
  userRepos;
  

  constructor(private gitService: GitService) { 
    
  }

  ngOnInit() {
    
  }

  onUserSearch(){
    this.gitService.getUser(this.username)
    .subscribe((res)=>{
        this.userDetail = res.json();
      }
    );
    

    this.gitService.getRepos(this.username).subscribe(
      (res: Response) =>{
        this.userRepos = res.json();
      }
    );

  
  }



  

}
