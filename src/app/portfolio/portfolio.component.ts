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
    image: 'assets/img/projects/join.png', 
    title: 'Join', 
    languages: 'JavaScript | HTML | CSS | GIT', 
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    linkLiveTest: '',
    linkGitHub: '' 
  },
  {
    image: 'assets/img/projects/sharkie.png', 
    title: 'Sharkie', 
    languages: 'JavaScript | HTML | CSS', 
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison to fight against the wale boss.',
    linkLiveTest: '',
    linkGitHub: ''  
  },
  {
    image: 'assets/img/projects/pokedex.png', 
    title: 'Pokédex', 
    languages: 'JavaScript | HTML | CSS | Api', 
    description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    linkLiveTest: '',
    linkGitHub: '' 
  },
  // {
  //   image: 'assets/img/projects/sakura.png', 
  //   title: 'Sakura Ramen', 
  //   languages: 'HTML | CSS', 
  //   description: 'A restaurant homepage.',
  //   linkLiveTest: '',
  //   linkGitHub: ''  
  // },
  // {
  //   image: 'assets/img/projects/onlineshop.png', 
  //   title: 'Onlineshop', 
  //   languages: 'JavaScript | HTML | CSS', 
  //   description: 'An onlineshop example for a food delivery service.',
  //   linkLiveTest: '',
  //   linkGitHub: ''  
  // }
  ]
  ngOnInit(): void {
    
  }
}
