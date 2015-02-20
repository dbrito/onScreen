#onScreen
Classe que tem como objetivo detectar quando o elemento esta visivel na tela

##Uso:
Para que o elemento passe a ser verificado se deve primeiramente adiconar os listeners ao mesmo(exemplo abaixo) e apos isso ativar o plugin.

###Exemplo
```javascript
var teste = document.getElementById('parallax');
teste.onScreen(function(target) {
	target.style.opacity = '1';	
});
teste.outScreen(function(target){
	target.style.opacity = '0';			
});
teste.initCheck();
```

***Importante:***
Momentaneamente o plugin só da suporte a elementos unicos.

[por Douglas Santos](http://douglas.com.br)
