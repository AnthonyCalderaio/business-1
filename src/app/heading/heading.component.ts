import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  // ngAfterViewChecked(): void {
  //   setTimeout(() => {
  //     // const iframe: any = document.getElementById("myIframe");
  //     if(true){
  //       // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //       // iframeDocument.body.style.display = "flex";
  //       // iframeDocument.body.style.justifyContent = "center";
  //       // iframeDocument.body.style.alignItems = "center"; 
  //       // alert('done')
  //     }
      
  //   }, 4000);
   
  // }

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
