#onScreen
Classe que tem como objetivo detectar quando o elemento esta visivel na tela

##Uso:
Para que o elemento passe a ser verificado se deve primeiramente adiconar os listeners **onScrenn**(quando o elemento estiver na tela) e **outScreen**(quando o elemento estiver fora da tela) ao mesmo(exemplo abaixo) e apos isso basta ativar a função.

###Ex:
```javascript
//Seleciona o(s) elemento(s)
var testeClasse = document.getElementsByClassName('divcomclasse');
//Adiciona os listeners
testeClasse.onScreen(function(target) {
	target.style.border = '30px solid #000';	
	target.style.opacity = '1';	
});
testeClasse.outScreen(function(target){
	target.style.border = '0px solid #000';	
	target.style.opacity = '.4';	
});
//Ativa a função
testeClasse.initCheck();
```

***Importante:***
Momentaneamente o plugin só da suporte a elementos selecionados via javascript puro ou seja sem o uso de JQuery(momentaneamente).

[por Douglas Santos](http://douglas.com.br)
