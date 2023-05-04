<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link rel="stylesheet" href="css/subimport.css" />
</head>
<body>
	  <? include("include/header.php")  ?>
	  
	  <? include("include/subviusal.php")  ?>	 
	  <!-- //visual -->
	  	
      <div id="container">
      	<div id="sideBar">
      		<h2>자기소개</h2>
      		<ul id="lnb">
      			<li><a href="#">subMenu1</a></li>
      			<li><a href="#">subMenu2</a></li>
      			<li><a href="#">subMenu3</a></li>
      			<li><a href="#">subMenu4</a></li>
      			<li><a href="#">subMenu5</a></li>
      			<li><a href="#">subMenu6</a></li>
      			<li><a href="#">subMenu7</a></li>
      		</ul>
      	</div>
      	<div id="content">
      		<div class="con-top">
      			<h2>자기소개</h2>
      			<p>자기소개 내용입니다.</p>
      			<ul class="path">
      				<li><a href="#">home</a>&gt; </li>
      				<li><a href="#">서브</a>&gt;</li>
      				<li><a href="#">서브</a></li>
      			</ul>
      		</div><!-- //contop -->
      		<div class="about">
      			
      			<dl>
      				<dt>홍길동을 소개합니다.</dt>
      				<dd class="pic"><img src="images/sub4/m0.jpg" alt="홍길동" /></dd>
      				<dd class="txt">이름:<span>홍길동</span></dd>
      				<dd class="txt">나이:<span>20살</span></dd>
      				<dd class="txt">사는곳:<span>서울시 서초구 서초동 대동빌딩</span></dd>
      				<dd class="txt">성별:<span>남자</span></dd>
      				<dd class="txt">취미:<span>오락</span></dd>
      				<dd class="txt">연락처:<span>010-0000-0000</span></dd>
      				<dd class="txt">생활신조:<span>긍정</span></dd>
      			</dl>
      			
      		</div>
      	</div>
      </div>

	  <? include("include/footer.php")  ?>
</body>
</html>








