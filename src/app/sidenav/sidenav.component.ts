import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

//     let arrow = document.querySelectorAll(".arrow");
//     for (var i = 0; i < arrow.length; i++) {
//       arrow[i].addEventListener("click", (e)=>{
//      let arrowParent = e.target.parentElement.parentElement;
//      arrowParent.classList.toggle("showMenu");
//       });
//     }

//     let sidebar = document.querySelector(".sidebar");
//     let sidebarBtn = document.querySelector(".bx-menu");
//     console.log(sidebarBtn);
//     sidebarBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("close");

//   });
  }
