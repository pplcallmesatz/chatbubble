//(function(){
//    chatBubble = function() {
//        alert("");
//    }
//    
//}());



(function($) {

    $.fn.chatBubble = function() {

//        params = $.extend( {minlength: 0, maxlength: 99999}, params);

    }
})(jQuery);

//Function to check wether the content has scrollbar
(function($) {
    $.fn.chatBubble = function() {
//        return this.get(0).scrollHeight > this.height();
        $("<style type='text/css'>.cf-popup * { background-attachment: scroll    !important; background-color: transparent   !important;"+ "background-image: none   !important; background-position: 0 0   !important; background-repeat: repeat   !important; "+
            "border-color: currentcolor   !important; border-style: none   !important; border-width: medium   !important; "+
            "bottom: auto   !important; clear: none   !important; clip: auto   !important; color: inherit   !important; "+
            "counter-increment: none   !important; counter-reset: none   !important; cursor: auto   !important; "+
            "direction: inherit   !important; display: inline   !important; float: none   !important; font-style: inherit !important;"+ "font-variant: normal   !important; height: auto   !important; left: auto   !important; letter-spacing: normal   !important;"+ "line-height: inherit   !important; list-style-type: inherit   !important; list-style-position: outside   !important;"+
            "list-style-image: none   !important; max-height: none   !important; max-width: none   !important; min-height: 0   !important;"+ "min-width: 0   !important; outline: 0   !important; overflow: visible   !important; position: static   !important; "+
            " right: auto   !important; table-layout: auto   !important; text-align: inherit   !important; "+
            "text-decoration: inherit   !important; text-indent: 0  !important; text-transform: none  !important; "+
            "text-rendering: auto  !important; top: auto  !important; unicode-bidi: normal  !important; "+
            "vertical-align: baseline  !important; visibility: inherit  !important; white-space: normal  !important; "+
            "width: auto  !important; word-spacing: normal  !important; z-index: auto  !important;"+
            "-webkit-background-origin: padding  !important; -moz-background-origin: padding  !important; "+
            "-ms-background-origin: padding-box  !important; -o-background-origin: padding-box  !important;"+
            "background-origin: padding-box  !important; -webkit-background-clip: border  !important; "+
            "-moz-background-clip: border  !important; background-clip: border-box  !important; -webkit-background-size: auto  !important;"+ "-moz-background-size: auto  !important; -o-background-size: auto  !important; background-size: auto  !important; "+
            "-moz-border-image: -moz--compass-list(none)  !important; -webkit-border-image: -owg--compass-list(none)  !important; "+
            "-webkit-border-image: -webkit--compass-list(none)  !important; -o-border-image: -o--compass-list(none)  !important; "+
            "border-image: none  !important;-webkit-border-radius: 0  !important;-moz-border-radius: 0  !important;"+
            "-ms-border-radius: 0  !important;-o-border-radius: 0  !important;border-radius: 0  !important;"+
            "-webkit-box-shadow: none  !important;-moz-box-shadow: none  !important;box-shadow: none  !important;"+
            "-webkit-box-sizing: content-box  !important;-moz-box-sizing: content-box  !important;box-sizing: content-box !important;"+ "column-count: auto  !important;column-gap: normal  !important;column-rule: medium none #000  !important;column-width: auto "+ "!important;column-span: 1  !important;-webkit-text-fill-color: currentcolor  !important;-webkit-tap-highlight-color:"+ "transparent  !important;-moz-tap-highlight-color: transparent  !important;-ms-tap-highlight-color: transparent  !important;"+
            "-o-tap-highlight-color: transparent  !important;font-feature-settings: normal  !important;overflow-x: visible "+ "!important;overflow-y: visible  !important;-webkit-hyphens: manual  !important;-moz-hyphens: manual  !important;"+
            "hyphens: manual  !important;-webkit-backface-visibility: visible  !important;-moz-backface-visibility: visible  !important;"+
            "-ms-backface-visibility: visible  !important;-o-backface-visibility: visible !important;backface-visibility: visible"+ "!important;text-shadow: none !important;-webkit-transition: all 0s ease !important;-webkit-transition-delay: 0s !important;"+
            "-moz-transition: all 0s ease 0s !important;-o-transition: all 0s ease 0s !important;"+
            "transition: all 0s ease 0s !important;word-break: normal !important;font-size: 11px !important;font-weight: 400 !important;"+
            "-webkit-font-smoothing: subpixel-antialiased !important;-moz-osx-font-smoothing: auto !important;margin: 0 !important;"+
            "padding: 0 !important;-webkit-user-select: none !important;-o-user-select: none !important;-moz-user-select: none !important;"+
            "-ms-user-select: none !important;user-select: none !important;} .cf-popup-container { font-family: 'Open Sans', sans-serif "+ "!important;font-size: 11px !important;position: fixed !important;z-index: 1000000 !important;line-height: 1 !important;"+
            "text-align: left !important; color: #000 !important; font-style: normal !important; font-weight: 400 !important; text-decoration:"+
            "none !important; list-style-type: disc !important; direction: ltr !important; -webkit-font-smoothing: subpixel-antialiased"+ "!important; -moz-font-smoothing: subpixel-antialiased !important; -o-font-smoothing: subpixel-antialiased !important;}"+
            ".cf-popup-chatbox {display: block !important;}.cf-popup-chatbox-container, .cf-popup-container {position: fixed"+ "!important;right: 24px !important;bottom: 30px !important;height: calc(100% - 20px - 30px) !important;max-height: 450px"+ "!important;}.cf-popup-chatbox-container {width: 320px;background: #fff!important;overflow: hidden!important;z-index:"+ "1!important;-webkit-border-radius: 5px!important;-moz-border-radius: 5px!important;-ms-border-radius: 5px!important;"+
            "-o-border-radius: 5px!important;border-radius: 5px!important;-webkit-box-shadow: 0 12px 24px 0 rgba(0,0,0,.15)!important;"+
            "-moz-box-shadow: 0 12px 24px 0 rgba(0,0,0,.15)!important;box-shadow: 0 12px 24px 0 rgba(0,0,0,.15)!important;}"+
            "/* Convertfox chat header */"+
            ".cf-popup-chatbox-header {position: relative!important;z-index: 5!important;display: block !important;}.cf-popup-chatbox"+
            "-header-container {border-bottom-width: 1px!important;border-bottom-style: solid!important;text-align: center!important;"+
            "height: 55px!important;padding-left: 10px!important;padding-right: 10px!important;overflow: hidden!important;position:"+
            "relative!important;border-color: #288ade !important;background-color: #298ee8 !important;}.cf-popup-chatbox-profile {"+
            "width: 36px !important;height: 36px !important;text-align: center!important;margin-left: 16px!important;margin-top:"+ "10px!important;float: left!important;}.cf-popup-chatbox-profile-img {width: 100% !important;height: auto  !important;"+
            "border-radius: 50%  !important;overflow: hidden  !important;	}"+
            ".cf-popup-chatbox-user-status {margin-top: 7px  !important;padding-left: 5px  !important;padding-right: 38px "+ "!important;position: absolute  !important;top: 0  !important;left: 65px !important;right: 0  !important;bottom: 0 "+ "!important;}.cf-popup-chatbox-user, .cf-popup-chatbox-status {overflow: hidden  !important;;text-overflow: ellipsis "+ "!important;;color: #fff  !important;white-space: nowrap;}.cf-popup-chatbox-user span {font-size: 12px !important;"+
            "line-height: 20px !important;letter-spacing: .2px !important;color: #ffffff  !important;-webkit-text-fill-color: #ffffff"+  "!important;font-weight: 600  !important;margin-left: 2px  !important;margin-right: 2px  !important;}.cf-popup-chatbox-"+
            "status {text-align: center  !important;font-size: 12px !important;text-align: center !important;line-height: 20px"+ "!important;color: #ffffff  !important;-webkit-text-fill-color: #ffffff  !important;opacity: .8 !important;}"+
            "+.cf-popup-chatbox-close {padding: 4px !important;position: absolute !important;right: 3px !important;top: 3px !important;"+
            "-webkit-border-radius: 2px  !important;-moz-border-radius: 2px  !important;-ms-border-radius: 2px  !important;"+
            "-o-border-radius: 2px  !important;border-radius: 4px  !important;overflow: hidden  !important;cursor: pointer  !important;}"+
            ".cf-popup-chatbox-close svg {height: 30px  !important;width: 30px  !important;fill: #fff  !important;fill-opacity: 1 "+ "!important;}.cf-popup-chatbox-close:hover svg {background-color: rgba(0,0,0,0.15)  !important;border-radius: 4px "+ "!important;}.cf-popup-inner-shadow {background-image: -owg-linear-gradient(-180deg,rgba(0,0,0,.09) 0,transparent 50%)"+ "!important;background-image: -webkit-linear-gradient(-180deg,rgba(0,0,0,.09) 0,transparent 50%) !important;background-image: "+
            "-moz-linear-gradient(-180deg,rgba(0,0,0,.09) 0,transparent 50%) !important;background-image: -o-linear"+
            "-gradient(-180deg,rgba(0,0,0,.09) 0,transparent 50%) !important;background-image: linear-gradient(-180deg,rgba(0,0,0,.09)"+ "0,transparent 50%) !important;height: 6px !important;display: block !important;position: absolute !important;left: 0"+ "!important;right: 0 !important;bottom: -6px !important;}"+
            "/* Convertfox chat body */"+
            ".cf-popup-chatbox-body {background: #fff !important;overflow: hidden !important;position: relative !important;z-index: 1"+ "!important;height: calc(100% - 56px) !important}/* Convertfox chat messages */.cf-popup-chatbox-body-messages {position: absolute"+ "!important;left: 0 !important;right: 0 !important;top: 0 !important;bottom:  56px !important;overflow: auto !important;padding-left:"+
            "15px !important;padding-right: 15px !important;background-color: #f5f8fb !important;}/* Convertfox chat box footer form */"+
            ".cf-popup-chatbox-body-form {background: #fff !important;height: 56px !important;position: absolute !important;left: 0"+ "!important;right: 0 !important;bottom: 0px !important;z-index: 7 !important;}.cf-popup-chatbox-body-form-textarea {resize: none"+
            "!important;position: absolute !important;top: 0 !important;left: 15px !important;bottom: 0 !important;right: 60px"+ "!important;width: calc(100% - 60px - 15px) !important;color: #4a4a66!important;font-size:  14px !important;line-height: 20px"+ "!important;letter-spacing: .15px !important;outline-style: none !important;border: 0px !important;padding: 19px 0 16px 0"+ "!important;}.cf-popup-chatbox-body-messages-send {position: absolute;right: 0;top: 0;left: calc(100% - 60px);text-align:"+ "center;bottom: 0;vertical-align: middle;padding-top: 12px;padding-left: 12px;padding-right: 12px;padding-bottom: 12px;}"+
            ".cf-popup-chatbox-body-messages-send svg {fill: #8cb1ce !important;	-webkit-transition: all linear 0.15s !important;"+
            "-moz-transition: all linear 0.15s !important;-o-transition: all linear 0.15s !important;transition: all linear 0.15s"+ "!important;cursor: pointer !important;}.cf-popup-chatbox-body-messages-send:hover svg {fill: #298ee8 !important;	}"+
            "/* Chat Bubble */.cf-popup-chatbubble {position: relative !important;margin-top: 15px !important;margin-bottom: 15px"+ "!important;}.cf-popup-chatbubble:before, .cf-popup-chatbubble:after {content: \"\" !important;clear: both !important;display:"+ "table !important;}.cf-popup-chatbubble-useragent {position: absolute !important;left: 0 !important;bottom: 0 !important;"+
            "width: 30px !important;height: 30px !important;}.cf-popup-chatbubble-useragent-profile {width: 100% !important;"+
            "height: auto !important;border-radius: 50% !important;overflow: hidden !important;}"+
            ".cf-popup-chatbubble-message-agent , .cf-popup-chatbubble-message-user {padding: 6px 13px 7px !important;width: "+
            "calc(100% - 45px - 20px) !important;border-radius: 15px !important;font-size: 12px !important; font-weight: 400"+ "!important;line-height: 17px !important;-webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.15) !important;-moz-box-shadow: 0 1px 2px"+
            "0 rgba(0,0,0,.15) !important;box-shadow: 0 1px 2px 0 rgba(0,0,0,.15) !important;text-align: justify !important;word-wrap:"+ "break-word !important;box-sizing: border-box !important;-webkit-box-sizing: border-box !important;-moz-box-sizing: border-box"+ "!important;}.cf-popup-chatbubble-message-agent  {background-color: #298ee8 !important;color: #fff !important;  float: left"+ "!important;margin-left: 40px !important;}.cf-popup-chatbubble-message-user {background-color: #fff !important;color: #333"+ "!important;  float: right !important;}.cf-popup-chatbubble-message-status {float: right !important;text-align: right"+ "!important;opacity: 0.35 !important;margin-top: 5px !important;width: calc(100% - 45px - 30px) !important;}"+
            "</style>").appendTo("head");

        $("<div class=\"cf-popuop\">"+
            "<div class=\"cf-popup-container\">"+
            "<div class=\"cf-popup-chatbox\">"+
            "<div class=\"cf-popup-chatbox-container\">"+
            "<div class=\"cf-popup-chatbox-header\">"+
            "<div class=\"cf-popup-chatbox-header-container\">"+
            "<div class=\"cf-popup-chatbox-profile\">"+
            "<img class=\"cf-popup-chatbox-profile-img\" src=\"https:\/\/avatars3.githubusercontent.com/u/14173227?v=3&s=460\">"+
            "</div>"+
            "<div class=\"cf-popup-chatbox-user-status\">"+
            "<div class=\"cf-popup-chatbox-user\">"+
            "<span class=\"cf-popup-chatbox-user-name\">Satheesh</span><span class=\"cf-popup-chatbox-user"+
            "description\">from</span><span class=\"cf-popup-chatbox-user-company\">Mallow Tech</span>"+
            "</div>"+
            "<div class=\"cf-popup-chatbox-status\">Support is online</div>"+
            "<div class=\"cf-popup-chatbox-close\"><svg version=\"1.1\" xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"12\""+
            "height=\"32\" viewBox=\"0 0 12 32\">"+
            "<path d=\"M11.25 10l0.75 0.75-5.25 5.25 5.25 5.25-0.75 0.75-5.25-5.25-5.25 5.25-0.75-0.75 5.25-5.25-5.25-5.25 0.75-0.75"+ "5.25 5.25z\""+
            "</path>"+
            "</svg></div>"+
            "</div>"+
            "<div class=\"cf-popup-inner-shadow\"></div>"+
            "</div>"+
            "</div>"+
            "<div class=\"cf-popup-chatbox-body\">"+
            "<div class=\"cf-popup-chatbox-body-messages\">"+
            "<div class=\"cf-popup-chatbubble\">"+
            "<div class=\"cf-popup-chatbubble-useragent\">"+
            "<img src=\"https:\/\/avatars3.githubusercontent.com/u/14173227?v=3&s=460\" class=\"cf-popup-chatbubble-useragent-"+
            "profile\">"+
            "</div>"+
            "<div class=\"cf-popup-chatbubble-message-agent\">My name is Satheesh Kumar S, Am came here to enquire about this"+
            "service.</div>"+
            "</div>"+
            "<div class=\"cf-popup-chatbubble\">"+
            "<div class=\"cf-popup-chatbubble-message-user\">My name is Satheesh Kumar S, Am came here to enquire about this"+
            "service.</div>"+
            "<div class=\"cf-popup-chatbubble-message-status\">last seen 1 min ago.</div>"+
            "</div>"+
            "<div class=\"cf-popup-chatbubble\">"+
            "<div class=\"cf-popup-chatbubble-useragent\">"+
            "<img src=\"https:\/\/avatars3.githubusercontent.com/u/14173227?v=3&s=460\" class=\"cf-popup-chatbubble-useragent-"+
            "profile\">"+
            "</div>"+
            "<div class=\"cf-popup-chatbubble-message-agent\">My name is Satheesh Kumar S, Am came here to enquire about this"+
            "service.</div>"+
            "</div>"+
            "<div class=\"cf-popup-chatbubble\">"+
            "<div class=\"cf-popup-chatbubble-message-user\">My name is Satheesh Kumar S, Am came here to enquire about this"+
            "service.</div>"+
            "<div class=\"cf-popup-chatbubble-message-status\">last seen 1 min ago.</div>"+
            "</div>"+
            "</div>"+
            "<div class=\"cf-popup-chatbox-body-form\">"+
            "<form>"+
            "<textarea rows=\"1\" placeholder=\"Compose your message...\" class=\"cf-popup-chatbox-body-form-textarea\"></textarea>"+
            "</form>"+
            "<div class=\"cf-popup-chatbox-body-messages-send\">"+
            "<svg version=\"1.1\" xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">"+
            "<path d=\"M0 17l28-15-7 28-7-7-5 7-1-10zM19.938 26.063l5-20.188-20.125 10.813 5.188 1.938 12-9.625-8 11z\"></path>"+
            "</svg></div>"+
            "</div>"+
            "</div>"+
            "</div>"+

            "</div>"+
            "</div>"+
            "</div>").appendTo(this);
    }
})(jQuery);


//chatBubble.prototype.initialize = function () {
// place code here to get started
//    alert('MyCompany.WebAccess.Plugin is running');
//};