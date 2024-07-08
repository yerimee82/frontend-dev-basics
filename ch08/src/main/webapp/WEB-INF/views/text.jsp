
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,24 @@
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
    <script>
        $(function(){
            $('button').click(function(){
                $('#data').load('/ch08/api/text');
            });
        });
    </script>
</head>
<body>
<h1>Ajax Test: Text Format Data</h1>
<button>데이터 가져오기</button>
<div id="data"></div>
</body>
</html>