package devfinance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import devfinance.exception.ResourceNotFoundException;
import devfinance.model.Despesa;
import devfinance.repository.DespesaRepository;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class DespesaController {

	@Autowired
	private DespesaRepository despesaRepository;
    
	// Listar todos os cartões
	@GetMapping("/despesa")
	@ResponseStatus(HttpStatus.OK)
	public List<Despesa> getAllCadastros() {
		return this.despesaRepository.findAll();
	}

	// alterar Despesa pelo id
	@PutMapping("/atualizasaldo/{Despesa_id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Despesa> updateCadastro(@PathVariable(value = "Despesa_id") Long cadastroId,
												  @RequestBody 
                								  Despesa cadastroCaracteristicas) throws ResourceNotFoundException {

					Despesa cadastro = despesaRepository.findById(cadastroId)
				.orElseThrow(() -> new ResourceNotFoundException("Cadastro não encontrado para o ID : " + cadastroId));

		cadastro.setValor(cadastroCaracteristicas.getValor());

		return ResponseEntity.ok(this.despesaRepository.save(cadastro));
	}

}
