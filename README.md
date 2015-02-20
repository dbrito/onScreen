#onScreen
Classe que tem como objetivo detectar quando o elemento esta visivel na tela

##Uso:
Para que o elemento passe a ser verificado se deve primeiramente adiconar os listeners **onScrenn**(quando o elemento estiver na tela) e **outScreen**(quando o elemento estiver fora da tela) ao mesmo(exemplo abaixo) e apos isso basta ativar a função.

###Ex:
```javascript
//Seleciona o elemento
var teste = document.getElementById('parallax');
//Adiciona os listeners
teste.onScreen(function(target) {
	target.style.opacity = '1';	
});
teste.outScreen(function(target){
	target.style.opacity = '0';			
});
//Ativa a função
teste.initCheck();
```

***Importante:***
Momentaneamente o plugin só da suporte a elementos unicos e sem o uso de JQuery.

[por Douglas Santos](http://douglas.com.br)
