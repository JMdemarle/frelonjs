const MIN_FIREFOX = ">=78";
const MIN_CHROME = ">=90";
const MIN_SAFARI = ">=14";
const MIN_EDGE = ">=91";
const MIN_SAFARI_IOS = ">12.4";



    // Baseline


// build a 'comparator' object for various comparison checks
var comparator = {
    '<': function(a, b) { return a < b; },
    '<=': function(a, b) { return a <= b; },
    '>': function(a, b) { return a > b; },
    '>=': function(a, b) { return a >= b; }
};

// helper function which compares a version to a range
function compareVersion(version, range) {
    var string = (range + '');
    var n = +(string.match(/\d+/) || NaN);
    var op = string.match(/^[<>]=?|/)[0];
    return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
}



    
//var freeGlobal = is.windowObject(typeof global == 'object' && global) && global;
//var freeSelf = is.windowObject(typeof self == 'object' && self) && self;
//var thisGlobal = is.windowObject(typeof this == 'object' && this) && this;
//var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

//var document = freeSelf && freeSelf.document;
//var previousIs = root.is;

// store navigator properties to use later
//var navigator = freeSelf && freeSelf.navigator;
//var platform = (navigator && navigator.platform || '').toLowerCase();
var userAgent = navigator.userAgent.toLowerCase();
var vendor = navigator.vendor.toLowerCase();

// ==============
const isOpera =  (range)  => {
    var match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
};
// is current browser firefox?
// parameter is optional
const isFirefox =  (range) => {
    var match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
    console.log('test firefox');
    console.log(match !== null && compareVersion(match[1], range));
    return match !== null && compareVersion(match[1], range);
};

// is current browser chrome?
// parameter is optional
const isChrome = (range) => {
    var match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
    return match !== null && !isOpera() && compareVersion(match[1], range);
};

// is current browser edge?
// parameter is optional
const isEdge =  (range)  => {
    var match = userAgent.match(/edge\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
};


// is current device ipad?
// parameter is optional
const isIpad =  (range)  => {
    var match = userAgent.match(/ipad.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range);
};



// is current browser safari?
// parameter is optional
const isSafari =  (range) =>  {
    var match = userAgent.match(/version\/(\d+).+?safari/);
    return match !== null && compareVersion(match[1], range);
};



export default function isIncompatible () {
    console.log(userAgent);
    if (isFirefox(MIN_FIREFOX) ||
    isChrome(MIN_CHROME) ||
    isEdge (MIN_EDGE) ||
    isSafari (MIN_SAFARI) ||
    isIpad (MIN_SAFARI_IOS))
    { return false}
    else
    {return true}
};
// ==============

/*

*/
    // Object checks
/* -------------------------------------------------------------------------- */
