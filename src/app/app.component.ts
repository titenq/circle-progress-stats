import { Component, OnInit } from '@angular/core';

import { users } from './users';

interface CountUpOptions {
  startVal?: number; // number to start at (0)
  decimalPlaces?: number; // number of decimal places (0)
  duration?: number; // animation duration in seconds (2)
  useGrouping?: boolean; // example: 1,000 vs 1000 (true)
  useEasing?: boolean; // ease animation (true)
  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
  separator?: string; // grouping separator (',')
  decimal?: string; // decimal ('.')
  // easingFn: easing function for animation (easeOutExpo)
  easingFn?: (t: number, b: number, c: number, d: number) => number;
  formattingFn?: (n: number) => string; // this function formats result
  prefix?: string; // text prepended to result
  suffix?: string; // text appended to result
  numerals?: string[]; // numeral glyph substitution
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersList = users;
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  activeUsersPerCent: number;
  inactiveUsersPerCent: number;
  maleUsers: number;
  femaleUsers: number;
  maleUsersPerCent: number;
  femaleUsersPerCent: number;
  more45Years: number;
  less45Years: number;
  more45YearsPerCent: number;
  less45YearsPerCent: number;

  countUpOptions: CountUpOptions = {
    startVal: 0,
    duration: 2,
    separator: '.',
    decimal: ',',
    decimalPlaces: 0
  };

  getTotalUsers() {
    this.totalUsers = this.usersList.length;
  }

  getActiveUsers() {
    let numActiveUsers = [];
    let len = this.usersList.length;
    for (let i = 0; i < len; i++) {
      if (this.usersList[i].isActive === true) {
        numActiveUsers.push(this.usersList[i]);
      }
    }
    this.activeUsers = numActiveUsers.length;
  }

  getInactiveUsers() {
    let numInactiveUsers = [];
    let len = this.usersList.length;
    for (let i = 0; i < len; i++) {
      if (this.usersList[i].isActive === false) {
        numInactiveUsers.push(this.usersList[i]);
      }
    }
    this.inactiveUsers = numInactiveUsers.length;
  }

  getMaleUsers() {
    let numMaleUsers = [];
    let len = this.usersList.length;
    for (let i = 0; i < len; i++) {
      if (this.usersList[i].gender === 'Male') {
        numMaleUsers.push(this.usersList[i]);
      }
    }
    this.maleUsers = numMaleUsers.length;
  }

  getFemaleUsers() {
    let numFemaleUsers = [];
    let len = this.usersList.length;
    for (let i = 0; i < len; i++) {
      if (this.usersList[i].gender === 'Female') {
        numFemaleUsers.push(this.usersList[i]);
      }
    }
    this.femaleUsers = numFemaleUsers.length;
  }

  getUsersByAge() {
    let usersBirth = this.usersList.map(user => {
      return user.dateOfBirth;
    })
    
    let usersAge = usersBirth.map(birth => {
      return this.ageCalculator(birth);
    })

    let less45 = usersAge.filter(age => {
      return age < 45;
    })

    let more45 = usersAge.filter(age => {
      return age >= 45;
    })

    this.less45Years = less45.length;
    this.more45Years = more45.length;
  }

  perCentCalculator(numUsers: number, numTotal: number): number {
    return numUsers / numTotal * 100;
  }

  ageCalculator(dateOfBirth: string) {
    let datebirth = +new Date(dateOfBirth);
    return ~~((Date.now() - datebirth) / 31557600000);
  }

  ngOnInit(): void {
    this.getTotalUsers();
    this.getActiveUsers();
    this.getInactiveUsers();
    this.getMaleUsers();
    this.getFemaleUsers();
    this.getUsersByAge();
    this.activeUsersPerCent = this.perCentCalculator(this.activeUsers, this.totalUsers);
    this.inactiveUsersPerCent = this.perCentCalculator(this.inactiveUsers, this.totalUsers);
    this.maleUsersPerCent = this.perCentCalculator(this.maleUsers, this.totalUsers);
    this.femaleUsersPerCent = this.perCentCalculator(this.femaleUsers, this.totalUsers);
    this.less45YearsPerCent = this.perCentCalculator(this.less45Years, this.totalUsers);
    this.more45YearsPerCent = this.perCentCalculator(this.more45Years, this.totalUsers);
  }
}
