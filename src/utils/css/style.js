import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Raleway', sans-serif",
        "color": "#848484",
        "fontSize": 14,
        "fontWeight": "400",
        "backgroundColor": "#fff",
        "overflowY": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%",
        "height": "100%"
    },
    "html": {
        "position": "relative !important",
        "minHeight": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%",
        "height": "100%"
    },
    "a:hover": {
        "textDecoration": "none"
    },
    "shadow": {
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "content": {
        "width": "100%",
        "height": "100%"
    },
    "content>section": {
        "width": "100%",
        "height": "100%"
    },
    "home": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "overflow": "hidden",
        "backgroundImage": "url(\"../images/banner.jpg\")",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center"
    },
    "about": {
        "background": "#f6c362"
    },
    "services": {
        "backgroundColor": "#eb7e7f"
    },
    "contact": {
        "backgroundColor": "#415c71"
    },
    "header": {
        "position": "fixed",
        "top": 0,
        "width": "100%",
        "height": "auto"
    },
    "header-social-icon": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "header-social-icon fa": {
        "fontSize": 20,
        "width": 35,
        "textAlign": "center",
        "textDecoration": "none",
        "color": "white"
    },
    "header-logo": {
        "width": "45%",
        "display": "table",
        "paddingTop": 15,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "nav": {
        "position": "absolute",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "transition": "all 0.5s",
        "top": "-35pc",
        "right": -280,
        "borderRadius": "50%",
        "zIndex": 1000,
        "background": "#000",
        "overflow": "hidden"
    },
    "header-menu": {
        "float": "right"
    },
    "header-menu img": {
        "width": "45%",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "table"
    },
    "header-nav-menu nav nav-inner-div": {
        "position": "absolute",
        "color": "#fff",
        "top": "37pc",
        "right": "30%",
        "textAlign": "right",
        "width": "100%"
    },
    "menu-title": {
        "float": "right",
        "width": "100%"
    },
    "menu-title h1": {
        "fontWeight": "900",
        "letterSpacing": 5
    },
    "menu-title img-menu-close": {
        "float": "right",
        "width": "3%",
        "marginLeft": 20
    },
    "nav-inner-div menu-title hr": {
        "borderTop": "1px solid white",
        "width": "50%",
        "float": "right",
        "marginRight": "5%",
        "marginBottom": 2
    },
    "menu-content": {
        "marginRight": "5%"
    },
    "menu-content h3 a": {
        "color": "#ffffff"
    },
    "menu-content h3": {
        "marginBottom": 20,
        "fontWeight": "600",
        "letterSpacing": 3
    },
    "btn-3": {
        "backgroundImage": "linear-gradient(to right, #43A267 0%, #1B7BB0 80%)",
        "width": "24%",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderRadius": "50px 50px",
        "border": "none",
        "fontWeight": "600",
        "letterSpacing": 3,
        "fontSize": 1.7
    },
    "btn-3:hover": {
        "backgroundPosition": "right center"
    },
    "left-maincontent": {
        "position": "absolute",
        "marginTop": "27%",
        "marginLeft": "8%",
        "color": "#ffffff"
    },
    "left-maincontent h1": {
        "fontSize": 4.5,
        "marginBottom": 25
    },
    "left-maincontent h3": {
        "fontSize": 2.5
    },
    "right-maincontent": {
        "position": "absolute",
        "marginTop": "30%",
        "color": "#ffffff"
    },
    "parent-panel": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%",
        "backgroundColor": "#000",
        "display": "flex"
    },
    "main-panel": {
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "flexDirection": "column"
    },
    "chat-toggle": {
        "width": "0px !important",
        "height": "100%",
        "overflow": "hidden",
        "backgroundColor": "#efefef",
        "transition": "all 0.35s"
    },
    "show-chat": {
        "width": "500px !important",
        "transition": "all 0.35s"
    },
    "video-area": {
        "height": "100%",
        "display": "flex"
    },
    "video-main": {
        "flex": 2,
        "display": "flex"
    },
    "sub-videos": {
        "flex": 1,
        "display": "flex",
        "flexDirection": "column"
    },
    "video-panel": {
        "flex": 1,
        "height": "auto",
        "width": "100%",
        "overflow": "hidden",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "users-panel": {
        "width": "7%",
        "background": "linear-gradient(to bottom, #489e65 0%, #1a79ac 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#489e65', endColorstr='#1a79ac', GradientType=0)",
        "flexDirection": "column",
        "display": "flex"
    },
    "video-logo": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "#3e8a5b",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "user-list": {
        "height": "100%",
        "overflowY": "auto"
    },
    "controllers": {
        "height": "100%",
        "overflowY": "auto"
    },
    "user-list ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "listStyle": "none",
        "color": "#FFF",
        "display": "table"
    },
    "controllers ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "listStyle": "none",
        "color": "#FFF",
        "display": "table"
    },
    "user-list li": {
        "backgroundColor": "rgba(255, 255, 255, 0.23)",
        "width": 62,
        "height": 62,
        "textAlign": "center",
        "fontSize": 20,
        "lineHeight": 58,
        "borderRadius": "50%",
        "border": "1px solid rgba(255, 255, 255, 0.25)",
        "marginBottom": 15
    },
    "controllers li": {
        "backgroundColor": "rgba(0, 0, 0, 0.61)",
        "width": 52,
        "height": 52,
        "textAlign": "center",
        "fontSize": 20,
        "lineHeight": 52,
        "borderRadius": "50%",
        "border": "1px solid rgba(0, 0, 0, 0.9)",
        "marginBottom": 15,
        "cursor": "pointer"
    },
    "controllers li:hover": {
        "backgroundColor": "#000"
    },
    "video-panel video": {
        "height": "100%",
        "width": "100%"
    },
    "chat": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "chat li": {
        "marginBottom": 10,
        "paddingBottom": 5,
        "borderBottom": "1px dotted #B3A9A9"
    },
    "chat lileft chat-body": {
        "marginLeft": 60
    },
    "chat liright chat-body": {
        "marginRight": 60
    },
    "chat li chat-body p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#777777"
    },
    "panel slidedown glyphicon": {
        "marginRight": 5
    },
    "chat glyphicon": {
        "marginRight": 5
    },
    "panel-body": {
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "height": "100%"
    },
    "::-webkit-scrollbar-track": {
        "WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,0.3)",
        "backgroundColor": "#F5F5F5"
    },
    "::-webkit-scrollbar": {
        "width": 5,
        "backgroundColor": "#F5F5F5"
    },
    "::-webkit-scrollbar-thumb": {
        "WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,.3)",
        "backgroundColor": "#555"
    },
    "panel": {
        "height": "100%",
        "position": "relative",
        "display": "flex",
        "flexDirection": "column"
    }
});