package devfinance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import devfinance.model.Receita;

@Repository
public interface ReceitaRepository extends JpaRepository<Receita, Long>{
    
    // @Query(value = "select * from receita where placa ilike concat('%', :placa, '%')", nativeQuery = true)
    // Receita findReceitaByPlaca(@Param("placa")String placa);

    // List<Receita> findReceitaByTipo(int tipo);
    // List<Receita> findReceitaByAno(String ano);

    // @Query(value = "select * from receita where fabricante ilike concat('%', :fabricante, '%')", nativeQuery = true)
    // List<Receita> findReceitaByFabricante(@Param("fabricante")String fabricante);

    // @Query(value = "select * from receita where modelo ilike concat('%', :modelo, '%')", nativeQuery = true)
    // List<Receita> findReceitaByModelo(@Param("modelo")String modelo);
    
    // List<Receita> findReceitaByUsuario(Long usuario);
}
