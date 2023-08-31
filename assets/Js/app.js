// =============================================header
$(window).scroll(function () {
  if ($(this).scrollTop() > 88) {
    $(".navbar").css('box-shadow','0 3px 2px -2px rgba(0, 0, 0, 0.2)');
    $(".navbar.header-nav").css('background-color','white');
  } else {
    $(".navbar").css('box-shadow','none');
    $(".navbar.header-nav").css('background-color','#FF3381');
  }
});


// ============================================logo slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:false,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          autoplay:true,
      },
      600:{
        items:3,
        nav:false,
        loop:true,
        autoplay:true,
    },
      1200:{
          items:4,
          nav:false,
          loop:true,
          autoplay:true,
      },
      1300:{
          items:6,
          nav:true,
          loop:false,
          autoplay:true,
      }
  }
})

// ============================================number of words in paragraph
// $(document).ready(function(){
//   //length in characters
// var maxLength = 150;
// var ellipsestext = "...";
// var moretext = "Read more";
// var lesstext = "Read less";
// $(".showReadMore").each(function(){
//   //get the text of paragraph or div
//   var myStr = $(this).text();
  
//  // check if it exceeds the maxLength limit
//   if($.trim(myStr).length > maxLength){
//       //get only limited string firts to show text on page load
//       var newStr = myStr.substring(0, maxLength);

//       //get remaining string         
// var removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
//       // now append the newStr + "..."+ hidden remaining string
//       var Newhtml = newStr + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="ReadMore">' + moretext + '</a></span>';

//       $(this).html(Newhtml);
      
//   }
// });
// $(".ReadMore").click(function(){
 
//   if($(this).hasClass("less")) {
//       $(this).removeClass("less");
//       $(this).html(moretext);
//   }
//    else {
//       $(this).addClass("less");
//       $(this).html(lesstext);
//   }
  
//   $(this).parent().prev().toggle();
//   $(this).prev().toggle();
//   return false;
// });
// })

// ==================================dropzone
class DropZone {
  constructor() {
    this.dropZone = $('.drop-zone');

    // Add/Remove .is-dragover when hover/leave
    this.dropZone.on('dragover dragenter', () => this.dropZone.addClass('is-dragover'));
    this.dropZone.on('dragleave dragend drop', () => this.dropZone.removeClass('is-dragover'));

    this.dropZone.on('change', this.onchange.bind(this));

    // TODO: .has-image has to be removed when remove all images
    // TODO: Generate uniq id and add to input.has-image and .preview
    //       in order to remove them both when click on .remove
  }

  // Hide input.receiver and insert the new one
  onchange(e) {
    this.dropZone.addClass('has-images');

    // Rename input.receiver => input.has-image
    const $receiver = $(e.target);
    $receiver.removeClass('receiver').addClass('has-image');

    // Add new .receiver
    $('<input type="file" class="receiver">').prependTo(this.dropZone);

    // Preview
    const files = $receiver[0].files;
    this.displayPreview(files);
  }

  displayPreview(files) {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.currentTarget.result;
        this.template(url).appendTo(this.dropZone);
      };
      reader.readAsDataURL(file);
    }
  }

  template(url) {
    return $(`
      <div class="preview">
        <div class="image">
          <img src="${url}">
        </div>
        <div class="details">
          <div class="remove">
            <span class="bi bi-trash3-fill text-white"></span>
          </div>
        </div>
      </div>
    `);
  }
}

new DropZone();
