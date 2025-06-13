package devfinance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import devfinance.model.Despesa;


@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Long>{
    
    // @Query(value = "select * from despesa where placa ilike concat('%', :placa, '%')", nativeQuery = true)
    // Despesa findDespesaByPlaca(@Param("placa")String placa);

    // List<Despesa> findDespesaByTipo(int tipo);
    // List<Despesa> findDespesaByAno(String ano);

    // @Query(value = "select * from despesa where fabricante ilike concat('%', :fabricante, '%')", nativeQuery = true)
    // List<Despesa> findDespesaByFabricante(@Param("fabricante")String fabricante);

    // @Query(value = "select * from despesa where modelo ilike concat('%', :modelo, '%')", nativeQuery = true)
    // List<Despesa> findDespesaByModelo(@Param("modelo")String modelo);
    
    // List<Despesa> findDespesaByUsuario(Long usuario);
}
