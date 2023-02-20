import { Component} from '@angular/core';
import { format, parseISO } from 'date-fns';
import { NavparamService } from '../navparam.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{
  // Variables for date-time
  dateValue = format(new Date(), "yyyy-MM-dd");
  formattedString = '';
  date: string;
  
  // Variables for data transfer
  data: any;

  constructor(
    private navParamService: NavparamService
  ) { 
    this.setToday();

    // Assigning data to result from getNavData
    this.data = this.navParamService.getNavData()
  }

  // Formats the formatting string to display date as d MM yyyy
  setToday(){
    this.formattedString = format(parseISO(format(new Date(), "yyyy-MM-dd")), "d MMM yyyy");
  }

  // Displays selected Date
  dateChanged(value){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), "d MMM yyyy");
  }
}

