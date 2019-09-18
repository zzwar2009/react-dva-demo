// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
  }
  
  
function request(){
return ajax('GET', 'https://www.tianqiapi.com/api/?version=v1&cityid=101110101&appid=14789911&appsecret=fzFpo2lt');
}
export {
    request
}