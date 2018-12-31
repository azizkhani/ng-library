	$(function(){
		gridRefresh();
		formRefresh();
	});
	/*----Content-----*/
	function addWindowNameToList(id, topic, url) {
		if($("#window"+id).length>0)
			return;
		var li = $("<li>");
		var windowName = $("<div class='iframeName media media-right' windowId='" + id + "' id='window" + id + "'>");
		var windowNameBody =$("<div class='media-body'>");
		var windowNameHeading =$("<span style='cursor: pointer;' class='activeIframeName media-heading col-xs-9 text-right' windowId='" + id + "' id='windowName" + id + "' windowTitle='" + topic + "' windowUrl='" + url + "' onclick=\"loadDashboard(false);showWindowIframe('"+id+"')\"> ");
		$(windowNameHeading).text(topic);
		$(windowNameBody).append($(windowNameHeading))
		$(windowNameBody).append("<span style='cursor:pointer;' onclick=\"deleteWindowIframe('"+id+"')\" class='fa fa-lg col-xs-1 fa-times-circle text-lightred'></span>");
		$(windowNameBody).append("<span style='cursor: pointer;' onclick=\"toggleBookmark(" + id + ", '" + topic + "', '" + url + "');\" id='bookmark" + id + "' data-tooltip='tooltip' data-placement='bottom' data-original-title='افزودن به / حذف از منوهای منتخب' class='fa fa-lg text-orange col-xs-1'></span>");
		$(windowName).append($(windowNameBody));
		$(li).append($(windowName));
		$("#windowList").prepend($(li));
		$('#deleteAllWindowFrameButton').fadeIn();
		if(hasMenuInMyMenu(id))
			$("#bookmark" + id).addClass("fa-star");
		else
			$("#bookmark" + id).addClass("fa-star-o");
	}
	
	function toggleBookmark(id, topic, url) {
		var bookmarkId = "#bookmark" + id;
		var toggleMenuBookmarkId = $("#toggleMenuBookmark").attr("data-id");
		if($(bookmarkId).hasClass("fa-star-o")) {
			addToMyMenu(id, topic, url);
			$(bookmarkId).removeClass("fa-star-o");
			$(bookmarkId).addClass("fa-star");
			if(id == toggleMenuBookmarkId) {
				$("#toggleMenuBookmark").removeClass("fa-star-o");
				$("#toggleMenuBookmark").addClass("fa-star");
			}
		}
		else {
			deleteMyMenu(id);
			$(bookmarkId).removeClass("fa-star");
			$(bookmarkId).addClass("fa-star-o");
			if(id == toggleMenuBookmarkId) {
				$("#toggleMenuBookmark").removeClass("fa-star");
				$("#toggleMenuBookmark").addClass("fa-star-o");
			}
		}
	}
	
	function addWindowIframe(id, topic, url) {
		var iframe = $('<iframe id="windowIframe' + id + '" width="100%" height="590px" class="windowIframe" style="border: none;"></iframe>');
		$("#content").prepend($(iframe));
		$("#windowIframe"+id).height($(window).height()-$("#header").height());
 		$("#windowIframe"+id).attr("src",url);
	}
	function showWindowIframe(id) {
		$(".windowIframe").addClass("hidden");
		$("#windowIframe"+id).removeClass("hidden");
		$(".iframeName").removeClass("activeIframe");
 		$("#window"+id).addClass("activeIframe");
		$(".activeIframeName").css("color", "#bfc7cb");
 		$("#windowName"+id).css("color", "#a2d200");
 		
		$("#deleteFromMenu").attr("data-id", id).removeClass("hidden");
	 	$("#toggleMenuBookmark").attr("data-id", id)
	 							.attr("data-topic", $("#windowName" + id).attr("windowTitle"))
	 							.attr("data-url", $("#windowName" + id).attr("windowUrl")).removeClass("hidden");
	 	
 		if($("#windowName" + id).attr("windowTitle")) {
 			$("#windowTitle").text($("#windowName"+id).attr("windowTitle"));
 		}
 		else {
 			$("#windowTitle").text("");
 		}
 		if(hasMenuInMyMenu(id)) {
 			$("#toggleMenuBookmark").removeClass("fa-star-o");
			$("#toggleMenuBookmark").addClass("fa-star");
 		}
		else {
			$("#toggleMenuBookmark").removeClass("fa-star");
			$("#toggleMenuBookmark").addClass("fa-star-o");
		}
 		
 		closeWindowList();
	}
	function closeWindowList() {
		$body = $("body");
		if (!$body.hasClass('rightbar-hidden')) {
          $body.removeClass('rightbar-show').addClass('rightbar-hidden');
        }
	}
	function deleteAllWindowFrame() {
		$(".windowIframe").each(function (index, frame) {
			deleteWindowIframe($(frame).attr('id').replace('windowIframe', ''));
		});
	}
	function deleteWindowIframe(id) {
		$("#window"+id).remove();
		$("#windowIframe"+id).remove();
		
		if($(".iframeName").length==0) {
			loadDashboard(true);
			$('#deleteAllWindowFrameButton').fadeOut();
		}
		else if($(".activeIframe").length==0) {
			var firstWindow = $(".iframeName").first(); 
			firstWindow.addClass("activeIframe");
			showWindowIframe(firstWindow.attr("windowId"));
		}
	}
	function getActiveIframeId() {
		return $(".activeIframe").first().attr("windowId");
	}
 	function loadFrame(url,menuLayoutState, id, topic){
		if(menuLayoutState!=null&&!$("#minovate").hasClass(menuLayoutState)){
			switch(menuLayoutState){
 				case "sidebar-sm":{
 					$("#minovate").removeClass("sidebar-xs").addClass("sidebar-sm");
 					break;
 				}
 				case "sidebar-xs":{
 					$("#minovate").removeClass("sidebar-sm").addClass("sidebar-xs");
 					break;
 				}
 				case "sidebar-lg":{
 					$("#minovate").removeClass("sidebar-sm").removeClass("sidebar-xs");
 					break;
 				}
			}
		}
		addWindowNameToList(id, topic, url);
		addWindowIframe(id, topic, url);
		showWindowIframe(id);
 	}
 	
 	/*--	Modal ---*/
 	var modalCount = 0;
 	function addNewModal() {
 		modalCount++;
 		var modal = $("<div id=\"ModalPage" + modalCount + "\" class=\"modal fade\" aria-labelledby=\"myModalLabel\" role=\"dialog\" tabindex=\"-1\" aria-hidden=\"true\" >");
 		var modalDialog = $("<div id=\"modalDialog"+modalCount+"\" class=\"modal-dialog\" style=\"max-width:100% !important;\" role=\"document\" >");
 		
 		var modalContent = $("<div class=\"modal-content\" >");
 		
 		var modalHeader = $("<div class=\"modal-header \" >");
 		$(modalHeader).append($("<button class=\"close pull-left\" aria-label=\"Close\" onclick=\"$('#win_iframe_main"+modalCount+"').attr('src', null);$('#ModalPage"+modalCount+"').modal('hide')\"  type=\"button\"><span aria-hidden='true'>×</span></button>"));
 		$(modalHeader).append($("<span id=\"modalTitle"+modalCount+"\" class=\"modal-title\"></span>"));
 		$(modalContent).append($(modalHeader));
 		
 		var modalBody = $("<div class=\"modal-body\" style=\"overflow-y: auto; \"><iframe id=\"win_iframe_main"+modalCount+"\" frameborder=\"0\"  src=\"\"> </iframe></div>");
 		$(modalContent).append($(modalBody));
 		$(modalDialog).append($(modalContent));
 		$(modal).append($(modalDialog));
 		
 		$("body").append($(modal));
 	}
 	function closeModal() {
 		$('#ModalPage'+modalCount).modal("hide");
 	}
 	function getMainFrameWindow(w) {
 		if(w != w.parent) {
 			return  getMainFrameWindow(w.parent);
 		}
 		return w;
 	}
 	function findDocumentInParent(currentWindow, parentWindow) {
		var iframes = parentWindow.$("iframe");
		for (var i = 0, len = iframes.length; i < len; ++i) {
			if (currentWindow.document == iframes[i].contentDocument || currentWindow.self == iframes[i].contentWindow)
				return iframes[i].id;
		}
		return "";
	}
 	function openModal(windowTitle, url, width, height, callBackFunction) {
 		var randDate = new Date();
	    var windowId = randDate.getSeconds() + randDate.getMilliseconds();
 		getMainFrameWindow(window).openWindow(windowId, windowTitle, url, width, height, false, true, "", callBackFunction);
 	}
 	function openWindow(windowId, windowTitle, url, width, height, isMaximize, isModal, menuLayoutState, callBackFunction) {
 		if (windowId == 0)
 			windowId = new Date().getTime();
 		if(isModal == null || !isModal) {
 			windowId = "w" + windowId;
 			window.parent.loadFrame(url, menuLayoutState, windowId, windowTitle);
 			return;
 		}
 		if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
 			url += (url.indexOf('?') >= 0 ? '&' : '?') + 'refreshId='+ new Date().getTime() + '&windowId=' + windowId;
 		} else {
 			url += (url.indexOf('?') >= 0 ? '&' : '?') + 'refreshId='+ new Date().getTime() + '&windowId=' + windowId;
 		}
 		var heightContent ;//1border left right modal content + 15 left right padding modal body
 		windowheight = $(window).height();
 		if((height+"").indexOf("%")>=0){
 			heightContent=(height.replace("%","")*windowheight)/100;
 			heightContent-=105;
 		}
 		else{
 			heightContent=height;
 		}
 		addNewModal();
 		$('#win_iframe_main'+modalCount).attr("src", url);
 		$('#win_iframe_main'+modalCount).attr("width", "100%");
 		$('#win_iframe_main'+modalCount).attr("height", heightContent);
 		
 		$('#modalDialog'+modalCount).css("width", width);
 		$('#modalTitle'+modalCount).html(windowTitle);
 		if(modalCount>1)
 			$('#ModalPage'+(modalCount-1)).hide();
 		$('#ModalPage'+modalCount).modal('show');
		
 		
 		if (typeof (callBackFunction) == "function"){
	 		var parentWindow;
	 		if(modalCount>1) 
	 			parentWindow = document.getElementById('win_iframe_main'+(modalCount-1)).contentWindow;
	 		else 
	 			parentWindow = document.getElementById('windowIframe'+getActiveIframeId()).contentWindow;
	 		
	 		var documentIframeIdInParent = findDocumentInParent(window, parentWindow);
	 		if(documentIframeIdInParent != "") {
	 			parentWindow = parentWindow.$("#" + documentIframeIdInParent).contentWindow;
	 		}
	 		
	 		parentWindow.$("#callBackFunctionScript").remove();
	 		var parentWindowBody = parentWindow.$("body").append("<script id='callBackDefFunctionScript'>var callBackDefFunction = "+ callBackFunction +";</script>");
 		}
 		
 		$("#ModalPage" + modalCount).off('hidden.bs.modal');
		$("#ModalPage" + modalCount).on('hidden.bs.modal', function () {
			$('#ModalPage'+modalCount).remove();
	 		modalCount--;
	 		if(modalCount>0)
	 			$('#ModalPage'+modalCount).show();
	 		if (typeof (callBackFunction) == "function"){
	 			parentWindow.$("body").append("<script>callBackDefFunction();</script>"); 
	 		}
		});
		
 	}
 	function modalCallBack(callbackFunctionName,args) {
 		window.parent.modalCallBackFunction(callbackFunctionName,args);
 	}
 	function modalCallBackFunction(callbackFunctionName,args) {
 		var parentWindow;
 		if(modalCount>1) 
 			parentWindow = document.getElementById('win_iframe_main'+(modalCount-1)).contentWindow;
 		else 
 			parentWindow = document.getElementById('windowIframe'+getActiveIframeId()).contentWindow;
 		
 		var documentIframeIdInParent = findDocumentInParent(window, parentWindow);
 		if(documentIframeIdInParent != "") {
 			parentWindow = parentWindow.$("#" + documentIframeIdInParent).contentWindow;
 		}
 		
 		parentWindow.$("#callBackFunctionScript").remove();
 		var parentWindowBody = parentWindow.$("body").append("<script id='callBackFunctionScript'>var callBackFunction = "+ callbackFunctionName +";callBackFunction.apply(this,[" + args + "]); </script>");
 	}
 	
 	/*-----Notification------*/
 	function showMessage(text, option) {
 		/*opt={};
 		if(option!=null){
 			opt=option;
 		}
 		shortCutFunction = (opt.toastType==null?"info":opt.toastType);
 		opt.title = (opt.title==null?null:opt.title);
 		toastr.options = {
 				  "closeButton": (opt.progressBar==null?true:opt.closeButton),
 				  "debug": false,
 				  "newestOnTop": (opt.newestOnTop==null?false:opt.newestOnTop),
 				  "progressBar": (opt.progressBar==null?false:opt.progressBar),
 				  "positionClass": (opt.positionClass==null?"toast-top-center":opt.positionClass),
 				  "preventDuplicates": (opt.preventDuplicates==null?true:opt.preventDuplicates),
 				  "onclick": null,
 				  "showDuration": (opt.showDuration==null?"250":opt.showDuration),
 				  "hideDuration": (opt.hideDuration==null?"250":opt.hideDuration),
 				  "timeOut": (opt.timeOut==null?"2500":opt.timeOut),
 				  "extendedTimeOut": (opt.extendedTimeOut==null?"1000":opt.extendedTimeOut),
 				  "showEasing": (opt.showEasing==null?"swing":opt.showEasing),
 				  "hideEasing": (opt.hideEasing==null?"linear":opt.hideEasing),
 				  "showMethod": (opt.showMethod==null?"fadeIn":opt.showMethod),
 				  "hideMethod": (opt.hideMethod==null?"fadeOut":opt.hideMethod),
 				  "tapToDismiss": (opt.tapToDismiss==null?true:opt.tapToDismiss),
 		}
 		var $toast = toastr[shortCutFunction](text, opt.title);*/
 	}
 	function gridRefresh(){
 		$.each($("[data-gridRefresh]"),function(){
 			calbackFunction=$(this).attr("data-gridRefresh").trim();
 			if(calbackFunction.length>0){
 				calbackFunction();
 			}else{
 				$(this).on("click",function(){
 					$("#grid").grid("fillTable");
 	 			});
 			}
 		});
 	}
 	function formRefresh(){
 		$.each($("[data-formRefresh]"),function(){
 			calbackFunction=$(this).attr("data-formRefresh").trim();
 			if(calbackFunction.length>0){
 				calbackFunction();
 			}else{
 				$(this).on("click",function(){
 					$('#FormMain').form('load', $('#id').val());
 	 			});
 			}
 		});
 	}
 	function tabToggle(tabId,active,disabled){
	 	$("#"+tabId+" a[data-toggle='tab']").each(function(index, object) {
			if (active.indexOf(index + 1) < 0) {
				$(this).addClass('disabled');
				$(this).parent().removeClass('active');
			} else {
				$(this).removeClass('disabled');
			}
			if (disabled.indexOf(index + 1) >= 0) {
				$(this).addClass('disabled');
				$(this).parent().removeClass('active');
			} else {
				$(this).removeClass('disabled');
			}
	 	});
 	}
