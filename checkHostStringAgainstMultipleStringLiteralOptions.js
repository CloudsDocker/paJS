var host ='uat.api.youdomain.au';
var host ='beta.api.youdomain.io';
var host ='lab.youdomain.com.au';

// the most commonly used approach to check host string belongs to multiple value choices
if (host==='beta.api.youdomain.io' ||
    host === 'uat.api.youdomain.io' ||
    host === 'lab.youdomain.com.au'){
    console.log('matched222')
}else {
    console.log('Not matched222')
}

// the more elegant, concise and flexible approach to check host string belongs to multiple value choices
if (host.match(/["uat" , "beta", "lab"].(api.)?youdomain.(com.)?["au","io"]/)) {
    // if (host.match('/[beta|uat|lab]/i')) {
    console.log('matched1111')
}else {
    console.log('Not matched1111111')
}


