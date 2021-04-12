<?php
	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	$triangle="";
	for($i=1;$i<=6;$i++)
	{
		$triangle=$triangle."<p>";
		for($j=1;$j<=$i;$j++)
		{
			$triangle=$triangle."o";
		}
		$triangle=$triangle."</p>";
	}
	echo $triangle;
?>