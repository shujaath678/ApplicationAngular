import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  questions: any;
  selectedQuestions : any;
  searchText : string;
  constructor(private authenticationService : AuthenticationService, public router: Router) { }

  ngOnInit() {
  }


  search(){
    if(this.questions == undefined){
      this.authenticationService.getQuestionsAsync().subscribe(response => {
        this.questions = response;
        this.search();
      }, error => {
        console.log('Error in fetching question',error);
      });
    }
    else{
      this.selectedQuestions = this.questions.questions.filter(item => 
        Object.keys(item).some(k => item[k] != null && 
        item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
        );
    }
  }

  detailedQuestion(id){
    this.router.navigate(['question', id]);
  }
}

