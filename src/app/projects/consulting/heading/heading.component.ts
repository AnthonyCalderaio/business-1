import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {

  callSomeFunction() {
    // alert('function called')
    // const callback = () => {
    //   if (url) {
    //     window.location.href = url;
    //   }
    // };
    // // Call the Google Ads conversion event
    // (window as any).gtag('event', 'conversion', {
    //   'send_to': 'AW-948994634/VGp4CLSU8uEZEMqEwsQD',
    //   'event_callback': callback
    // });
    // return false;


    /**
     * <!-- Event snippet for Contact conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-948994634/VGp4CLSU8uEZEMqEwsQD',
        'event_callback': callback
    });
    return false;
  }
  </script>
     */

  }
}
