import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'practice', component: PracticeComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
