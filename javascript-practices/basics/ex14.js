/*
URL 다루기
*/

// 예1) 리다이렉트
// location.href = url;
//
// 예2) ajax 통신
// $.ajax(url)
// fetch(url)
// axios(url)

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: URL 전부를 encoding, 사용(x), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 전체 중 파라미터만 encoding 한다. url 전체를 encoding 해야 하는 경우 사용(o)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding해야 하는 경우 사용(o), url 전체를 encoding 해야 하는 경우 사용(x)
var url4 = encodeURIComponent(url);
console.log(url4); // 오용 예

// 4. encodeURIComponent 사용 예
// 만들어야 할 URL: http://www.mysite.com/user?name=둘리&email=dooly@gmail.com

var url = "http://www.mysite.com/user";
var formData = {
    name: '둘리',
    email: 'dooly@gmail.com'
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));




