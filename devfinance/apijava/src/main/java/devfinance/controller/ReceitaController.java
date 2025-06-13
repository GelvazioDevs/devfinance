package devfinance.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import devfinance.exception.ResourceNotFoundException;
import devfinance.model.Receita;
import devfinance.repository.ReceitaRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ReceitaController {

	@Autowired
	private ReceitaRepository receitaRepository;

	// Listar todos os Receitas
	@GetMapping("/receita")
	@ResponseStatus(HttpStatus.OK)
	public List<Receita> getAllCadastros() {
		return this.receitaRepository.findAll();
	}

	// Listar um Receita
	@GetMapping("/receita/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Receita> getCadastroById(@PathVariable(value = "id") Long cadastroId)
			throws ResourceNotFoundException {
		Receita cadastro = receitaRepository.findById(cadastroId)
				.orElseThrow(() -> new ResourceNotFoundException(
						"Cadastro de Receita não encontrado para o ID : " + cadastroId));

		return ResponseEntity.ok().body(cadastro);
	}

	// Inserir Receita
	@PostMapping("/receita")
	@ResponseStatus(HttpStatus.CREATED)
	public Receita createCadastro(@RequestBody Receita cadastroFrontend) {		
		// Receita ReceitaAtualBancoDados = receitaRepository.findReceitaByPlaca(cadastroFrontend.getPlaca());		
		// if(ReceitaAtualBancoDados != null){
		// 	return this.receitaRepository.save(ReceitaAtualBancoDados);
		// }

		return this.receitaRepository.save(cadastroFrontend);
	}

	/// alterar Receita
	@PutMapping("/receita/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Receita> updateCadastro(@PathVariable(value = "id") Long cadastroId,
			@Validated @RequestBody Receita cadastroCaracteristicas) throws ResourceNotFoundException {
		Receita cadastro = receitaRepository.findById(cadastroId)
				.orElseThrow(() -> new ResourceNotFoundException("Cadastro não encontrado para o ID : " + cadastroId));

		// cadastro.setTipo(cadastroCaracteristicas.getTipo());
		// cadastro.setPlaca(cadastroCaracteristicas.getPlaca());
		// cadastro.setAno(cadastroCaracteristicas.getAno());
		// cadastro.setFabricante(cadastroCaracteristicas.getFabricante());
		// cadastro.setModelo(cadastroCaracteristicas.getModelo());

		return ResponseEntity.ok(this.receitaRepository.save(cadastro));
	}

	// deletar Receita
	@DeleteMapping("/receita/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Map<String, Boolean> deleteCadastro(@PathVariable(value = "id") Long cadastroId)
			throws ResourceNotFoundException {
		Receita cadastro = receitaRepository.findById(cadastroId)
				.orElseThrow(() -> new ResourceNotFoundException("Cadastro não encontrado para o ID : " + cadastroId));

		this.receitaRepository.delete(cadastro);

		Map<String, Boolean> resposta = new HashMap<>();

		resposta.put("cadastro deletado", Boolean.TRUE);

		return resposta;
	}

	// @GetMapping("/receitausuario/{usuario}")
	// @ResponseStatus(HttpStatus.OK)
	// public List<Receita> getCadastroByUsuario(@PathVariable(value = "usuario") Long usuario)
	// throws ResourceNotFoundException {
	// 	return receitaRepository.findReceitaByUsuario(usuario);
	// }

}