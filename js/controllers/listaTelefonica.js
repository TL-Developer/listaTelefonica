app.controller('listaTelefonicaCtrl', function($scope){
	
	$scope.app = 'Lista Telefônica';
	$scope.contatos = [
		{nome: "Tiago", telefone: "99213-2086"},
		{nome: "Ana", telefone: "99213-2086"},
		{nome: "Maria", telefone: "99213-2086"}
	];
	$scope.filter = '';

	$scope.adicionarContato = function(nome, telefone){
		$scope.contatos.push({
			nome: nome,
			telefone: telefone
		});
		delete $scope.nome;
		delete $scope.telefone;
	};
});