import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  portfolioComponents=
  [
    {
    image: 'assets/img/JoinExample.png', 
    title: 'Join', 
    languages: 'JavaScript | HTML | CSS | GIT', 
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    linkLiveTest: '',
    linkGitHub: '' 
  },
  {
    image: 'assets/img/polloExample.png', 
    title: 'Sharkie', 
    languages: 'JavaScript | HTML | CSS', 
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison to fight against the wale boss.',
    linkLiveTest: '',
    linkGitHub: ''  
  },
  {
    image: 'assets/img/JoinExample.png', 
    title: 'Join', 
    languages: 'JavaScript | HTML | CSS | GIT', 
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    linkLiveTest: '',
    linkGitHub: '' 
  },
  {
    image: 'assets/img/polloExample.png', 
    title: 'Sharkie', 
    languages: 'JavaScript | HTML | CSS', 
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison to fight against the wale boss.',
    linkLiveTest: '',
    linkGitHub: ''  
  },
  {
    image: 'assets/img/polloExample.png', 
    title: 'Sharkie', 
    languages: 'JavaScript | HTML | CSS', 
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison to fight against the wale boss.',
    linkLiveTest: '',
    linkGitHub: ''  
  }
  ]
  ngOnInit(): void {
    
  }
}
