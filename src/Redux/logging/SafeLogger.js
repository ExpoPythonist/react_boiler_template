class SafeLogger {

    constructor(debugEnabled=true, styleEnabled=true){
        this.debugEnabled = debugEnabled;
        this.styleEnabled = styleEnabled;

        this.defaultFontStyleSize = "15px";
        this.defaultLogStyleInfo = "font-size: 13px; color: green; display: block; text-align: center;";
        this.defaultLogStyleWarn = "font-size: 13px; color: yello;";
        this.defaultLogStyleError = "font-size: 13px; color: red;";

        if(window.console && debugEnabled){
            console.log("%cWarning! DEBUG ENABLED", "color: red; font-size: 30px;");
        }
        else{
            console.log("%cWarning! Production. Please do not change anything.", "color: red; font-size: 30px; display: block;");
            window.console = null;
        }
    }
    logInfo = (data) => {
        if (window.console && this.debugEnabled) {
            if(this.styleEnabled){
                console.log("%c" + data, this.defaultLogStyleInfo);
            }
            else{
                console.log(data);
            }
        }
    }
    logInfoGroup = (groupTitle, items, collapsed) => {
        let $this = this;
        if (window.console && this.debugEnabled) {
            if(collapsed){
                console.groupCollapsed("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            else{
                console.group("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            for(var i = 0; i < items.length; i++){
                $this.logInfo(items[i]);
            }
            console.groupEnd();
        }
    }
    logWarning = (data) => {
        if (window.console && this.debugEnabled) {
            if(this.styleEnabled){
                console.warn("%c" + data, this.defaultLogStyleWarn);
            }
            else{
                console.warn(data);
            }
        }
    }
    logWarningGroup = (groupTitle, items, collapsed) => {
        let $this = this;
        if (window.console && this.debugEnabled) {
            if(collapsed){
                console.groupCollapsed("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            else{
                console.group("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            for(var i = 0; i < items.length; i++){
                $this.logWarning(items[i]);
            }
            console.groupEnd();
        }
    }
    logError = (data) => {
        if (window.console && this.debugEnabled) {
            if(this.styleEnabled){
                console.error("%c" + data, this.defaultLogStyleError);
            }
            else{
                console.error(data);
            }
        }
    }
    logErrorGroup = (groupTitle, items, collapsed) => {
        let $this = this;
        if (window.console && this.debugEnabled) {
            if(collapsed){
                console.groupCollapsed("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            else{
                console.group("%c" + groupTitle, "font-size: " + this.defaultFontStyleSize);
            }
            for(var i = 0; i < items.length; i++){
                $this.logError(items[i]);
            }
            console.groupEnd();
        }
    }
  }

export default SafeLogger;