!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var l=i[s]={exports:{},id:s,loaded:!1};return t[s].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),l="dual-listbox",a="dual-lsitbox__container",n="dual-listbox__available",d="dual-listbox__selected",o="dual-listbox__title",c="dual-listbox__item",u="dual-listbox__buttons",r="dual-listbox__button",h="dual-listbox__search",v="dual-listbox__item--selected",b=function(){function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.select=document.querySelector(e),this.selected=[],this.available=[],this._initOptions(s),this._initReusableElements(),this._splitSelectOptions(this.select),this._buildDualListbox(this.select.parentNode),this._addActions(),this.redraw()}return s(t,[{key:"addSelected",value:function(t){var e=this.available.indexOf(t);e>-1&&(this.available.splice(e,1),this.selected.push(t),this._selectOption(t.dataset.id),this.redraw())}},{key:"redraw",value:function(){this.updateAvailableListbox(),this.updateSelectedListbox()}},{key:"removeSelected",value:function(t){var e=this.selected.indexOf(t);e>-1&&(this.selected.splice(e,1),this.available.push(t),this._deselectOption(t.dataset.id),this.redraw())}},{key:"searchLists",value:function(t,e){for(var i=e.querySelectorAll("."+c),s=0;s<i.length;s++){var l=i[s];t&&l.textContent.indexOf(t)===-1?l.style.display="none":l.style.display="list-item"}}},{key:"updateAvailableListbox",value:function(){this.availebleList.innerHTML="",this.availebleList.appendChild(this.availableListTitle);for(var t=0;t<this.available.length;t++){var e=this.available[t];this.availebleList.appendChild(e)}}},{key:"updateSelectedListbox",value:function(){this.selectedList.innerHTML="",this.selectedList.appendChild(this.selectedListTitle);for(var t=0;t<this.selected.length;t++){var e=this.selected[t];this.selectedList.appendChild(e)}}},{key:"_actionAllSelected",value:function(t){for(t.preventDefault();this.available.length>0;)this.addSelected(this.available[0])}},{key:"_actionItemSelected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector("."+v);e&&this.addSelected(e)}},{key:"_actionAllDeselected",value:function(t){for(t.preventDefault();this.selected.length>0;)this.removeSelected(this.selected[0])}},{key:"_actionItemDeselected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector("."+v);e&&this.removeSelected(e)}},{key:"_actionItemDoubleClick",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(e.preventDefault(),e.stopPropagation()),this.selected.indexOf(t)>-1?this.removeSelected(t):this.addSelected(t)}},{key:"_actionItemClick",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i&&i.preventDefault();for(var s=e.querySelectorAll("."+c),l=0;l<s.length;l++){var a=s[l];a!==t&&a.classList.remove(v)}t.classList.contains(v)?t.classList.remove(v):t.classList.add(v)}},{key:"_addActions",value:function(){this._addButtonActions(),this._addSearchActions()}},{key:"_addButtonActions",value:function(){var t=this;this.add_all_button.addEventListener("click",function(e){return t._actionAllSelected(e)}),this.add_button.addEventListener("click",function(e){return t._actionItemSelected(e)}),this.remove_button.addEventListener("click",function(e){return t._actionItemDeselected(e)}),this.remove_all_button.addEventListener("click",function(e){return t._actionAllDeselected(e)})}},{key:"_addClickActions",value:function(t){var e=this;return t.addEventListener("dblclick",function(i){return e._actionItemDoubleClick(t,i)}),t.addEventListener("click",function(i){return e._actionItemClick(t,e.dualListbox,i)}),t}},{key:"_addSearchActions",value:function(){var t=this;this.search.addEventListener("change",function(e){return t.searchLists(e.target.value,t.dualListbox)}),this.search.addEventListener("keyup",function(e){return t.searchLists(e.target.value,t.dualListbox)})}},{key:"_buildDualListbox",value:function(t){this.select.style.display="none",this.dualListBoxContainer.appendChild(this.availebleList),this.dualListBoxContainer.appendChild(this.buttons),this.dualListBoxContainer.appendChild(this.selectedList),this.dualListbox.appendChild(this.search),this.dualListbox.appendChild(this.dualListBoxContainer),t.insertBefore(this.dualListbox,this.select)}},{key:"_createButtons",value:function(){this.buttons=document.createElement("div"),this.buttons.classList.add(u),this.add_all_button=document.createElement("button"),this.add_all_button.classList.add(r),this.add_all_button.innerHTML=this.addAllButtonText,this.add_button=document.createElement("button"),this.add_button.classList.add(r),this.add_button.innerHTML=this.addButtonText,this.remove_button=document.createElement("button"),this.remove_button.classList.add(r),this.remove_button.innerHTML=this.removeButtonText,this.remove_all_button=document.createElement("button"),this.remove_all_button.classList.add(r),this.remove_all_button.innerHTML=this.removeAllButtonText,this.buttons.appendChild(this.add_all_button),this.buttons.appendChild(this.add_button),this.buttons.appendChild(this.remove_button),this.buttons.appendChild(this.remove_all_button)}},{key:"_createListItem",value:function(t){var e=document.createElement("li");return e.classList.add(c),e.innerHTML=t.innerHTML,e.dataset.id=t.value,this._addClickActions(e),e}},{key:"_createSearch",value:function(){this.search=document.createElement("input"),this.search.classList.add(h),this.search.attributes.placehold=this.searchPlaceholder}},{key:"_deselectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!1)}this.removeEvent&&this.removeEvent(t)}},{key:"_initOptions",value:function(t){this.addEvent=t.addEvent,this.removeEvent=t.removeEvent,this.availableTitle=t.availableTitle||"Available options",this.selectedTitle=t.selectedTitle||"Selected options",this.addButtonText=t.addButtonText||"add",this.removeButtonText=t.removeButtonText||"remove",this.addAllButtonText=t.addAllButtonText||"add all",this.removeAllButtonText=t.removeAllButtonText||"remove all",this.searchPlaceholder=t.searchPlaceholder||"Search"}},{key:"_initReusableElements",value:function(){this.dualListbox=document.createElement("div"),this.dualListbox.classList.add(l),this.select.id&&this.dualListbox.classList.add(this.select.id),this.dualListBoxContainer=document.createElement("div"),this.dualListBoxContainer.classList.add(a),this.availebleList=document.createElement("ul"),this.availebleList.classList.add(n),this.selectedList=document.createElement("ul"),this.selectedList.classList.add(d),this.availableListTitle=document.createElement("li"),this.availableListTitle.classList.add(o),this.availableListTitle.innerText=this.availableTitle,this.selectedListTitle=document.createElement("li"),this.selectedListTitle.classList.add(o),this.selectedListTitle.innerText=this.selectedTitle,this._createButtons(),this._createSearch()}},{key:"_selectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!0)}this.addEvent&&this.addEvent(t)}},{key:"_splitSelectOptions",value:function(t){for(var e=t.options,i=0;i<e.length;i++){var s=e[i],l=this._createListItem(s);s.attributes.selected?this.selected.push(l):this.available.push(l)}}}]),t}();e.default=b,e.DualListbox=b}])});