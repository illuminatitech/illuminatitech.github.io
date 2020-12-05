$(document).ready(function(){$('.owl-carousel').owlCarousel({items:1,loop:!0,dots:!1,nav:!0,navText:['<i class="far arrowreward"> < </i>','<i class="far  arrowreward"> > </i>'],navClass:['owl-prev','owl-next'],autoplay:!0,autoplayTimeout:3000,autoplayHoverPause:!0,});var owlrewards=$('.owl-content-rewards');$('#owlrewardsNext').click(function(){owlrewards.trigger('next.owl.carousel',[300])})
$('#owlrewardsPrev').click(function(){owlrewards.trigger('prev.owl.carousel',[300])})
$('.rowbtn-contact').hide()
$('input,textarea').focus(function(){$(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','')}).blur(function(){$(this).attr('placeholder',$(this).data('placeholder'))})
$('#movetop').on('click',function(){$('html, body').animate({scrollTop:0},'fast')})
$('.block-option-mb').mouseover(function(){$('.block-support-menu-mb').addClass('block-option-tranform-mb');$('.block-support-mb').addClass('block-support-extends-mb')})
$('.block-option-mb').mouseout(function(){$('.block-support-menu-mb').removeClass('block-option-tranform-mb');$('.block-support-mb').removeClass('block-support-extends-mb')})})
function hideContactNav(){$('.text-contact').hide()
$('.rowbtn-contact').show()}
function showContactNav(){$('.text-contact').show()
$('.rowbtn-contact').hide()}
function hideBlockOption(){$('.block-option').addClass('block-option-tranform')
$('.block-support').hide()
$('.box-support').show()}
function showBlockOption(){$('.block-option').removeClass('block-option-tranform')
$('.block-support').show()
$('.box-support').hide()}
function hoverLine(){$('.box-support-imgline').addClass('box-support-imgline-hover')}
function unhoverLine(){$('.box-support-imgline').removeClass('box-support-imgline-hover')}
function hoverLive(){$('.box-support-imglive').addClass('box-support-imglive-hover')}
function unhoverLive(){$('.box-support-imglive').removeClass('box-support-imglive-hover')}
function modalRegister(){$('.modal-body-register').show()
$('.logomodal-register-hi').show()}