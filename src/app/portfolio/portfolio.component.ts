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
    linkLiveTest: 'https://join.schmidt-denise.de/templates/html/login.html',
    linkGitHub: 'https://github.com/Rickylee4388/JOIN-SOLO' 
  },
  {
    image: 'assets/img/projects/sharkie.png', 
    title: 'Sharkie', 
    languages: 'JavaScript | HTML | CSS', 
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison to fight against the wale boss.',
    linkLiveTest: 'https://sharkie.schmidt-denise.de/',
    linkGitHub: 'https://github.com/Rickylee4388/Sharkie.git'  
  },
  {
    image: 'assets/img/projects/pokedex.png', 
    title: 'Pokédex', 
    languages: 'JavaScript | HTML | CSS | Api', 
    description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    linkLiveTest: 'https://pokedex.schmidt-denise.de/',
    linkGitHub: 'https://github.com/Rickylee4388/Pokedex.git' 
  },
  ]


  /**
   * open external link in new tab
   * @param link external link
   */
  openLink(link: string){
    window.open(link, "_blank");
  }


  ngOnInit(): void {
    
  }
}
