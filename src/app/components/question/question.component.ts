import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authenticationService'; 

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  id: string;
  questionDetails: any;
  constructor(private route: ActivatedRoute, private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.getQuestionDetails(this.route.snapshot.params.id);
  }

  getQuestionDetails(id){
    this.authenticationService.getQuestionsAsync().subscribe(response => {
      this.questionDetails = response.questions.find(ques => ques.id == id);
    }, error => {
      console.log('Error in fetching question',error);
    });
  }

}
