(function() {

    var styles = `
@font-face {
  font-family: "bootstrap-icons";
  src: url("https://github.com/twbs/icons/blob/main/font/fonts/bootstrap-icons.woff2?raw=true?4601c71fb26c9277391ec80789bfde9c") format("woff2"),
url("https://github.com/twbs/icons/blob/main/font/fonts/bootstrap-icons.woff?raw=true?4601c71fb26c9277391ec80789bfde9c") format("woff");
}
.thumbinner {
	border-color: #373737;
	border-width: 2px 2px 2px 2px;
	box-shadow: none;
}

#mw-content-container {
	background: #1e1e20;
} body, #mw-content, #mw-header-container, #simpleSearch {
	background:#303133;
} #contentSub, body, .infobox, .tools-inline li.selected a, .tocnumber {
	color:#cdced0;
} a {
	color: #51a5ff;
} div.editOptions, .mw-parser-output #mp-topbanner, .thumbinner, table.ambox, #toc.toc, .infobox, #page-tools.sidebar-chunk, #site-navigation.sidebar-chunk, #site-tools.sidebar-chunk, #page-tools.sidebar-chunk, #other-languages.sidebar-chunk, #catlinks-sidebar.sidebar-chunk, .sidebar-chunk {
	background: #202123;
} #mw-related-navigation .sidebar-chunk, #mw-site-navigation .sidebar-chunk, #mw-content, .infobox, table.ambox{
	border: solid #373737;
	border-width:2px;
} .mw-editsection {
	background-image: url('data:image/svg+xml;utf8,<svg fill="%23fff" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M12.879 2.165l-9.465 9.471 4.95 4.95 9.465-9.471zm0 2.829L15 7.115l-6.636 6.643-2.121-2.122zM6.95 18H2v-4.95z" opacity=".33"/></svg>');
} .mw-body .mw-rcfilters-ui-changesListWrapperWidget .mw-changeslist-legend, .mw-changeslist-legend, .mw-body .mw-search-profile-tabs, .mw-body fieldset#mw-searchoptions, .mw_metadata, .wikitable, .mw-datatable {
	color: #cdced0;
	background: #202123;
	border: solid #373737;
} .wikitable > tr > th, .wikitable > * > tr > th {
	background: #222d42;
} table.fmbox, div#editpage-specialchars, .ext-related-articles-card-list .ext-related-articles-card + .ext-related-articles-card, .ext-related-articles-card, .thumbinner .thumbimage, .thumbborder, .toc, .mw_metadata > tr > th, .mw-datatable > tr > th, .wikitable > tr > th, .mw_metadata > tr > td, .mw-datatable > tr > td, .wikitable > tr > td, .mw_metadata > * > tr > th, .mw-datatable > * > tr > th, .wikitable > * > tr > th, .mw_metadata > * > tr > td, .mw-datatable > * > tr > td, .wikitable > * > tr > td {
	border-color: #373737;
} .ext-related-articles-card-list .ext-related-articles-card {
	background: #202123;
	border: solid #373737;
	border-width: 2px;
	color: #cdced0;
} .ra-read-more h2, .ext-related-articles-card-list h3 a {
	color: #cdced0;
} #mw-header-container {
	color: #cdced0;
} #simpleSearch {
	border-color: #cdced0;
	border-radius: 20px;
} input#searchInput {
	outline: none;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 0px solid green;
  -webkit-text-fill-color: none;
  -webkit-box-shadow: none;
  transition: none;
} #personal-inner.dropdown {
	background: #292929;
	border-color: #373737;
} #personal-inner.dropdown:before {
	border-bottom-color:#292929;
} #personal-inner.dropdown:after {
	border-bottom-color: #292929;
} table.fmbox-warning {
    border: 2px solid #941111;
    background-color: #b32424;
} table#mw-script-doc.plainlinks.fmbox.fmbox-system {
	background: #202123 !important;
	border-color: #373737;
} .thumbimage, a.image {
	background-color: #fff;
} div.navbox {
	background-color: #202123 !important;
	border: solid 1px #373737 !important;
	color: #000 !important;
} .ext-related-articles-card-list h3:after {
	background-image: linear-gradient(to right,rgba(255,255,255,0),#202123 50%);
} div.editOptions {
	border-color: #373737;
	border-width: 0 1px 1px;
} div > div> div> div > p > a.image {
	background: none;
}  .mw-parser-output .quotebox {
	background-color: #202123 !important;
	border-color: #373737 !important;
} .mwe-popups .mwe-popups-container {
	background: #202123 !important;
} .mwe-popups .mwe-popups-extract {
	color: #cdced0;
} .oo-ui-icon-settings, .mw-ui-icon-settings:before {
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23cdced0" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>');
} .mwe-popups .mwe-popups-extract[dir='ltr']:after {
	background-image: linear-gradient(to right,rgba(255,255,255,0),#202123 50%);
} #searchButton, #mw-searchButton {
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23cdced0" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>');
} .oo-ui-icon-bell, .mw-ui-icon-bell:before {
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23cdced0" class="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>');
	background-repeat: no-repeat;
	
} input {
	color: #cdced0;
} .suggestions .suggestions-result {
	color: #cdced0;
} .suggestions-results, .suggestions .suggestions-special {
	background-color: #303133 !important;
} .suggestions a.mw-searchSuggest-link, .suggestions a.mw-searchSuggest-link:hover, .suggestions a.mw-searchSuggest-link:active, .suggestions a.mw-searchSuggest-link:focus {
	color: #cdced0;
} img[src="/static/images/mobile/copyright/wikipedia-wordmark-en.svg"] {
height: 24;
} a.image > img {
    background: #fff !important;
}
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)


})();
